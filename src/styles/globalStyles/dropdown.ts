import { css } from 'styled-components'

export const dropdownStyles = css`
  .RADropdown {
    z-index: 2020;

    .ant-dropdown-arrow {
      display: block;
      height: 10px;
      width: 10px;
      background-color: white;
      border: 1px solid ${props => props.theme.colors.aTint10};
      position: absolute;
      bottom: -10px;
      clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
      transform: rotate(135deg);
      border-radius: 0 0 0 2px;
      margin-left: -5px;
    }

    &.ant-dropdown-placement-topCenter > .ant-dropdown-arrow,
    &.ant-dropdown-placement-topLeft > .ant-dropdown-arrow,
    &.ant-dropdown-placement-topRight > .ant-dropdown-arrow {
      bottom: 6px;
      transform: rotate(-45deg);
    }
  }
`
