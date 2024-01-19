import { AppRootState } from '@/services/store'

export const errorSelector = (state: AppRootState) => state.app.error
