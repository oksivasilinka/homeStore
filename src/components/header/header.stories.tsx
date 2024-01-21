import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderIsAuthStory: Story = {
  args: {
    isAuth: true,
    totalSum: 1500,
  },
}

export const HeaderStory: Story = {
  args: {
    isAuth: false,
    totalSum: 1500,
  },
}
