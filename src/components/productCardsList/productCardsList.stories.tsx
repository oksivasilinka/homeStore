import type { Meta, StoryObj } from '@storybook/react'

import { ProductCardsList } from './productCardsList'

const meta = {
  component: ProductCardsList,
  tags: ['autodocs'],
  title: 'Components/ProductCardsList',
} satisfies Meta<typeof ProductCardsList>

export default meta
type Story = StoryObj<typeof meta>
export const ProductCardsListStory: Story = {
  args: {
    pageSize: 9,
  },
}
