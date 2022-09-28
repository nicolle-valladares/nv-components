import React from 'react'
import { Menu as AntdMenu } from 'antd'
import styled from 'styled-components'

export const Menu = (props: any) => <StyledMenu {...props} />
Menu.Divider = AntdMenu.Divider

const StyledMenu = styled(AntdMenu)`
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

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${props => props.theme.colors.aTint20};
  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 3px solid ${props => props.theme.colors.primaryColor};
  }
`
