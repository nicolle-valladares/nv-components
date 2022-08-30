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
      order: ['Salary', ['Introduction', 'Colors', 'Typography']]
    }
  }
}

addDecorator((storyFn, context) => <MainWrapper>{storyFn()}</MainWrapper>)