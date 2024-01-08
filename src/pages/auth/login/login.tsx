import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { AuthForm } from '@/components'
import { auth } from '@/config/firebase'
import { AuthWithGoogle } from '@/pages'
import { SignInFormData, useAuth } from '@/services'
import Typography from '@mui/material/Typography'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import s from './login.module.scss'

export const Login = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuth()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth])

  const onSubmit = async (formData: SignInFormData) => {
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password)
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
      <AuthWithGoogle />

      <Typography>
        <NavLink to={'/sign-in'}>У Вас уже есть аккаунт</NavLink>
      </Typography>
    </div>
  )
}
