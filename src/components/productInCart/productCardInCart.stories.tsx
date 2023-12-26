import type { Meta, StoryObj } from '@storybook/react'

import { ProductCardInCart } from './productCardInCart'

const meta = {
  component: ProductCardInCart,
  tags: ['autodocs'],
  title: 'Components/ProductCardInCart',
} satisfies Meta<typeof ProductCardInCart>

export default meta
type Story = StoryObj<typeof meta>
export const ProductInCartStory: Story = {
  args: {
    product: {
      description: 'Очень модный желтый диван. Из самой новой коллекции',
      id: '1',
      name: 'Диван желтый',
      photo:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIfwXeUDy8Y_EUi8qQBrZAuSIz38EoKXVSoUUUM5dsC7k66BdnsFE0-qM7nHCt_tv5UdISqadirbax3OEn67Tga5IvKxwMcljcJyl9R3JdQBfICxuY-KQDvDBPVYpOmKWXeIz-_Q&usqp=CAc',
      price: 859,
      totalCount: 1,
      totalSum: 859,
    },
  },
}
