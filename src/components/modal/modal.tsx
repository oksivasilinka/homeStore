import { CartFormData } from '@/services'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import s from './modal.module.scss'

type Props = {
  data: CartFormData
  open: boolean
  setOpen: (open: boolean) => void
}
export const ModalCart = ({ data, open, setOpen }: Props) => {
  const handleClose = () => setOpen(false)

  return (
    <Modal
      aria-describedby={'modal-modal-description'}
      aria-labelledby={'modal-modal-title'}
      onClose={handleClose}
      open={open}
    >
      <Box className={s.wrapper}>
        <Typography className={s.title} component={'h2'} id={'modal-modal-title'} variant={'h6'}>
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
            <Typography variant={'body2'}>Tелефон</Typography>
            <Typography variant={'body2'}>{data.phone}</Typography>
          </div>
          <div className={s.row}>
            <Typography variant={'body2'}>Сумма заказа</Typography>
            <Typography variant={'body2'}>{}</Typography>
          </div>
        </div>
        <Button fullWidth type={'submit'} variant={'contained'}>
          Оформить заказ
        </Button>
      </Box>
    </Modal>
  )
}
