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
    products: [
      {
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
        description: 'Уютное кресло из новой коллекции для практически любого интерьера ',
        id: '3',
        name: 'Кресло бежевое',
        photo:
          'https://cdn0.divan.by/img/v1/GwbYqqJbqRgguT_bB_aABctlfcu-1Tke3EvSpf0cIjw/t:0::0:0/pd:123:60:123:60/rs:fit:1148:594:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQxNDA3MDQucG5n.jpg',
        price: 684,
        totalCount: 1,
        totalSum: 684,
      },
      {
        description: 'Отличный диван для современного интерьера',
        id: '4',
        name: 'Диван серый',
        photo:
          'https://cdn0.divan.by/img/v1/7bglyPBkWAo08B7ZBq7a1teDebwaA77GJKYTtjw_kG8/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQyMDMxNDYucG5n.jpg',
        price: 795,
        totalCount: 1,
        totalSum: 795,
      },
      {
        description: 'Белый напольный вместительный стелаж на деревянных ножках',
        id: '5',
        name: 'Стеллаж белый',
        photo:
          'https://cdn0.divan.by/img/v1/R4KVdahWcgzs8EGiFZPLO0ez432MsMXC2jBwHtShUt4/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:95/czM6Ly9kaXZhbi9wcm9kdWN0LzQxOTMwNTYucG5n.jpg',
        price: 385,
        totalCount: 1,
        totalSum: 385,
      },
      {
        description: 'Оригинальное кресло в натуральных оттенках',
        id: '6',
        name: 'Кресло бежевое 2',
        photo:
          'https://cdn0.divan.by/img/v1/k1pTlcc0HNqquqZa1DNt4uhkexiYltQC_fqIcDu--yQ/t:0::0:0/pd:123:60:123:60/rs:fit:1148:594:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQzODM5MzgucG5n.jpg',
        price: 645,
        totalCount: 1,
        totalSum: 645,
      },
    ],
  },
}
