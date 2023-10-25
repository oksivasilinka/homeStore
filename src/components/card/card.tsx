import { Card, CardActions } from '@mui/material'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

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
  const { description, name, photo, price } = product

  return (
    <Paper className={s.card} elevation={3}>
      <Card>
        <CardMedia image={photo} sx={{ height: 200 }} title={name} />
        <CardContent>
          <Typography variant={'h6'}>{name}</Typography>
          <Typography variant={'body2'}>{description}</Typography>
          <Typography variant={'h6'}>Цена {price} руб.</Typography>
        </CardContent>
        <CardActions>
          <Button variant={'outlined'}>Купить</Button>
        </CardActions>
      </Card>
    </Paper>
  )
}
