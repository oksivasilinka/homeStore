import type { Preview } from '@storybook/react'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../src/styles/index.scss'
import { StyleDecorator } from './decorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator],
}

export default preview
