import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { ProductCard } from '@/pages'
import { store } from '@/services/store'
import { theme } from '@/styles'
import { ThemeProvider } from '@mui/material/styles'

const meta = {
  component: ProductCard,
  tags: ['autodocs'],
  title: 'Components/ProductCard',
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>
export const ProductCardStory: Story = {
  args: {
    product: {
      category: 'cushioned',
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
  decorators: [
    Story => (
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    ),
  ],
}
