import { forwardRef } from 'react'
import { Control, Controller } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import s from './inpuForm.module.scss'

type Props = {
  control: Control<any>
  error: string | undefined
  label: string
  name: string
  placeholder: string
  type?: string
}

export const ItemForm = forwardRef<HTMLInputElement, Props>(
  ({ control, error, label, name, placeholder, type }, ref) => {
    return (
      <div className={s.itemForm}>
        <Controller
          control={control}
          defaultValue={''}
          name={name}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!error}
              label={label}
              placeholder={placeholder}
              ref={ref}
              size={'small'}
              type={type}
            />
          )}
        />
        {error && (
          <Typography color={'red'} variant={'caption'}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
