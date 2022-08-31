import { addDecorator } from '@storybook/react'
import { MainWrapper } from '../src/Wrapper'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ['Red Abierta', 'Theme', 'Components']
    }
  },
  layout: 'centered'
}

addDecorator((storyFn, context) => <MainWrapper>{storyFn()}</MainWrapper>)
