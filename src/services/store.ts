import { useDispatch } from 'react-redux'

import { cartSlice, productsSlice } from '@/services'
import { authSlice } from '@/services/auth/authSlice'
import { configureStore } from '@reduxjs/toolkit'

let preloadedState
const persistedValuesString = localStorage.getItem('state')

if (persistedValuesString) {
  preloadedState = JSON.parse(persistedValuesString)
}

export const store = configureStore({
  preloadedState,
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    products: productsSlice,
  },
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch<AppDispatch>

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()))
})

// @ts-ignore
window.store = store
