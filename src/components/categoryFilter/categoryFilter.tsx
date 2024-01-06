import { useSelector } from 'react-redux'

import { Category, filterSelector, setFilter, useAppDispatch } from '@/services'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import s from './categoryFilter.module.scss'

export const CategoryFilter = () => {
  const filter = useSelector(filterSelector)
  const dispatch = useAppDispatch()

  const handleChange = (event: SelectChangeEvent) => {
    const filter = event.target.value as Category

    dispatch(setFilter({ filter }))
  }

  return (
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
        <MenuItem defaultValue={'all'} value={'all'}>
          Все товары
        </MenuItem>
        <MenuItem value={'cushioned'}>Мягкая мебель</MenuItem>
        <MenuItem value={'cabinet'}>Корпусная мебель</MenuItem>
      </Select>
    </FormControl>
  )
}
