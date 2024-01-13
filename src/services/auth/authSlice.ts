import { auth, googleProvider } from '@/config/firebase'
import { AuthData, ErrorData, SignInFormData, setError } from '@/services'
import { Dispatch, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.token = action.payload.token
        state.id = action.payload.id
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

export const login = createAsyncThunk<
  { email: string; id: string; token: string },
  SignInFormData,
  {
    dispatch: Dispatch
    rejectWithValue: ErrorData | null
  }
>('auth/login', async (formData: SignInFormData, { dispatch, rejectWithValue }) => {
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
    if (e as ErrorData) {
      if ((e as ErrorData).code === 'auth/email-already-in-use') {
        dispatch(setError({ error: 'Пользователь с таким email уже существует' }))
      } else {
        throw new Error('Произошла ошибка')
      }
    } else {
      dispatch(setError({ error: 'Произошла ошибка' }))
    }
  }

  return rejectWithValue(null)
})

export const signIn = createAsyncThunk<
  AuthData,
  SignInFormData,
  {
    dispatch: Dispatch
    rejectWithValue: ErrorData | null
  }
>('auth/signIn', async (formData: SignInFormData, { dispatch, rejectWithValue }) => {
  try {
    const data = await signInWithEmailAndPassword(auth, formData.email, formData.password)

    dispatch(setError({ error: null }))

    return { email: data.user.email, id: data.user.uid, token: data.user.refreshToken }
  } catch (e: unknown) {
    if (e as ErrorData) {
      if ((e as ErrorData).code === 'auth/invalid-login-credentials') {
        dispatch(setError({ error: 'Неверный email или пароль' }))
      } else {
        throw new Error('Произошла ошибка')
      }
    } else {
      dispatch(setError({ error: 'Произошла ошибка' }))
    }

    return rejectWithValue(null)
  }
})

export const signInWithGoogle = createAsyncThunk<
  AuthData,
  void,
  {
    dispatch: Dispatch
    rejectWithValue: ErrorData | null
  }
>('auth/signInWithGoogle', async (_, { dispatch, rejectWithValue }) => {
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
    dispatch(setError({ error: 'Произошла ошибка' }))
  }

  return rejectWithValue(null)
})

export const authSlice = slice.reducer
export const { logout } = slice.actions
