import { ProductInCart, addProductInCart, useAppDispatch } from '@/services'
import { Card } from '@mui/material'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import s from './productCard.module.scss'

type Props = {
  product: ProductInCart
}

export const ProductCard = ({ product }: Props) => {
  const { description, name, photo, price } = product
  const dispatch = useAppDispatch()

  const addProductHandler = () => {
    dispatch(addProductInCart({ product }))
  }

  return (
    <Paper className={s.card} elevation={3}>
      <Card className={s.cardInfo}>
        <>
          <CardMedia className={s.img} image={photo} title={name} />

          <Typography className={s.name} variant={'h6'}>
            {name}
          </Typography>
          <Typography className={s.description} variant={'body2'}>
            {description}
          </Typography>
        </>
        <>
          <Typography className={s.price} variant={'h6'}>
            Цена {price} руб.
          </Typography>
          <Button onClick={addProductHandler} variant={'contained'}>
            В корзину
          </Button>
        </>
      </Card>
    </Paper>
  )
}
