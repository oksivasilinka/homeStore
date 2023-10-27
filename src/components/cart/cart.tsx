import { Product } from '@/components/productCardsList/productCard'
import { ProductCardInCart } from '@/components/productInCart'
import Box from '@mui/material/Box'

type Props = {
  products: Product[]
}

export const Cart = ({ products }: Props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {products.map(p => (
        <ProductCardInCart key={p.id} product={p} />
      ))}
    </Box>
  )
}
