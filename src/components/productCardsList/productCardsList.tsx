import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { ProductCard } from '@/components/productCardsList/productCard'
import { AppRootState, getProducts, setCart, setCurrentPage, useAppDispatch } from '@/services'
import { Pagination } from '@mui/material'

import s from './productCardsList.module.scss'

export const ProductCardsList = () => {
  const products = useSelector((state: AppRootState) => state.products.products)
  const pageCount = useSelector((state: AppRootState) => state.products.pageCount)
  const currentPage = useSelector((state: AppRootState) => state.products.currentPage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts(currentPage))
  }, [dispatch, currentPage])

  useEffect(() => {
    const valueString = localStorage.getItem('cart')

    if (valueString) {
      const newValue = JSON.parse(valueString)

      dispatch(setCart(newValue))
    }
  }, [dispatch])

  if (!products) {
    return null // or display a loading indicator/error message
  }

  return (
    <div className={s.wrapper}>
      <Pagination
        count={pageCount}
        defaultValue={1}
        onChange={(_, value) => dispatch(setCurrentPage({ currentPage: value }))}
        page={currentPage}
        shape={'rounded'}
      />
      <div className={s.products}>
        {products.map(p => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </div>
  )
}
