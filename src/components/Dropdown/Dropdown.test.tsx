import React from 'react'

import { Button } from '../Button'
import { Dropdown } from './Dropdown'
import { render } from '@testing-library/react'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'
import { Menu, MenuItem } from '../Menu'

const longMenu = (
  <Menu>
    <MenuItem>Option 1</MenuItem>
    <MenuItem>Option 2</MenuItem>
    <MenuItem>Option 3</MenuItem>
    <MenuItem>Option 4</MenuItem>
    <MenuItem>Option 5</MenuItem>
    <MenuItem>Option 6</MenuItem>
    <MenuItem>Option 7</MenuItem>
    <MenuItem>Option 8</MenuItem>
    <MenuItem>Option 9</MenuItem>
    <MenuItem>Option 10</MenuItem>
  </Menu>
)

describe('Dropdown', () => {
  test('renders the Dropdown component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <Dropdown overlay={longMenu}>
          <Button type='primary'>click me</Button>
        </Dropdown>
      </ThemeProvider>
    )
  })
})
