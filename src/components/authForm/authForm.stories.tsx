import type { Meta, StoryObj } from '@storybook/react'
import { AuthForm } from '@/components'

const meta = {
  component: AuthForm,
  tags: ['autodocs'],
  title: 'Components/AuthForm',
} satisfies Meta<typeof AuthForm>

export default meta
type Story = StoryObj<typeof meta>
export const AuthLoginFormStory: Story = {
  args: {
    title: 'Зарегистрироваться',
    login: true,
    titleButton: 'Зарегистрироваться',
  },
}

export const AuthSignInFormStory: Story = {
  args: {
    title: 'Войти',
    login: false,
    titleButton: 'Войти',
  },
}
