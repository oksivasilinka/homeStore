import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: {
    email: null as null | string,
    id: null as null | string,
    token: null as null | string,
  },
  name: 'auth',
  reducers: {
    logout: state => {
      state.email = null
      state.token = null
      state.id = null
    },
    setUser: (
      state,
      action: PayloadAction<{ email: null | string; id: string; token: string }>
    ) => {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
  },
})

export const authSlice = slice.reducer
export const { logout, setUser } = slice.actions
