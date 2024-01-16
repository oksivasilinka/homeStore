import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { authThunks, useAppDispatch, useAuth } from '@/services'
import Button from '@mui/material/Button'

export const AuthWithGoogle = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const dispatch = useAppDispatch()
  const { signInWithGoogle } = authThunks

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth])

  const signInWithGoogleHandler = () => {
    dispatch(signInWithGoogle())
  }

  return (
    <Button onClick={signInWithGoogleHandler} type={'button'}>
      Войти с помощью Google
    </Button>
  )
}
