import { useSelector } from 'react-redux'

import { AppRootState } from '@/services'

export const useAuth = () => {
  const { email, id, token } = useSelector((state: AppRootState) => state.auth)

  return { email, id, isAuth: !!email, token }
}
