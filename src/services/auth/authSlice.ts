import { auth, googleProvider } from '@/config/firebase'
import { Error, SignInFormData, setError } from '@/services'
import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

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

export const signIn = (formData: SignInFormData) => async (dispatch: Dispatch) => {
  try {
    const data = await signInWithEmailAndPassword(auth, formData.email, formData.password)

    dispatch(
      setUser({
        email: data.user.email,
        id: data.user.uid,
        token: data.user.refreshToken,
      })
    )
    dispatch(setError({ error: null }))
  } catch (e: unknown) {
    if (e as Error) {
      if ((e as Error).code === 'auth/invalid-login-credentials') {
        dispatch(setError({ error: 'Неверный email или пароль' }))
      }
    } else {
      dispatch(setError({ error: 'Неизвестная ошибка' }))
    }
  }
}

export const signInWithGoogle = () => async (dispatch: Dispatch) => {
  try {
    const data = await signInWithPopup(auth, googleProvider)
    const credential = GoogleAuthProvider.credentialFromResult(data)
    const token = credential?.accessToken
    const user = data.user
    const email = user?.email
    const id = user?.uid

    if (token) {
      dispatch(setUser({ email, id, token }))
    }
  } catch (e) {
    console.log(e)
  }
}

export const authSlice = slice.reducer
export const { logout, setUser } = slice.actions
