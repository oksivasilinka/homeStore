import { CartFormData } from '@/services'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import s from './confirmOrder.module.scss'

type Props = {
  callback: () => void
  data: CartFormData
}
export const ConfirmOrder = ({ callback, data }: Props) => {
  return (
    <>
      <Typography
        className={s.title}
        component={'h2'}
        id={'baseModal-baseModal-title'}
        variant={'h6'}
      >
        Подтвердите Ваш заказ
      </Typography>
      <div className={s.infoWrapper}>
        <div className={s.row}>
          <Typography variant={'body2'}>Имя</Typography>
          <Typography variant={'body2'}>{data.name}</Typography>
        </div>

        <div className={s.row}>
          <Typography variant={'body2'}>Email</Typography>
          <Typography variant={'body2'}>{data.email}</Typography>
        </div>

        <div className={s.row}>
          <Typography variant={'body2'}>Телефон</Typography>
          <Typography variant={'body2'}>{data.phone}</Typography>
        </div>
        <div className={s.row}>
          <Typography variant={'body2'}>Сумма заказа</Typography>
          <Typography variant={'body2'}>{}</Typography>
        </div>
      </div>
      <Button fullWidth onClick={callback} variant={'contained'}>
        Оформить заказ
      </Button>
    </>
  )
}
