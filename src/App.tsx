import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { Header } from '@/components'
import { Cart, Catalog, Login, SignIn } from '@/pages'
import { cartSelector } from '@/services'
import { theme } from '@/styles'
import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

const pageSize = 9

export function App() {
  const cart = useSelector(cartSelector)
  const totalSum = cart.map(el => el.totalSum).reduce((a, b) => a + b, 0)

  return (
    <ThemeProvider theme={theme}>
      <Header totalSum={totalSum} />
      <Container>
        <Routes>
          <Route element={<Catalog pageSize={pageSize} />} path={'/'} />
          <Route element={<SignIn />} path={'/sign-in'} />
          <Route element={<Login />} path={'/login'} />
          <Route element={<Cart cart={cart} totalSum={totalSum} />} path={'/cart'} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}
