import { ChangeEvent, useState } from 'react'

import { auth, googleProvider } from '@/config/firebase'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

import s from './auth.module.scss'

export const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
        Зарегистрироваться
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

      <Button onClick={signInWithGoogleHandler}>Войти с помощью Google</Button>
    </div>
  )
}
