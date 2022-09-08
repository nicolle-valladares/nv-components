import { css } from 'styled-components'

export const datePicker = css`
  .ant-picker-dropdown {
    z-index: 2021;
  }

  .ra-date-picker {
    .ant-picker {
      border: 1px solid ${props => props.theme.colors.bgInputs};

      &:active,
      &:focus,
      &:hover,
      &.ant-picker-focused {
        border-color: ${props => props.theme.colors.primaryColor};
        box-shadow: none;
      }
    }
  }

  .ant-picker-cell-in-view.ant-picker-cell-today
    .ant-picker-cell-inner::before {
    border: 1px solid ${props => props.theme.colors.primaryColor};
  }

  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    border: 1px solid ${props => props.theme.colors.primaryColor};
    background: ${props => props.theme.colors.primaryColor};
  }

  .ant-picker-footer {
    .ant-picker-today-btn {
      color: ${props => props.theme.colors.primaryColor};
    }
  }
`
