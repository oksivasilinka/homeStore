import { AppRootState } from '@/services'

export const isLoggedInSelector = (state: AppRootState) => state.auth.isLoggedIn
