import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { AppRootState } from '@/services/store'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import s from './header.module.scss'

export const Header = () => {
  const cart = useSelector((state: AppRootState) => state.cart)

  const totalSum = cart.map(el => el.totalSum).reduce((a, b) => a + b, 0)

  return (
    <Box>
      <AppBar color={'secondary'} position={'fixed'}>
        <Toolbar className={s.toolbar}>
          <NavLink to={'/'}>
            <Button className={s.labelButton} component={'button'} variant={'text'}>
              Online-store
            </Button>
          </NavLink>

          <Box className={s.wrapper}>
            {!!totalSum && (
              <Typography className={s.total} component={'label'} variant={'subtitle1'}>
                {totalSum} руб.
              </Typography>
            )}
            <NavLink to={'/cart'}>
              <Button variant={'contained'}>
                <Typography>Корзина</Typography>
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
