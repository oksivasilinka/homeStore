import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { AuthForm } from '@/components'
import { SignInFormData, setError, signIn, useAppDispatch, useAuth } from '@/services'
import Typography from '@mui/material/Typography'

import s from './signIn.module.scss'

export const SignIn = () => {
  useEffect(() => {
    dispatch(setError({ error: null }))
  }, [])

  const navigate = useNavigate()
  const { isAuth } = useAuth()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    } else {
      return
    }
  }, [isAuth, navigate])

  const dispatch = useAppDispatch()

  const onSubmit = async (formData: SignInFormData) => {
    try {
      await dispatch(signIn(formData))
    } catch (error: unknown) {
      const err = error as string

      dispatch(setError({ error: err }))
    }
  }

  return (
    <div className={s.wrapper}>
      <AuthForm onSubmit={onSubmit} title={'Войти в аккаунт'} titleButton={'Войти'} />
      <Typography>
        Если у Вас нет аккаунта, пройдите <NavLink to={'/login'}>регистрацию</NavLink>
      </Typography>
    </div>
  )
}
