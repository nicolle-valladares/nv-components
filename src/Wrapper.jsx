/* eslint-disable */
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { salaryTheme } from './styles/themes'

import 'antd/dist/antd.css'
import { GlobalStyle } from './styles/GlobalStyle'

export const MainWrapper = ({ children }) => (
  <ThemeProvider theme={salaryTheme}>
    <GlobalStyle />
    <div className={`px-0 py-0 lg:px-20 lg:py-10`}>{children}</div>
  </ThemeProvider>
)
