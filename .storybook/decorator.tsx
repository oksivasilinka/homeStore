import type { Decorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../src/services/store'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../src/styles'

export const StyleDecorator: Decorator = Story => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)
