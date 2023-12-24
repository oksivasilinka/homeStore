import { Product } from '@/components/productCardsList/productCard'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: [] as Product[],
  name: 'cart',
  reducers: {
    addProductInCart: (state, action: PayloadAction<{ product: Product }>) => {
      state.push(action.payload.product)
    },
    setCart: (state, action: PayloadAction<{ product: Product }>) => {
      state = action.payload.product
    },
  },
})

export const cartSlice = slice.reducer
export const { addProductInCart, setCart } = slice.actions
