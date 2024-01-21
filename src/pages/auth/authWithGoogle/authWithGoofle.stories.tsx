import type { Meta, StoryObj } from '@storybook/react'

import { AuthWithGoogle } from '@/pages'

const meta = {
  component: AuthWithGoogle,
  tags: ['autodocs'],
  title: 'Components/AuthWithGoogle',
} satisfies Meta<typeof AuthWithGoogle>

export default meta
type Story = StoryObj<typeof meta>

export const AuthWithGoogleStory: Story = {
  args: {},
}
