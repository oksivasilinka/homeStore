import { Product } from '@/components/productCardsList/productCard'
import { Card, CardActions } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import s from './productCardInCart.module.scss'

type Props = {
  product: Product
}
export const ProductCardInCart = ({ product }: Props) => {
  const { description, name, photo, price } = product

  return (
    <Card className={s.wrapper}>
      <CardMedia component={'img'} image={photo} sx={{ width: 200 }} title={name} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography variant={'h6'}>{name}</Typography>
          <Typography variant={'body2'}>{description}</Typography>
          <Typography variant={'h6'}>Цена {price} руб.</Typography>
        </CardContent>
        <CardActions>
          <Button variant={'outlined'}>Купить</Button>
        </CardActions>
      </Box>
    </Card>
  )
}
