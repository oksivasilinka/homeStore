import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ItemForm } from '@/components'
import { errorSelector, setError, signIn, signInSchema, useAppDispatch, useAuth } from '@/services'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import s from './signIn.module.scss'

export type SignInFormData = {
  email: string
  password: string
}

export type Error = {
  code: string
}

export const SignIn = () => {
  useEffect(() => {
    dispatch(setError({ error: null }))
  }, [])

  const navigate = useNavigate()
  const error = useSelector(errorSelector)
  const { isAuth } = useAuth()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    } else {
      return
    }
  }, [isAuth, navigate])

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInSchema),
  })

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.wrapper}>
        <Typography align={'center'} variant={'h5'}>
          Войти в аккаунт
        </Typography>

        <ItemForm
          control={control}
          error={errors.email?.message || error || undefined}
          label={'Ваш email'}
          name={'email'}
          placeholder={'Email'}
        />
        <ItemForm
          control={control}
          error={errors.password?.message || error || undefined}
          label={'Ваш пароль'}
          name={'password'}
          placeholder={'Пароль'}
          type={'password'}
        />

        <Button fullWidth type={'submit'} variant={'contained'}>
          Войти
        </Button>
      </div>
    </form>
  )
}
