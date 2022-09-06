import React from 'react'

import { Checkbox } from './Checkbox'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

describe('Button', () => {
  test('renders the Checkbox component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <Checkbox children='Hello world!' />
      </ThemeProvider>
    )
  })
})