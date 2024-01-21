import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '@/pages'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Pages/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const SignInStory: Story = {
  args: {},
}
