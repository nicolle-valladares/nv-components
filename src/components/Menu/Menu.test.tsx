import React from 'react'

import { MenuItem, Menu, SubMenu } from './index'
import { render } from '@testing-library/react'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'

describe('Menu', () => {
  test('renders the Menu component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='inline'>
          <SubMenu key='sub1' title='Option 1'>
            <MenuItem key='1'>Option 1.1</MenuItem>
            <MenuItem key='2'>Option 1.2</MenuItem>
            <MenuItem key='3'>Option 1.3</MenuItem>
            <MenuItem key='4'>Option 1.4</MenuItem>
          </SubMenu>
          <SubMenu key='sub2' title='Option 2'>
            <MenuItem key='1'>Option 2.1</MenuItem>
            <MenuItem key='2'>Option 2.2</MenuItem>
            <MenuItem key='3'>Option 2.3</MenuItem>
            <MenuItem key='4'>Option 2.4</MenuItem>
          </SubMenu>
        </Menu>
      </ThemeProvider>
    )
  })
})
