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
      <AppBar position={'static'}>
        <Toolbar>
          <Typography
            className={s.labelButton}
            component={'button'}
            sx={{ flexGrow: 22 }}
            variant={'h6'}
          >
            Online-store
          </Typography>

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
            <Button
              className={s.button}
              color={'inherit'}
              sx={{ flexGrow: 1 }}
              variant={'outlined'}
            >
              <Typography>В корзину</Typography>
            </Button>
          </>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
