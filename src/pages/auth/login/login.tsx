import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { AuthForm } from '@/components'
import { AuthWithGoogle } from '@/pages'
import { SignInFormData, login, setError, useAppDispatch } from '@/services'
import Typography from '@mui/material/Typography'

import s from './login.module.scss'

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setError({ error: null }))
  }, [])

  const onSubmit = (formData: SignInFormData) => {
    dispatch(login(formData))
      .then(res => {
        if (res.meta.requestId) {
          navigate('/sign-in')
        }
      })
      .catch((e: unknown) => {
        const err = e as string

        dispatch(setError({ error: err }))
      })
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
