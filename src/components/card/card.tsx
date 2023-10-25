import { Button, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'

import s from './card.module.scss'

type Product = {
  description: string
  id: string
  name: string
  photo: string
  price: number
}

type CardProductProps = {
  product: Product
}

export const CardProducts = ({ product }: CardProductProps) => {
  return (
    <Paper className={s.card} elevation={3}>
      <div className={s.image}>
        <img alt={product.name} className={s.image} src={product.photo} />
      </div>
      <Typography variant={'h6'}>{product.name}</Typography>
      <Typography variant={'body2'}>{product.description}</Typography>
      <Typography variant={'h6'}>Цена {product.price} руб.</Typography>
      <Button variant={'outlined'}>Купить</Button>
    </Paper>
  )
}
