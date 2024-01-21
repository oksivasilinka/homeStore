import type { Meta, StoryObj } from '@storybook/react'

import { Catalog } from '@/pages'

const meta = {
  component: Catalog,
  tags: ['autodocs'],
  title: 'Pages/Catalog',
} satisfies Meta<typeof Catalog>

export default meta
type Story = StoryObj<typeof meta>
export const CatalogStory: Story = {
  args: {
    isAuth: true,
    pageSize: 9,
  },
}
