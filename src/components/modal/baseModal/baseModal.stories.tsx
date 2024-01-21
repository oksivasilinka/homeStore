import type { Meta, StoryObj } from '@storybook/react'

import { BaseModal, ConfirmOrder, InfoConfirm } from '@/components'

const meta = {
  component: BaseModal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof BaseModal>

export default meta
type Story = StoryObj<typeof meta>

const data = {
  email: 'example@gmail.com',
  name: 'Valera',
  phone: '8-029-333-33-33',
  totalSum: 1500,
}

export const ModalConfirmOrderStory: Story = {
  args: {
    children: <ConfirmOrder callback={() => {}} data={data} />,
    isOpen: true,
  },
}

export const ModalInfoConfirmStory: Story = {
  args: {
    children: <InfoConfirm callback={() => {}} />,
    isOpen: true,
  },
}
