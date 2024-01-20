import type { Meta, StoryObj } from '@storybook/react'

import { Catalog } from '@/pages'

const meta = {
  component: Catalog,
  tags: ['autodocs'],
  title: 'Components/Catalog',
} satisfies Meta<typeof Catalog>

export default meta
type Story = StoryObj<typeof meta>
export const ProductCardsListStory: Story = {
  args: {
    pageSize: 9,
  },
}
