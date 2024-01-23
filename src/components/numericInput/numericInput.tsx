import { addProductInCart, deleteProductInCart } from '@/services/cart'
import { useAppDispatch } from '@/services/store'
import { ProductInCart } from '@/services/types'
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
    <label title={'Изменить количество'} className={s.wrapper}>
      <IconButton
        color={'primary'}
        aria-label={'reduce the number of'}
        onClick={deleteProductHandler}
      >
        <RemoveIcon />
      </IconButton>
      <TextField className={s.input} size={'small'} value={productCount} />
      <IconButton
        color={'primary'}
        aria-label={'Increase the number of'}
        onClick={addProductHandler}
      >
        <AddIcon />
      </IconButton>
    </label>
  )
}
