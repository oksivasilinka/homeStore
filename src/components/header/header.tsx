import { NavLink } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import s from './header.module.scss'

type Props = {
  total?: number
}

export const Header = ({ total }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={s.appBar} color={'secondary'} position={'static'}>
        <Toolbar>
          <NavLink to={'/'}>
            <Typography
              className={s.labelButton}
              component={'button'}
              sx={{ flexGrow: 22 }}
              variant={'h6'}
            >
              Online-store
            </Typography>
          </NavLink>

          <>
            {total && (
              <Typography
                align={'center'}
                component={'label'}
                sx={{ flexGrow: 1 }}
                variant={'subtitle1'}
              >
                {total} руб.
              </Typography>
            )}
            <NavLink to={'/cart'}>
              <Button className={s.button} sx={{ flexGrow: 1 }} variant={'contained'}>
                <Typography>В корзину</Typography>
              </Button>
            </NavLink>
          </>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
