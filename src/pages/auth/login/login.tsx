import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import { AuthForm } from '@/components'
import { AuthWithGoogle } from '@/pages'
import { setError } from '@/services/app'
import { authThunks, isLoggedInSelector } from '@/services/auth'
import { useAppDispatch } from '@/services/store'
import { SignInFormData } from '@/services/types'
import Typography from '@mui/material/Typography'

import s from './login.module.scss'

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isLoggedIn = useSelector(isLoggedInSelector)
  const { login } = authThunks

  useEffect(() => {
    dispatch(setError({ error: null }))
  }, [])

  const onSubmit = (formData: SignInFormData) => {
    dispatch(login(formData)).then(() => {
      if (isLoggedIn) {
        navigate('/sign-in')
      }
    })
  }

  return (
    <div className={s.wrapper}>
      <AuthForm
        login
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
