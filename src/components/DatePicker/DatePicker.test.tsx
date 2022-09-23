import React from 'react'

import { DatePicker } from './DatePicker'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

describe('DatePicker', () => {
  test('renders the DatePicker component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <DatePicker bgColor='white' />
      </ThemeProvider>
    )
  })
})
