import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Catalog } from '@/pages'
import { store } from '@/services/store'

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
  decorators: [
    Story => (
      <BrowserRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </BrowserRouter>
    ),
  ],
}
