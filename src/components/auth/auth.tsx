import { ChangeEvent, useState } from 'react'

import { auth } from '@/config/firebase'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import s from './auth.module.scss'

export const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signInHandler = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
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
      <Button onClick={signInHandler} variant={'contained'}>
        Sign In
      </Button>
    </div>
  )
}
