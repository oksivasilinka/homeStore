import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: [] as ProductInCart[],
  name: 'cart',
  reducers: {
    addProductInCart: (state, action: PayloadAction<{ product: ProductInCart }>) => {
      const index = state.findIndex(el => el.id === action.payload.product.id)

      if (index !== -1) {
        state[index] = {
          ...state[index],
          totalCount: state[index].totalCount + 1,
          totalSum: state[index].totalSum + action.payload.product.price,
        }
      } else {
        state.push({
          ...action.payload.product,
          totalCount: 1,
          totalSum: action.payload.product.price,
        })
      }
    },
    setCart: (_, action: PayloadAction<{ product: ProductInCart }>) => {
      action.payload.product
    },
  },
})

export const cartSlice = slice.reducer
export const { addProductInCart, setCart } = slice.actions
export type ProductInCart = {
  description: string
  id: string
  name: string
  photo: string
  price: number
  totalCount: number
  totalSum: number
}
