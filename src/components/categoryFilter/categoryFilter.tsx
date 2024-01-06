import { useSelector } from 'react-redux'

import { Category, filterSelector, setFilter, useAppDispatch } from '@/services'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import s from './categoryFilter.module.scss'

const category = [
  { name: 'Все товары', type: 'all' },
  { name: 'Мягкая мебель', type: 'cushioned' },
  { name: 'Корпусная мебель', type: 'cabinet' },
]

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
        {category.map(item => (
          <MenuItem key={item.type} value={item.type}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
