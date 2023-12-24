import { useDispatch } from 'react-redux'

import { cartSlice } from '@/services/slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch<AppDispatch>

// @ts-ignore
window.store = store
