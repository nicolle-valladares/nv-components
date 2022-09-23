import React from 'react'

import { Button } from './Button'
import { render } from '@testing-library/react'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'

describe('Button', () => {
  test('renders the Button component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <Button type='primary' children='Hello world!' />
      </ThemeProvider>
    )
  })
})
