import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { CartFormData, formSchema } from '@/services'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import s from './cartForm.module.scss'

export const CartForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CartFormData>({
    defaultValues: {
      email: '',
      name: '',
      phone: '',
    },
    resolver: yupResolver(formSchema),
  })

  const onSubmit: SubmitHandler<CartFormData> = async (data: CartFormData) => {
    try {
      console.log(data)
    } catch (e) {
      console.log(errors.email?.message)
      console.log(e)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className={s.form}>
        <Typography className={s.subtitle} variant={'h6'}>
          Оформление заказа
        </Typography>
        <Typography align={'center'} variant={'body2'}>
          Для оформления заказа заполните форму ниже
        </Typography>
        <Controller
          control={control}
          name={'name'}
          render={({ field }) => (
            <TextField {...field} label={'Ваше имя'} placeholder={'Имя'} size={'small'} />
          )}
        />
        {errors.name?.message && <Typography color={'red'}>{errors.name.message}</Typography>}

        <Controller
          control={control}
          name={'email'}
          render={({ field }) => (
            <TextField {...field} label={'Ваш email'} placeholder={'Email'} size={'small'} />
          )}
        />
        {errors.email?.message && <Typography color={'red'}>{errors.email.message}</Typography>}

        <Controller
          control={control}
          name={'phone'}
          render={({ field }) => (
            <TextField {...field} label={'Ваш телефон'} placeholder={'Телефон'} size={'small'} />
          )}
        />
        {errors.phone?.message && <Typography color={'red'}>{errors.phone.message}</Typography>}
        <Button type={'submit'} variant={'contained'}>
          Оформить заказ
        </Button>
      </Card>
    </form>
  )
}
