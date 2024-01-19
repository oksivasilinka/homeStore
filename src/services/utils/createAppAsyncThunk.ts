import { AppDispatch, AppRootState } from '@/services/store'
import { ErrorData } from '@/services/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch
  rejectValue: ErrorData | null
  state: AppRootState
}>()
