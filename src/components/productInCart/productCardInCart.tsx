import { NumericInput } from '@/components/productInCart/numericInput'
import { ProductInCart } from '@/services'
import { Card, CardActions } from '@mui/material'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import s from './productCardInCart.module.scss'

type Props = {
  product: ProductInCart
}
export const ProductCardInCart = ({ product }: Props) => {
  const { name, photo, price, totalSum } = product

  return (
    <Card className={s.wrapper}>
      <CardMedia component={'img'} image={photo} sx={{ height: 200, width: 200 }} title={name} />
      <Box className={s.productInfo}>
        <CardContent className={s.textWrapper}>
          <div>
            <Typography variant={'h6'}>{name}</Typography>

            <Typography variant={'subtitle1'}>Цена за 1шт. {price} руб.</Typography>
          </div>
          <Typography variant={'h6'}>Сумма {totalSum} руб.</Typography>
        </CardContent>
        <CardActions className={s.buttonWrapper}>
          <NumericInput product={product} />
        </CardActions>
      </Box>
    </Card>
  )
}
