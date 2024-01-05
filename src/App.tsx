import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { Auth } from '@/components/auth'
import { Cart } from '@/components/cart'
import { Header } from '@/components/header'
import { ProductCardsList } from '@/components/productCardsList'
import { setCart } from '@/services'
import { AppRootState, useAppDispatch } from '@/services/store'
import { Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#442c2e',
    },
    secondary: {
      main: '#fedbd0',
    },
  },
})

const pageSize = 9

export function App() {
  const cart = useSelector((state: AppRootState) => state.cart)
  const totalSum = cart.map(el => el.totalSum).reduce((a, b) => a + b, 0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const valueString = localStorage.getItem('cart')

    if (valueString) {
      const newValue = JSON.parse(valueString)

      dispatch(setCart(newValue))
    }
  }, [dispatch, cart])

  return (
    <ThemeProvider theme={theme}>
      <Header totalSum={totalSum} />
      <Container>
        <Routes>
          <Route element={<ProductCardsList pageSize={pageSize} />} path={'/'} />
          <Route element={<Auth />} path={'/login'} />
          <Route element={<Cart cart={cart} />} path={'/cart'} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}
