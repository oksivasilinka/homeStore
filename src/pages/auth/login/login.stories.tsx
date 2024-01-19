import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Login } from '@/pages'
import { store } from '@/services/store'

const meta = {
  component: Login,
  tags: ['autodocs'],
  title: 'Components/Auth',
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>
export const AuthStory: Story = {
  args: {},
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
