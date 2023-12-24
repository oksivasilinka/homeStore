import { useDispatch } from 'react-redux'

import { cartSlice } from '@/services/slice'
import { configureStore } from '@reduxjs/toolkit'

let preloadedState
const persistedValuesString = localStorage.getItem('state')

if (persistedValuesString) {
  preloadedState = JSON.parse(persistedValuesString)
}

export const store = configureStore({
  preloadedState,
  reducer: {
    cart: cartSlice,
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
