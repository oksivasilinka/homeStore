import { Product } from '@/components/productCardsList/productCard'
import { ProductCardInCart } from '@/components/productInCart'
import { Card } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import s from './cart.module.scss'

type Props = {
  cart: Product[]
}

export const Cart = ({ cart }: Props) => {
  const totalSum = cart.map(el => el.price).reduce((a, b) => a + b, 0)

  return (
    <>
      <Box className={s.wrapper}>
        <Box className={s.wrapperProducts}>
          {cart.map(p => (
            <ProductCardInCart key={p.id} product={p} />
          ))}
          <div className={s.total}>
            <Typography variant={'h5'}>Итого {totalSum || 0} руб.</Typography>
          </div>
        </Box>

        <Box>
          <Card className={s.form}>
            <TextField placeholder={'name'} size={'small'} />
            <TextField placeholder={'surname'} size={'small'} />
            <TextField placeholder={'address'} size={'small'} />
            <Button variant={'contained'}>Купить</Button>
          </Card>
        </Box>
      </Box>
    </>
  )
}
