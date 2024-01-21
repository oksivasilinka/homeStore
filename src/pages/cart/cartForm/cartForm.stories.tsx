import type { Meta, StoryObj } from '@storybook/react'

import { CartForm } from '@/pages'

const meta = {
  component: CartForm,
  tags: ['autodocs'],
  title: 'Components/CartForm',
} satisfies Meta<typeof CartForm>

export default meta
type Story = StoryObj<typeof meta>
export const CartFormStory: Story = {
  args: {
    totalSum: 1500,
  },
}
