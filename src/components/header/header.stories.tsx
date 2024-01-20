import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/services/store'
import { theme } from '@/styles'
import { ThemeProvider } from '@mui/material/styles'

import { Header } from './header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderStory: Story = {
  args: {
    totalSum: 1500,
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
