import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { ProductCard } from '@/components/productCardsList/productCard'
import { AppRootState, getProducts, setCurrentPage, useAppDispatch } from '@/services'
import { Pagination } from '@mui/material'

import s from './productCardsList.module.scss'

export const ProductCardsList = () => {
  const products = useSelector((state: AppRootState) => state.products.products)
  const pageCount = useSelector((state: AppRootState) => state.products.pageCount)
  const currentPage = useSelector((state: AppRootState) => state.products.currentPage)
  const dispatch = useAppDispatch()

  const pageSize = 10

  useEffect(() => {
    dispatch(getProducts(currentPage, pageSize))
  }, [dispatch, currentPage])

  if (!products) {
    return null
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
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
