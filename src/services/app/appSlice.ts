import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: {
    error: null as null | string,
  },
  name: 'app',
  reducers: {
    setError: (state, action: PayloadAction<{ error: null | string }>) => {
      state.error = action.payload.error
    },
  },
})

export const appSlice = slice.reducer
export const { setError } = slice.actions
