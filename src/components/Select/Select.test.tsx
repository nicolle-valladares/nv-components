import React from 'react'

import { Option, Select } from './index'
import { render } from '@testing-library/react'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'

describe('Select', () => {
  test('renders the Select component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <Select
          placeholder='Select an option'
          label='Input Label'
          autoWidth
          allowClear>
          <Option value={1}>Option One</Option>
          <Option value={2}>Option Two</Option>
          <Option value={3}>Option Three</Option>
          <Option value={4}>Option Four</Option>
        </Select>
      </ThemeProvider>
    )
  })
})
