import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { ItemForm } from '@/components'
import { SignInFormData, errorSelector, signInSchema } from '@/services'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import s from './authForm.module.scss'

type Props = {
  onSubmit: any
  title: string
  titleButton: string
}

export const AuthForm = ({ onSubmit, title, titleButton }: Props) => {
  const error = useSelector(errorSelector)
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

      <Button fullWidth type={'submit'} variant={'contained'}>
        {titleButton}
      </Button>
    </form>
  )
}
