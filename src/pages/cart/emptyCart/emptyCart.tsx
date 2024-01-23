import { NavLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import s from './emptyCart.module.scss'

type Props = {
  link: string
  path: string
  title: string
}

export const EmptyCart = ({ link, path, title }: Props) => {
  return (
    <Box className={s.emptyCart}>
      <Typography variant={'h5'}>{title}</Typography>
      <NavLink to={path}>
        <Typography variant={'body2'}>{link}</Typography>
      </NavLink>
    </Box>
  )
}
