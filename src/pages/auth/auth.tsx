import { ChangeEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { auth, googleProvider } from '@/config/firebase'
import { setUser, useAppDispatch } from '@/services'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'

import s from './auth.module.scss'

export const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const signInHandler = async () => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password)

      dispatch(
        setUser({
          email: data.user.email,
          id: data.user.uid,
          token: data.user.refreshToken,
        })
      )
    } catch (e) {
      console.log(e)
    }
  }

  const registerHandler = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
      console.log(e)
    }
  }

  const signInWithGoogleHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      console.log(googleProvider)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  const setEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const setPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  return (
    <div className={s.wrapper}>
      <Typography align={'center'} variant={'h5'}>
        Зарегистрироваться и войти
      </Typography>
      <TextField onChange={setEmailHandler} placeholder={'email'} size={'small'} />
      <TextField
        onChange={setPasswordHandler}
        placeholder={'password'}
        size={'small'}
        type={'password'}
      />

      <Button fullWidth onClick={registerHandler} variant={'contained'}>
        Зарегистрироваться
      </Button>

      <NavLink to={'/'}>
        <Button fullWidth onClick={signInHandler} variant={'contained'}>
          Войти
        </Button>
      </NavLink>
      <Button onClick={signInWithGoogleHandler}>Войти с помощью Google</Button>
    </div>
  )
}
