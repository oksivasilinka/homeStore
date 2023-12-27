import { ProductInCart, addProductInCart, deleteProductInCart, useAppDispatch } from '@/services'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { IconButton } from '@mui/material'
import TextField from '@mui/material/TextField'

import s from './numericInput.module.scss'

type Props = {
  product: ProductInCart
}

export const NumericInput = ({ product }: Props) => {
  const dispatch = useAppDispatch()

  const productCount = product.totalCount

  const addProductHandler = () => {
    dispatch(addProductInCart({ product }))
  }

  const deleteProductHandler = () => {
    dispatch(deleteProductInCart({ product }))
  }

  return (
    <>
      <IconButton onClick={deleteProductHandler}>
        <RemoveIcon />
      </IconButton>
      <TextField className={s.input} size={'small'} value={productCount} />
      <IconButton onClick={addProductHandler}>
        <AddIcon />
      </IconButton>
    </>
  )
}
