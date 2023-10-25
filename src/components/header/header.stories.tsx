import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>
export const HeaderStory: Story = {
  args: {
    total: 1500,
  },
}
