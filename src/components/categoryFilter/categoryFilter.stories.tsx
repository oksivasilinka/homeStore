import type { Meta, StoryObj } from '@storybook/react'

import { CategoryFilter } from '@/components'

const meta = {
  component: CategoryFilter,
  tags: ['autodocs'],
  title: 'Components/CategoryFilter',
} satisfies Meta<typeof CategoryFilter>

export default meta
type Story = StoryObj<typeof meta>
export const CategoryFilterStory: Story = {
  args: {},
}
