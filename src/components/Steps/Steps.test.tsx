import React from 'react'

import { Steps } from './Steps'
import { render } from '@testing-library/react'
import { salaryTheme } from '../../styles/themes'
import { ThemeProvider } from 'styled-components'

const steps = [
  { title: 'Start' },
  { title: 'In Progress' },
  { title: 'Finished' }
]

describe('Steps', () => {
  test('renders the Steps component', () => {
    render(
      <ThemeProvider theme={salaryTheme}>
        <Steps
          direction='vertical'
          variant='secondary'
          steps={steps}
          current={1}
        />
      </ThemeProvider>
    )
  })
})
