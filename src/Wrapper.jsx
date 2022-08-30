/* eslint-disable */
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { salaryTheme } from './styles/themes'

import 'antd/dist/antd.css'

export const MainWrapper = ({ children }) => (
  <ThemeProvider theme={salaryTheme}>
    <div className={`px-0 py-0 lg:px-20 lg:py-10`}>{children}</div>
  </ThemeProvider>
)