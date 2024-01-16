import { AppDispatch, AppRootState, ErrorData } from '@/services'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch
  rejectValue: ErrorData | null
  state: AppRootState
}>()
