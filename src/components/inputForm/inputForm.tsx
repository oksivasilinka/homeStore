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
    const isPhoneInput = type === 'phone'

    return (
      <div className={s.itemForm}>
        <Controller
          control={control}
          defaultValue={''}
          name={name}
          render={({ field }) => (
            <>
              {!isPhoneInput && (
                <TextField
                  {...field}
                  autoComplete={autocomplete}
                  error={!!error}
                  label={label}
                  placeholder={placeholder}
                  ref={ref}
                  size={'small'}
                  type={type}
                />
              )}

              {isPhoneInput && (
                <IMaskInput
                  className={s.phoneInput}
                  {...field}
                  autoComplete={autocomplete}
                  definitions={{
                    '#': /[1-9]/,
                  }}
                  id={'phone-input'}
                  inputRef={ref}
                  label={label}
                  mask={'+000(00) 000-00-00'}
                  overwrite
                  placeholder={placeholder}
                />
              )}
            </>
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
