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
}

export const ItemForm = ({ control, error, label, name, placeholder }: Props) => {
  return (
    <div className={s.itemForm}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!error}
            label={label}
            placeholder={placeholder}
            size={'small'}
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
