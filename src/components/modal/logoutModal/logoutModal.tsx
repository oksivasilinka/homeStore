import { auth } from '@/config/firebase'
import { logout } from '@/services/auth'
import { setFilter } from '@/services/products'
import { useAppDispatch } from '@/services/store'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { signOut } from 'firebase/auth'

import s from './logoutModal.module.scss'

type Props = {
  setIsOpenModal: (isOpen: boolean) => void
}

export const LogoutModal = ({ setIsOpenModal }: Props) => {
  const dispatch = useAppDispatch()
  const logoutHandler = async () => {
    try {
      await signOut(auth)
      dispatch(logout())
      dispatch(setFilter({ filter: 'all' }))
      setIsOpenModal(false)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Typography className={s.description}>Вы уверены, что хотите выйти?</Typography>
      <div className={s.wrapperButton}>
        <Button onClick={() => setIsOpenModal(false)} variant={'outlined'}>
          Отмена
        </Button>
        <Button onClick={logoutHandler} variant={'outlined'}>
          Выйти
        </Button>
      </div>
    </>
  )
}
