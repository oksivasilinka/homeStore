import { useEffect, useState } from 'react'

import { Auth } from '@/components/auth'
import { Header } from '@/components/header'
import { ProductCardsList } from '@/components/productCardsList'
import { auth, db } from '@/config/firebase'
import { Container } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore'

export function App() {
  const [products, setProducts] = useState<any[]>([])

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
    <div>
      <Header total={0} />

      <Container>
        <Auth />
        <ProductCardsList products={products} />
      </Container>
    </div>
  )
}
