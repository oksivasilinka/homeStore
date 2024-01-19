import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { AuthForm } from '@/components'
import { AuthWithGoogle } from '@/pages'
import { setError } from '@/services/app'
import { authThunks } from '@/services/auth'
import { useAppDispatch } from '@/services/store'
import { SignInFormData } from '@/services/types'
import Typography from '@mui/material/Typography'

import s from './signIn.module.scss'

export const SignIn = () => {
  useEffect(() => {
    dispatch(setError({ error: null }))
  }, [])

  const dispatch = useAppDispatch()
  const { signIn } = authThunks

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
      <AuthWithGoogle />
      <Typography>
        Если у Вас нет аккаунта, пройдите <NavLink to={'/login'}>регистрацию</NavLink>
      </Typography>
    </div>
  )
}
