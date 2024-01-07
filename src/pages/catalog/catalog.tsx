import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CategoryFilter } from '@/components'
import { ProductCard } from '@/pages'
import { getProducts, setCurrentPage, useAppDispatch, useAuth } from '@/services'
import {
  currentPageSelector,
  filterSelector,
  pageCountSelector,
  productsSelector,
} from '@/services/products'
import { Pagination } from '@mui/material'
import Typography from '@mui/material/Typography'

import s from './catalog.module.scss'

type Props = {
  pageSize: number
}

export const Catalog = ({ pageSize }: Props) => {
  const { isAuth } = useAuth()
  const products = useSelector(productsSelector)
  const pageCount = useSelector(pageCountSelector)
  const currentPage = useSelector(currentPageSelector)
  const filter = useSelector(filterSelector)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    } else {
      dispatch(getProducts(currentPage, pageSize, filter))
    }
  }, [dispatch, currentPage, filter, pageSize, isAuth, navigate])

  return (
    <>
      <Typography className={s.title} variant={'h4'}>
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
          {products?.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </>
  )
}
