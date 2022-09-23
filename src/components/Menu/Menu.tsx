import React from 'react'
import { Menu as AntdMenu } from 'antd'
import styled from 'styled-components'

export const Menu = (props: any) => <StyledMenu {...props} />
Menu.Divider = AntdMenu.Divider

const StyledMenu = styled(AntdMenu)`
  border: none;
  &:hover {
    & > div {
      color: ${props => props.theme.colors.aColor};
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
`
