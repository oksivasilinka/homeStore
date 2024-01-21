import type { Meta, StoryObj } from '@storybook/react'

import { Cart } from '@/pages'

const meta = {
  component: Cart,
  tags: ['autodocs'],
  title: 'Pages/Cart',
} satisfies Meta<typeof Cart>

export default meta
type Story = StoryObj<typeof meta>
export const CartIsAuthStory: Story = {
  args: {
    cart: [
      {
        category: 'cushioned',
        description: 'Комфортное кресло благородного серого цвета',
        id: '1',
        name: 'Кресло серое',
        photo:
          'https://cdn0.divan.by/img/v1/7EA7GBTSW2_RiBk1QOu2NcWDTCTOi7AI0uXY4UZATis/t:0::0:0/pd:123:60:123:60/rs:fit:1148:594:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ4MzczMzcucG5n.jpg',
        price: 859,
        totalCount: 1,
        totalSum: 859,
      },
      {
        category: 'cushioned',
        description: 'Очень модный желтый диван. Из самой новой коллекции',
        id: '2',
        name: 'Диван желтый',
        photo:
          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIfwXeUDy8Y_EUi8qQBrZAuSIz38EoKXVSoUUUM5dsC7k66BdnsFE0-qM7nHCt_tv5UdISqadirbax3OEn67Tga5IvKxwMcljcJyl9R3JdQBfICxuY-KQDvDBPVYpOmKWXeIz-_Q&usqp=CAc',
        price: 548,
        totalCount: 1,

        totalSum: 548,
      },
      {
        category: 'cushioned',
        description: 'Уютное кресло из новой коллекции для практически любого интерьера ',
        id: '3',
        name: 'Кресло бежевое',
        photo:
          'https://cdn0.divan.by/img/v1/GwbYqqJbqRgguT_bB_aABctlfcu-1Tke3EvSpf0cIjw/t:0::0:0/pd:123:60:123:60/rs:fit:1148:594:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQxNDA3MDQucG5n.jpg',
        price: 684,
        totalCount: 1,
        totalSum: 684,
      },
    ],
    isAuth: true,
    totalSum: 1500,
  },
}

export const CartStory: Story = {
  args: {
    cart: [
      {
        category: 'cushioned',
        description: 'Комфортное кресло благородного серого цвета',
        id: '1',
        name: 'Кресло серое',
        photo:
          'https://cdn0.divan.by/img/v1/7EA7GBTSW2_RiBk1QOu2NcWDTCTOi7AI0uXY4UZATis/t:0::0:0/pd:123:60:123:60/rs:fit:1148:594:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ4MzczMzcucG5n.jpg',
        price: 859,
        totalCount: 1,
        totalSum: 859,
      },
      {
        category: 'cushioned',
        description: 'Очень модный желтый диван. Из самой новой коллекции',
        id: '2',
        name: 'Диван желтый',
        photo:
          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIfwXeUDy8Y_EUi8qQBrZAuSIz38EoKXVSoUUUM5dsC7k66BdnsFE0-qM7nHCt_tv5UdISqadirbax3OEn67Tga5IvKxwMcljcJyl9R3JdQBfICxuY-KQDvDBPVYpOmKWXeIz-_Q&usqp=CAc',
        price: 548,
        totalCount: 1,

        totalSum: 548,
      },
      {
        category: 'cushioned',
        description: 'Уютное кресло из новой коллекции для практически любого интерьера ',
        id: '3',
        name: 'Кресло бежевое',
        photo:
          'https://cdn0.divan.by/img/v1/GwbYqqJbqRgguT_bB_aABctlfcu-1Tke3EvSpf0cIjw/t:0::0:0/pd:123:60:123:60/rs:fit:1148:594:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQxNDA3MDQucG5n.jpg',
        price: 684,
        totalCount: 1,
        totalSum: 684,
      },
    ],
    isAuth: false,
    totalSum: 1500,
  },
}
