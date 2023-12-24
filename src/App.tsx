import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { Auth } from '@/components/auth'
import { Cart } from '@/components/cart'
import { Header } from '@/components/header'
import { ProductCardsList } from '@/components/productCardsList'
import { auth, db } from '@/config/firebase'
import { setCart } from '@/services/slice.ts'
import { AppRootState, useAppDispatch } from '@/services/store.ts'
import { Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { collection, getDocs } from 'firebase/firestore'

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
  const [products, setProducts] = useState<any[]>([])
  const dispatch = useAppDispatch()

  const productsCollectionRef = collection(db, 'product')

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getDocs(productsCollectionRef)
        const filteredData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))

        setProducts(filteredData)
      } catch (e) {
        console.log(e)
      }
    }

    getProducts()
  }, [])

  useEffect(() => {
    const valueString = localStorage.getItem('cart')

    if (valueString) {
      const newValue = JSON.parse(valueString)

      dispatch(setCart(newValue))
    }
  }, [])

  console.log(auth.currentUser?.email)

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Routes>
          <Route element={<ProductCardsList products={products} />} path={'/'} />
          <Route element={<Auth />} path={'/login'} />
          <Route element={<Cart cart={cart} />} path={'/cart'} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}
