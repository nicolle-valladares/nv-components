import React from 'react'

import { Checkbox } from './Checkbox'
import { render } from '@testing-library/react'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'

describe('Checkbox', () => {
  test('renders the Checkbox component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <Checkbox children='Hello world!' />
      </ThemeProvider>
    )
  })
})
