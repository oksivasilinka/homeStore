import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { BaseModal, ConfirmOrder, InfoConfirm } from '@/components'
import { ItemForm } from '@/components/inputForm'
import { CartData, CartFormData } from '@/services/types'
import { formSchema } from '@/services/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import s from './cartForm.module.scss'

type Props = {
  clearCardHandler: () => void
  totalSum: number
}

export const CartForm = ({ clearCardHandler, totalSum }: Props) => {
  const [isOpen, setIsOpenModal] = useState(false)
  const [data, setData] = useState<CartData | null>(null)
  const [isOpenFinishModal, setIsOpenFinishModal] = useState(false)
  const [isOpenModalCart, setIsOpenConfirmOrderModal] = useState(false)

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

  const onSubmit: SubmitHandler<CartFormData> = (formData: CartFormData) => {
    setIsOpenModal(true)
    setIsOpenConfirmOrderModal(true)
    setData({ ...formData, totalSum })
  }

  const onCloseConfirmOrderModal = () => {
    setIsOpenFinishModal(true)
    setIsOpenConfirmOrderModal(false)
  }

  const oncloseFinishModal = () => {
    setIsOpenModal(false)
    setIsOpenFinishModal(false)
    clearCardHandler()
  }

  const onCloseCallback = () => {
    setIsOpenModal(false)
    setIsOpenConfirmOrderModal(false)
    setIsOpenFinishModal(false)
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
          type={'phone'}
        />
        <Button type={'submit'} variant={'contained'}>
          Оформить заказ
        </Button>
        {data && (
          <BaseModal callback={onCloseCallback} data={data} isOpen={isOpen}>
            <>
              {isOpenModalCart && <ConfirmOrder callback={onCloseConfirmOrderModal} data={data} />}
              {isOpenFinishModal && <InfoConfirm callback={oncloseFinishModal} />}
            </>
          </BaseModal>
        )}
      </Card>
    </form>
  )
}
