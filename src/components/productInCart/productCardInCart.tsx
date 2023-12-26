import { ProductInCart, addProductInCart, deleteProductInCart } from '@/services/slice'
import { useAppDispatch } from '@/services/store'
import { Card, CardActions } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import s from './productCardInCart.module.scss'

type Props = {
  product: ProductInCart
}
export const ProductCardInCart = ({ product }: Props) => {
  const { name, photo, price, totalCount, totalSum } = product
  const dispatch = useAppDispatch()

  const productCount = totalCount

  const addProductHandler = () => {
    dispatch(addProductInCart({ product }))
  }

  const deleteProductHandler = () => {
    dispatch(deleteProductInCart({ product }))
  }

  return (
    <Card className={s.wrapper}>
      <CardMedia component={'img'} image={photo} sx={{ width: 200 }} title={name} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography variant={'h6'}>{name}</Typography>

          <Typography variant={'subtitle1'}>Цена за 1шт. {price} руб.</Typography>
          <Typography variant={'h6'}>Сумма {totalSum} руб.</Typography>
        </CardContent>
        <CardActions>
          <Box className={s.buttonWrapper}>
            <Button
              className={s.button}
              onClick={deleteProductHandler}
              size={'small'}
              variant={'outlined'}
            >
              -
            </Button>
            <TextField className={s.input} size={'small'} value={productCount} />
            <Button
              className={s.button}
              onClick={addProductHandler}
              size={'small'}
              variant={'outlined'}
            >
              +
            </Button>
          </Box>
        </CardActions>
      </Box>
    </Card>
  )
}
