import React from 'react'
import { Menu as AntdMenu } from 'antd'
import styled from 'styled-components'

export const MenuItem = (props: any) => <StyledMenuItem {...props} />

const StyledMenuItem = styled(AntdMenu.Item)`
  color: ${props => props.theme.colors.tertiaryColor};
  :hover {
    color: ${props => props.theme.colors.primaryColor};
  }
  :after {
    background-color: ${props => props.theme.colors.aTint30} !important;
  }
  /* spread typography variant css rules */
  ${props => props.theme.typography.paragraphRegular}

  &.ant-menu-item-disabled {
    /** It's set as important because Antd also marks this as important */
    color: ${props => props.theme.colors.aTint30} ;
  }
`
