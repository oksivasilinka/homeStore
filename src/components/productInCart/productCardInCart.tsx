import { ProductInCart, addProductInCart, deleteProductInCart } from '@/services/slice'
import { useAppDispatch } from '@/services/store'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Card, CardActions, IconButton } from '@mui/material'
import Box from '@mui/material/Box'
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
      <Box className={s.productInfo}>
        <CardContent className={s.textWrapper}>
          <div>
            <Typography variant={'h6'}>{name}</Typography>

            <Typography variant={'subtitle1'}>Цена за 1шт. {price} руб.</Typography>
          </div>
          <Typography variant={'h6'}>Сумма {totalSum} руб.</Typography>
        </CardContent>
        <CardActions className={s.buttonWrapper}>
          <IconButton onClick={deleteProductHandler}>
            <RemoveIcon />
          </IconButton>
          <TextField className={s.input} size={'small'} value={productCount} />
          <IconButton onClick={addProductHandler}>
            <AddIcon />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  )
}
