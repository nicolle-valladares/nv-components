import React from 'react'

import { Input } from './Input'
import { render } from '@testing-library/react'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'

describe('Input', () => {
  test('renders the Input component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <Input placeholder='50 Characters max' maxLength={50} />
      </ThemeProvider>
    )
  })
})
