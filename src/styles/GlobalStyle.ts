import { createGlobalStyle } from 'styled-components'

import { datePicker, dropdownStyles } from './globalStyles'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
  }

  .route-link:not(.underlined) {
    text-decoration: none;
  }

  .route-link:active,
  .route-link:hover:not(:disabled) > * {
    opacity: 0.75;
  }

  .matched-substr {
    border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  /* Antd Global Styles
  ======================================== */
  
  ${datePicker}
  ${dropdownStyles}
`
