import type { Meta, StoryObj } from '@storybook/react'

import { Login } from '@/pages'

const meta = {
  component: Login,
  tags: ['autodocs'],
  title: 'Components/Auth',
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>
export const AuthStory: Story = {
  args: {},
}
