import { CartData } from '@/services/types'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import s from './confirmOrder.module.scss'

type Props = {
  callback: () => void
  data: CartData
}
export const ConfirmOrder = ({ callback, data }: Props) => {
  const newData = { ...data, totalSum: `${data.totalSum} руб.` }

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
        {Object.entries(newData).map(([label, value]) => (
          <div className={s.row} key={label}>
            <Typography variant={'body2'}>{label}</Typography>
            <Typography variant={'body2'}>{value}</Typography>
          </div>
        ))}
      </div>
      <Button fullWidth onClick={callback} variant={'contained'}>
        Оформить заказ
      </Button>
    </>
  )
}
