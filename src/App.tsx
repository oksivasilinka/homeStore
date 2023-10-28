import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Auth } from '@/components/auth'
import { Cart } from '@/components/cart'
import { Header } from '@/components/header'
import { ProductCardsList } from '@/components/productCardsList'
import { auth, db } from '@/config/firebase'
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
  const [products, setProducts] = useState<any[]>([])
  const total: number = 1500

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

  console.log(auth.currentUser?.email)

  return (
    <ThemeProvider theme={theme}>
      <Header total={total} />
      <Container>
        <Routes>
          <Route element={<ProductCardsList products={products} />} path={'/'} />
          <Route element={<Auth />} path={'/login'} />
          <Route element={<Cart products={products} total={total} />} path={'/cart'} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}
