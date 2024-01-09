import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import s from './infoConfirm.module.scss'

type Props = {
  callback: () => void
}

export const InfoConfirm = ({ callback }: Props) => {
  return (
    <>
      <Typography className={s.title} component={'h2'} variant={'h6'}>
        Ваш заказ оформлен!
      </Typography>
      <Typography align={'center'}>Скоро с Вами свяжется наш менеджер</Typography>
      <Button fullWidth onClick={callback} variant={'contained'}>
        Закрыть
      </Button>
    </>
  )
}
