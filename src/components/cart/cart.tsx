import { Product } from '@/components/productCardsList/productCard'
import { ProductCardInCart } from '@/components/productInCart'
import { Card } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

type Props = {
  products: Product[]
  total?: number
}

export const Cart = ({ products, total }: Props) => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {products.map(p => (
            <ProductCardInCart key={p.id} product={p} />
          ))}
        </Box>
        <Box>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              padding: '10px',
              width: '300px',
            }}
          >
            <TextField placeholder={'name'} size={'small'} />
            <TextField placeholder={'surname'} size={'small'} />
            <TextField placeholder={'address'} size={'small'} />
            <Button variant={'contained'}>Купить</Button>
          </Card>
        </Box>
      </Box>
      <Typography variant={'h5'}>Итого {total || 0} руб.</Typography>
    </>
  )
}
