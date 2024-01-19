import { auth, googleProvider } from '@/config/firebase'
import { setError } from '@/services/app'
import { AuthData, LoginData, SignInFormData } from '@/services/types'
import { firebaseErrorHandler } from '@/services/utils'
import { createAppAsyncThunk } from '@/services/utils/createAppAsyncThunk'
import { createSlice } from '@reduxjs/toolkit'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'

const slice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.token = action.payload.token
        state.id = action.payload.id
        state.isLoggedIn = true
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.token = action.payload.token
        state.id = action.payload.id
        state.isLoggedIn = true
      })
      .addCase(login.fulfilled, state => {
        state.isLoggedIn = true
      })
  },
  initialState: {
    email: null as null | string,
    id: null as null | string,
    isLoggedIn: false,
    token: null as null | string,
  },
  name: 'auth',
  reducers: {
    logout: state => {
      state.email = null
      state.token = null
      state.id = null
      state.isLoggedIn = false
    },
  },
})

const login = createAppAsyncThunk<LoginData, SignInFormData>(
  'auth/login',
  async (formData: SignInFormData, { dispatch, rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      dispatch(setError({ error: null }))

      if (auth.currentUser?.uid && auth.currentUser.refreshToken) {
        return {
          email: formData.email,
          id: auth.currentUser.uid,
          token: auth.currentUser.refreshToken,
        }
      }
    } catch (e: unknown) {
      firebaseErrorHandler(e, dispatch, {
        'auth/email-already-in-use': 'Пользователь с таким email уже существует',
      })
    }

    return rejectWithValue(null)
  }
)

const signIn = createAppAsyncThunk<AuthData, SignInFormData>(
  'auth/signIn',
  async (formData: SignInFormData, { dispatch, rejectWithValue }) => {
    try {
      const data = await signInWithEmailAndPassword(auth, formData.email, formData.password)

      dispatch(setError({ error: null }))

      return { email: data.user.email, id: data.user.uid, token: data.user.refreshToken }
    } catch (e: unknown) {
      firebaseErrorHandler(e, dispatch, {
        'auth/invalid-login-credentials': 'Неверный email или пароль',
      })

      return rejectWithValue(null)
    }
  }
)

const signInWithGoogle = createAppAsyncThunk<AuthData, void>(
  'auth/signInWithGoogle',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await signInWithPopup(auth, googleProvider)
      const credential = GoogleAuthProvider.credentialFromResult(data)
      const token = credential?.accessToken
      const user = data.user
      const email = user?.email
      const id = user?.uid

      if (!token) {
        return rejectWithValue(null)
      } else {
        return { email, id, token }
      }
    } catch (e) {
      firebaseErrorHandler(e, dispatch)
    }

    return rejectWithValue(null)
  }
)

export const authSlice = slice.reducer
export const { logout } = slice.actions
export const authThunks = { login, signIn, signInWithGoogle }
