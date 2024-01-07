import { NavLink } from 'react-router-dom'

import { AuthForm } from '@/components'
import { auth, googleProvider } from '@/config/firebase'
import { SignInFormData } from '@/services'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

import s from './login.module.scss'

export const Login = () => {
  const onSubmit = async (formData: SignInFormData) => {
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password)
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

  return (
    <div className={s.wrapper}>
      <AuthForm
        onSubmit={onSubmit}
        title={'Зарегистрироваться'}
        titleButton={'Зарегистрироваться'}
      />

      <Button onClick={signInWithGoogleHandler} type={'button'}>
        Войти с помощью Google
      </Button>
      <Typography>
        <NavLink to={'/sign-in'}>У Вас уже есть аккаунт</NavLink>
      </Typography>
    </div>
  )
}
