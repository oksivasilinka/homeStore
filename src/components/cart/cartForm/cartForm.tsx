import { SubmitHandler, useForm } from 'react-hook-form'

import { ItemForm } from '@/components/cart/cartForm/inputForm'
import { CartFormData, formSchema } from '@/services'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card } from '@mui/material'
import Button from '@mui/material/Button'
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
        <ItemForm
          control={control}
          error={errors.name?.message}
          label={'Ваше имя'}
          name={'name'}
          placeholder={'Имя'}
        />

        <ItemForm
          control={control}
          error={errors.email?.message}
          label={'Ваш email'}
          name={'Email'}
          placeholder={'Телефон'}
        />

        <ItemForm
          control={control}
          error={errors.phone?.message}
          label={'Ваш телефон'}
          name={'phone'}
          placeholder={'Телефон'}
        />
        <Button type={'submit'} variant={'contained'}>
          Оформить заказ
        </Button>
      </Card>
    </form>
  )
}
