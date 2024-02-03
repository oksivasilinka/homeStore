import { forwardRef } from 'react'
import { Control, Controller } from 'react-hook-form'
import { IMaskInput } from 'react-imask'

import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import s from './inpuForm.module.scss'

type Props = {
  autocomplete?: string
  control?: Control<any>
  error: string | undefined
  label: string
  name: string
  placeholder: string
  type?: string
}

export const ItemForm = forwardRef<HTMLInputElement, Props>(
  ({ autocomplete, control, error, label, name, placeholder, type }, ref) => {
    return (
      <div className={s.itemForm}>
        <Controller
          control={control}
          defaultValue={''}
          name={name}
          render={({ field }) => (
            <TextField
              {...field}
              InputProps={{
                inputComponent: IMaskInputWrapper,
                inputProps: {
                  autoComplete: autocomplete,
                  mask: type === 'phone' ? '+000(00) 000-00-00' : undefined,
                },
              }}
              autoComplete={autocomplete}
              error={!!error}
              label={label}
              onChange={e => {
                field.onChange(e.target.value)
              }}
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

const IMaskInputWrapper = forwardRef<HTMLInputElement, any>((props, ref) => {
  return <IMaskInput {...props} inputRef={ref} maskchar={null} />
})
