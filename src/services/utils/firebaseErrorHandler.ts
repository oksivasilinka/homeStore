import { ErrorData, setError } from '@/services'
import { Dispatch } from '@reduxjs/toolkit'

export const firebaseErrorHandler = (
  e: unknown,
  dispatch: Dispatch,
  errorMessages?: Record<string, string>
) => {
  const error = e as ErrorData
  let message

  if (errorMessages) {
    message = errorMessages[error.code] || 'Произошла ошибка'
  } else {
    message = 'Произошла ошибка'
  }

  dispatch(setError({ error: message }))
}
