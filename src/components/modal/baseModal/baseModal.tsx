import { ReactNode } from 'react'

import { CartFormData } from '@/services/types'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box'

import s from './baseModal.module.scss'

type Props = {
  callback?: () => void
  children: ReactNode
  data?: CartFormData | null
  isOpen: boolean
}

export const BaseModal = ({ callback, children, isOpen }: Props) => {
  return (
    <Modal
      aria-describedby={'baseModal-baseModal-description'}
      aria-labelledby={'baseModal-baseModal-title'}
      onClose={callback}
      open={isOpen}
    >
      <Box className={s.wrapper}>{children}</Box>
    </Modal>
  )
}
