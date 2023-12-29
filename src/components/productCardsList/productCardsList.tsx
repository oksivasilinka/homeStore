import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { ProductCard } from '@/components/productCardsList/productCard'
import { AppRootState, Category, getProducts, setCurrentPage, useAppDispatch } from '@/services'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import Typography from '@mui/material/Typography'

import s from './productCardsList.module.scss'

type Props = {
  pageSize: number
}

export const ProductCardsList = ({ pageSize }: Props) => {
  const products = useSelector((state: AppRootState) => state.products.products)
  const pageCount = useSelector((state: AppRootState) => state.products.pageCount)
  const currentPage = useSelector((state: AppRootState) => state.products.currentPage)
  const [filter, setFilter] = useState<'' | Category>('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts(currentPage, pageSize, filter))
  }, [dispatch, currentPage, filter, pageSize])

  const handleChange = (event: SelectChangeEvent) => {
    const selectedFilter = event.target.value as Category

    setFilter(selectedFilter)
    dispatch(getProducts(1, pageSize, selectedFilter))
  }

  return (
    <>
      <Typography className={s.title} variant={'h4'}>
        Каталог
      </Typography>
      <div className={s.wrapper}>
        <div className={s.wrapperFilter}>
          <FormControl className={s.select} size={'small'}>
            <InputLabel id={'select-label'}>Фильтр</InputLabel>
            <Select
              id={'select'}
              label={'Фильтр'}
              labelId={'select-label'}
              onChange={handleChange}
              size={'small'}
              value={filter}
            >
              <MenuItem value={'cushioned'}>Мягкая мебель</MenuItem>
              <MenuItem value={'cabinet'}>Корпусная мебель</MenuItem>
            </Select>
          </FormControl>
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
