import React from 'react'

import { Empty } from './Empty'
import { render } from '@testing-library/react'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'

describe('Empty', () => {
  test('renders the Empty component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <Empty
          image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
          description='No data.'
        />
      </ThemeProvider>
    )
  })
})
