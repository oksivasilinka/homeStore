import type { Meta, StoryObj } from '@storybook/react'

import TextField from '@mui/material/TextField'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const InputStory: Story = {
  args: {
    error: undefined,
    label: 'Ваш email',
    name: 'email',
    placeholder: 'Ваш email',
  },
}

export const InputPasswordStory: Story = {
  args: {
    error: undefined,
    label: 'Ваш пароль',
    name: 'password',
    placeholder: 'Ваш пароль',
    type: 'password',
  },
}

export const InputWithErrorStory: Story = {
  args: {
    error: true,
    label: 'Ваш email',
    name: 'email',
    placeholder: 'Ваш email',
  },
}
