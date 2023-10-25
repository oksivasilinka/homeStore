import type { Meta, StoryObj } from '@storybook/react'

import { CardProducts } from './card'

const meta = {
  component: CardProducts,
  tags: ['autodocs'],
  title: 'Components/CardProducts',
} satisfies Meta<typeof CardProducts>

export default meta
type Story = StoryObj<typeof meta>
export const CardProductsStory: Story = {
  args: {
    product: {
      description: 'Очень модный желтый диван. Из самой новой коллекции',
      id: '1',
      name: 'Диван желтый',
      photo:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIfwXeUDy8Y_EUi8qQBrZAuSIz38EoKXVSoUUUM5dsC7k66BdnsFE0-qM7nHCt_tv5UdISqadirbax3OEn67Tga5IvKxwMcljcJyl9R3JdQBfICxuY-KQDvDBPVYpOmKWXeIz-_Q&usqp=CAc',
      price: 859,
    },
  },
}
