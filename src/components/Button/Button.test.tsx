import React from 'react'

import { Button } from './Button'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

describe('Button', () => {
  test('renders the Button component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <Button type='primary' children='Hello world!' />
      </ThemeProvider>
    )
  })
})
