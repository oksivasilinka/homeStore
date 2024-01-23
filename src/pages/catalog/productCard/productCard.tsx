import { addProductInCart, cartSelector } from '@/services/cart'
import { useAppDispatch } from '@/services/store'
import { ProductInCart } from '@/services/types'
import { Card } from '@mui/material'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import s from './productCard.module.scss'
import { useSelector } from 'react-redux'
import { NumericInput } from '@/components'

type Props = {
  product: ProductInCart
}

export const ProductCard = ({ product }: Props) => {
  const { description, name, photo, price } = product
  const cart = useSelector(cartSelector)
  const dispatch = useAppDispatch()

  const addProductHandler = () => {
    dispatch(addProductInCart({ product }))
  }

  const productInCart = cart.find(el => el.id === product.id)

  return (
    <Paper className={s.card} elevation={3}>
      <Card className={s.cardInfo}>
        <>
          <CardMedia className={s.img} image={photo} title={name} />

          <Typography className={s.name} variant={'h5'}>
            {name}
          </Typography>
          <Typography className={s.description} variant={'body2'}>
            {description}
          </Typography>
        </>
        <>
          <Typography color={'primary'} className={s.price} variant={'h6'}>
            Цена {price} руб.
          </Typography>
          {!productInCart && (
            <Button className={s.button} onClick={addProductHandler} variant={'contained'}>
              В корзину
            </Button>
          )}

          {productInCart && <NumericInput product={productInCart} />}
        </>
      </Card>
    </Paper>
  )
}
