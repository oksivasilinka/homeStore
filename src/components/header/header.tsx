import { NavLink } from 'react-router-dom'

import { auth } from '@/config/firebase'
import { logout } from '@/services/auth'
import { setFilter } from '@/services/products'
import { useAppDispatch } from '@/services/store'
import { Container } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { signOut } from 'firebase/auth'

import s from './header.module.scss'

type Props = {
  isAuth: boolean
  totalSum: number
}
export const Header = ({ isAuth, totalSum }: Props) => {
  const dispatch = useAppDispatch()

  const logoutHandler = async () => {
    try {
      await signOut(auth)
      dispatch(logout())
      dispatch(setFilter({ filter: 'all' }))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Box>
      <AppBar color={'secondary'} position={'fixed'}>
        <Container style={{ padding: 0 }}>
          <Toolbar className={s.toolbar}>
            <NavLink to={'/'}>
              <Button className={s.labelButton} component={'button'} variant={'text'}>
                Online-store
              </Button>
            </NavLink>

            <Box className={s.wrapper}>
              {!!totalSum && isAuth && (
                <Typography className={s.total} component={'label'} variant={'subtitle1'}>
                  {totalSum} руб.
                </Typography>
              )}
              {isAuth && (
                <>
                  <NavLink to={'/cart'}>
                    <Button variant={'contained'}>
                      <Typography>Корзина</Typography>
                    </Button>
                  </NavLink>
                  <Button onClick={logoutHandler}>Выйти</Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
