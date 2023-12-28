import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { Auth } from '@/components/auth'
import { Cart } from '@/components/cart'
import { Header } from '@/components/header'
import { ProductCardsList } from '@/components/productCardsList'
import { AppRootState } from '@/services/store'
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

export function App() {
  const cart = useSelector((state: AppRootState) => state.cart)

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Routes>
          <Route element={<ProductCardsList />} path={'/'} />
          <Route element={<Auth />} path={'/login'} />
          <Route element={<Cart cart={cart} />} path={'/cart'} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}
