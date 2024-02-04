import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CategoryFilter } from '@/components'
import { ProductCard } from '@/pages'
import {
  currentPageSelector,
  filterSelector,
  pageCountSelector,
  productsSelector,
  productsThunks,
  setCurrentPage,
} from '@/services/products'
import { useAppDispatch } from '@/services/store'
import { ProductInCart } from '@/services/types'
import { Pagination } from '@mui/material'
import Typography from '@mui/material/Typography'

import s from './catalog.module.scss'

type Props = {
  isAuth: boolean
  pageSize: number
}

export const Catalog = ({ isAuth, pageSize }: Props) => {
  const products = useSelector(productsSelector)
  const pageCount = useSelector(pageCountSelector)
  const currentPage = useSelector(currentPageSelector)
  const filter = useSelector(filterSelector)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { getProducts } = productsThunks

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    } else {
      dispatch(getProducts({ currentPage, filter, pageSize }))
    }
  }, [dispatch, currentPage, filter, pageSize, isAuth, navigate])

  return (
    <>
      <Typography className={s.title} color={'primary'} variant={'h4'}>
        Каталог
      </Typography>
      <div className={s.wrapper}>
        <div className={s.wrapperFilter}>
          <CategoryFilter />
          <Pagination
            count={pageCount}
            defaultValue={1}
            onChange={(_, value) => dispatch(setCurrentPage({ currentPage: value }))}
            page={currentPage}
            shape={'rounded'}
          />
        </div>
        <div className={s.products}>
          {products?.map((p: ProductInCart) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </>
  )
}
