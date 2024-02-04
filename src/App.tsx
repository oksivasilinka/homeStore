import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { Header } from '@/components'
import { Cart, Catalog, Login, SignIn } from '@/pages'
import { statusSelector } from '@/services/app'
import { cartSelector } from '@/services/cart'
import { useAuth } from '@/services/hooks'
import { ProductInCart } from '@/services/types'
import { theme } from '@/styles'
import { CircularProgress, Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import s from './App.module.scss'

const pageSize = 9

export function App() {
  const cart = useSelector(cartSelector)
  const { isAuth } = useAuth()

  const status = useSelector(statusSelector)
  const totalSum = cart
    .map((el: ProductInCart) => el.totalSum)
    .reduce((a: number, b: number) => a + b, 0)

  return (
    <ThemeProvider theme={theme}>
      <Header isAuth={isAuth} totalSum={totalSum} />
      <Container>
        <Routes>
          <Route element={<Catalog isAuth={isAuth} pageSize={pageSize} />} path={'/'} />
          <Route element={<SignIn />} path={'/sign-in'} />
          <Route element={<Login />} path={'/login'} />
          <Route
            element={<Cart cart={cart} isAuth={isAuth} totalSum={totalSum} />}
            path={'/cart'}
          />
        </Routes>
        {status === 'loading' && <CircularProgress className={s.loader} color={'secondary'} />}
      </Container>
    </ThemeProvider>
  )
}
