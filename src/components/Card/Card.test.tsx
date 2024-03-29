import React from 'react'
import { Card } from './Card'
import { render } from '@testing-library/react'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'

describe('Card', () => {
  test('renders the Card component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <Card children='Hello world!' />
      </ThemeProvider>
    )
  })
})
