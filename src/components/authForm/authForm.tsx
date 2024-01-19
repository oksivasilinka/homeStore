import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { ItemForm } from '@/components'
import { errorSelector } from '@/services/app'
import { SignInFormData } from '@/services/types'
import { loginSchema, signInSchema } from '@/services/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import s from './authForm.module.scss'

type Props = {
  login?: boolean
  onSubmit: any
  title: string
  titleButton: string
}

export const AuthForm = ({ login, onSubmit, title, titleButton }: Props) => {
  const error = useSelector(errorSelector)
  const schema = login ? loginSchema : signInSchema
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  return (
    <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <Typography align={'center'} variant={'h5'}>
        {title}
      </Typography>
      <ItemForm
        autocomplete={'on'}
        control={control}
        error={errors.email?.message || error || undefined}
        label={'Ваш email'}
        name={'email'}
        placeholder={'Email'}
      />
      <ItemForm
        autocomplete={'on'}
        control={control}
        error={errors.password?.message || error || undefined}
        label={'Ваш пароль'}
        name={'password'}
        placeholder={'Пароль'}
        type={'password'}
      />
      {login && (
        <ItemForm
          autocomplete={'off'}
          control={control}
          error={errors.confirmPassword?.message || error || undefined}
          label={'Повторите пароль'}
          name={'confirmPassword'}
          placeholder={'Повторите пароль'}
          type={'password'}
        />
      )}

      <Button fullWidth type={'submit'} variant={'contained'}>
        {titleButton}
      </Button>
    </form>
  )
}
