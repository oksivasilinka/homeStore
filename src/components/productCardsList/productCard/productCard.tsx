import { useSelector } from 'react-redux'

import { addProductInCart } from '@/services/slice'
import { AppRootState, useAppDispatch } from '@/services/store'
import { Card } from '@mui/material'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import s from './productCard.module.scss'

export type Product = {
  description: string
  id: string
  name: string
  photo: string
  price: number
}

type Props = {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const { description, name, photo, price } = product
  const cart = useSelector((state: AppRootState) => state.cart)
  const dispatch = useAppDispatch()

  const addProductHandler = () => {
    dispatch(addProductInCart({ product }))
    console.log(cart)
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
