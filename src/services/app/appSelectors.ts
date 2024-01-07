import { AppRootState } from '@/services'

export const errorSelector = (state: AppRootState) => state.app.error
