import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { BaseModal, LogoutModal } from '@/components'
import { Container } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import s from './header.module.scss'

type Props = {
  isAuth: boolean
  totalSum: number
}
export const Header = ({ isAuth, totalSum }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <Box>
      <AppBar color={'secondary'} position={'fixed'}>
        <Container style={{ padding: 0 }}>
          <Toolbar className={s.toolbar}>
            <NavLink to={'/'}>
              <Button className={s.labelButton} component={'button'} variant={'text'}>
                Home-store
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
                  <Button onClick={() => setIsOpenModal(true)}>Выйти</Button>
                  <BaseModal isOpen={isOpenModal}>
                    <LogoutModal setIsOpenModal={setIsOpenModal} />
                  </BaseModal>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
