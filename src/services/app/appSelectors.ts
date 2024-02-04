import { AppRootState } from '@/services/store'

export const errorSelector = (state: AppRootState) => state.app.error
export const statusSelector = (state: AppRootState) => state.app.status
