import { AppRootState } from '@/services/store'

export const isLoggedInSelector = (state: AppRootState) => state.auth.isLoggedIn
