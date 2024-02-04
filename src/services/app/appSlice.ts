import { Status } from '@/services/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: {
    error: null as null | string,
    status: 'idle' as Status,
  },
  name: 'app',
  reducers: {
    setError: (state, action: PayloadAction<{ error: null | string }>) => {
      state.error = action.payload.error
    },
    setStatus: (state, action: PayloadAction<{ status: Status }>) => {
      state.status = action.payload.status
    },
  },
})

export const appSlice = slice.reducer
export const { setError, setStatus } = slice.actions
