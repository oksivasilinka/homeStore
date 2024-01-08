import { signInWithGoogle, useAppDispatch } from '@/services'
import Button from '@mui/material/Button'

export const AuthWithGoogle = () => {
  const dispatch = useAppDispatch()

  const signInWithGoogleHandler = () => {
    dispatch(signInWithGoogle())
  }

  return (
    <Button onClick={signInWithGoogleHandler} type={'button'}>
      Войти с помощью Google
    </Button>
  )
}
