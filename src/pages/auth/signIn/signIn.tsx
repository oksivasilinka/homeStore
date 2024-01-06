import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ItemForm } from '@/components'
import { auth } from '@/config/firebase'
import { setUser, signInSchema, useAppDispatch } from '@/services'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { signInWithEmailAndPassword } from 'firebase/auth'

import s from './../auth.module.scss'

export type SignInFormData = {
  email: string
  password: string
}

export type Error = {
  code: string
}

export const SignIn = () => {
  const navigate = useNavigate()
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
      const data = await signInWithEmailAndPassword(auth, formData.email, formData.password)

      dispatch(
        setUser({
          email: data.user.email,
          id: data.user.uid,
          token: data.user.refreshToken,
        })
      )
      navigate('/')
    } catch (e: unknown) {
      if (e as Error) {
        if ((e as Error).code === 'auth/invalid-login-credentials') {
          alert('Неверный email или пароль')
        }
      } else {
        alert('Неизвестная ошибка')
      }
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
          error={errors.email?.message}
          label={'Ваш email'}
          name={'email'}
          placeholder={'Email'}
        />
        <ItemForm
          control={control}
          error={errors.password?.message}
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
