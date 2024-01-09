import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ItemForm } from '@/components/inputForm'
import { ModalCart } from '@/components/modal/modal'
import { CartFormData, formSchema } from '@/services'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import s from './cartForm.module.scss'

export const CartForm = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState<CartFormData | null>(null)
  const handleOpen = (formData: CartFormData) => {
    setOpen(true)
    setData(formData)
  }

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

  const onSubmit: SubmitHandler<CartFormData> = async (formData: CartFormData) => {
    try {
      handleOpen(formData)
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
          name={'email'}
          placeholder={'Email'}
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
        {data && <ModalCart data={data} open={open} setOpen={setOpen} />}
      </Card>
    </form>
  )
}
