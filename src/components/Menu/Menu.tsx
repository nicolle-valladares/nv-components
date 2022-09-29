import React from 'react'
import { Menu as AntdMenu } from 'antd'
import styled, { css } from 'styled-components'

export interface MenuProps {
  /** Children node for the menu */
  children?: React.ReactNode
  /** CSS styles */
  style?: React.CSSProperties
  /** Class for the element */
  className?: string
}
export const Menu = (props: any) => <StyledMenu {...props} />
Menu.Divider = AntdMenu.Divider

const BasicStyledMenu = css<MenuProps>`
  border: none;
  &:hover {
    & > div {
      color: ${props => props.theme.colors.primaryColor};
    }
  }

  & > .ant-menu-item-disabled {
    &:hover {
      background: ${props => props.theme.colors.bgWhite};
      div,
      .material-icons,
      .menu-item-text {
        color: ${props => props.theme.colors.aTint20};
        background: ${props => props.theme.colors.bgWhite};
      }
    }
  }

  /* Si no se usa Submenú, esta es la forma en la cual 
  se le modifica el color de la opción seleccionada. */
  .ant-menu-item-selected {
    background-color: ${props => props.theme.colors.aTint20} !important;
  }

  .ant-menu-item::after {
    border-right: 3px solid ${props => props.theme.colors.primaryColor};
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${props => props.theme.colors.aTint20};
  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 3px solid ${props => props.theme.colors.primaryColor};
  }

  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover {
    color: ${props => props.theme.colors.aTint20};
  }
`

const DarkStyledMenu = css<MenuProps>`
  border: none;
  background: ${props => props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.secondaryColor} !important;
  &:hover {
    & > div {
      color: ${props => props.theme.colors.secondaryColor};
    }
  }

  .ant-menu-item {
    color: ${props => props.theme.colors.secondaryColor};
  }
  &:after {
    border-right: 3px solid ${props => props.theme.colors.primaryColor};
  }

  .ant-menu-sub.ant-menu-inline {
    background: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.secondaryColor};
  }

  /* Si no se usa Submenú, esta es la forma en la cual 
  se le modifica el color de la opción seleccionada. */
  .ant-menu-item-selected {
    background-color: ${props => props.theme.colors.aTint30} !important;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${props => props.theme.colors.aTint30};
  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 3px solid ${props => props.theme.colors.primaryColor};
  }

  .ant-menu-submenu-vertical
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-vertical-left
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-vertical-right
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-inline
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-vertical
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::after,
  .ant-menu-submenu-vertical-left
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::after,
  .ant-menu-submenu-vertical-right
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::after,
  .ant-menu-submenu-inline
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow::after {
    background-image: linear-gradient(
      to right,
      ${props => props.theme.colors.secondaryColor},
      ${props => props.theme.colors.secondaryColor}
    );
  }

  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover {
    color: ${props => props.theme.colors.aTint20};
  }
`

const StyledMenu = styled(AntdMenu)`
  ${BasicStyledMenu}
  ${props => {
    switch (props.className) {
      case 'dark':
        return DarkStyledMenu
      case 'light':
        return BasicStyledMenu
      default:
        return BasicStyledMenu
    }
  }}
`
