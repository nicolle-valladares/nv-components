import React from 'react'
import { Button as AntdButton } from 'antd'
import { useTheme } from '../../hooks'

import styled, { css } from 'styled-components'

const isCollapsed = (collapsed?: string | boolean) => collapsed === 'true'

export interface ButtonProps {
  /** Children node for the button */
  children?: React.ReactNode
  /** Sets size of the button */
  size?: 'small' | 'medium' | 'large'
  /** CSS styles */
  style?: React.CSSProperties
  /** Set the original html type of button */
  htmlType?: 'button' | 'submit' | 'reset'
  /** This is the types Antd supports (primary | ghost  | dashed | link | text | default) types */
  type?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text'
  /** Disabled state of button */
  disabled?: boolean
  /** Class for the button element */
  className?: string
  /** The custom color */
  color?: string
  /** If the button has space between the content */
  spaceBetween?: boolean
  /** removes the minimum width of the button */
  collapsed?: boolean | string
  /** Custom button width */
  width?: string
  /** Can be set button shape */
  shape?: 'circle' | 'round'
}

interface ExtendedButtonProps extends Omit<ButtonProps, 'size'> {
  $spaceBetween?: boolean
  size?: 'small' | 'middle' | 'large'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    size = 'large',
    collapsed = false,
    type = 'default',
    htmlType = 'button',
    color = '',
    width = '',
    spaceBetween = false,
    ...props
  }) => {
    const { colors } = useTheme()
    const buttonColor = color ? colors[color] : undefined
    const buttonSize = size === 'medium' ? 'middle' : size

    return (
      <StyledButton
        htmlType={htmlType}
        size={buttonSize}
        type={type}
        color={buttonColor}
        $spaceBetween={spaceBetween}
        width={width}
        collapsed={collapsed.toString()}
        {...props}
      />
    )
  }
)

const DefaultStyles = css<ExtendedButtonProps>`
  padding: 0 20px;
  border-radius: 2px;
  text-shadow: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.$spaceBetween ? 'space-between' : 'center'};
  ${props => props.theme.typography.navButtonsTabs}
  color: ${props => props.theme.colors.primaryColor};
  background: ${props => props.theme.colors.bgWhite};
  border: 1px solid ${props => props.theme.colors.primaryColor};

  &.ant-btn-round span {
    font-size: 12px;
  }

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.btnHover02};
    background: ${props => props.theme.colors.bgWhite};
    border: 1px solid ${props => props.theme.colors.btnHover02};
  }

  &[disabled] {
    background: ${props => props.theme.colors.bgWhite};
    color: ${props => props.theme.colors.aTint30};

    &:hover,
    &:focus,
    &:active {
      background: ${props => props.theme.colors.bgWhite};
      color: ${props => props.theme.colors.aTint30};
    }
  }
`

const CustomColorDefaultStyles = css<ExtendedButtonProps>`
  ${props =>
    props.color &&
    css`
      background: ${props => props.theme.colors.bgWhite};
      border-color: ${props.color};
      color: ${props.color};

      &:hover,
      &:focus,
      &:active {
        background: ${props => props.theme.colors.bgWhite};
      }

      &[disabled],
      &[disabled]:hover {
        background: ${props => props.theme.colors.bgWhite};
      }
    `}
`

const PrimaryStyles = css<ExtendedButtonProps>`
  &.ant-btn-primary {
    border: none;
    color: ${props => props.theme.colors.bgWhite};
    background: ${props => props.theme.colors.primaryColor};

    &:hover,
    &:focus,
    &:active {
      border: none;
      background: ${props => props.theme.colors.btnHover01};
    }

    &[disabled] {
      background: ${props => props.theme.colors.aTint20};
      color: ${props => props.theme.colors.bgWhite};

      &:hover,
      &:focus,
      &:active {
        background: ${props => props.theme.colors.aTint20};
        color: ${props => props.theme.colors.bgWhite};
      }
    }
  }
`

const CustomColorPrimaryStyles = css<ExtendedButtonProps>`
  ${props =>
    props.color &&
    css`
      &.ant-btn-primary {
        background: ${props.color};
        border-color: ${props.color};
        color: ${props => props.theme.colors.bgWhite};

        &:hover,
        &:focus,
        &:active {
          color: ${props => props.theme.colors.bgWhite};
        }

        &[disabled],
        &[disabled]:hover {
          color: ${props => props.theme.colors.bgWhite};
        }
      }
    `}
`

const LargeSizeStyles = css<ExtendedButtonProps>`
  height: 40px;
  min-width: ${props => (isCollapsed(props.collapsed) ? 'auto' : '96px')};
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  &.ant-btn-circle,
  &.ant-btn-circle-outline {
    border-radius: 50%;
    min-width: 40px;
    height: 40px;
    padding: 0;
  }
`

const MediumSizeStyles = css<ExtendedButtonProps>`
  height: 32px;
  min-width: ${props => (isCollapsed(props.collapsed) ? 'auto' : '88px')};
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  .material-icons {
    font-size: 19px;
  }
  &.ant-btn-circle,
  &.ant-btn-circle-outline {
    border-radius: 50%;
    min-width: 32px;
    width: 32px;
    height: 32px;
    padding: 0;
    span {
      font-size: 15px;
    }
  }
`

const SmallSizeStyles = css<ExtendedButtonProps>`
  height: 24px;
  min-width: ${props => (isCollapsed(props.collapsed) ? 'auto' : '80px')};
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  &.ant-btn-sm span {
    font-size: 10px;
  }
  &.ant-btn-sm .material-icons {
    font-size: 14px;
  }
  &.ant-btn-circle,
  &.ant-btn-circle-outline {
    border-radius: 50%;
    min-width: 24px;
    width: 24px;
    height: 24px;
    padding: 0;
    span {
      font-size: 11px;
    }
  }
`

const SizeStyles = css<ExtendedButtonProps>`
  ${props => {
    switch (props.size) {
      case 'middle':
        return MediumSizeStyles
      case 'small':
        return SmallSizeStyles
      case 'large':
      default:
        return LargeSizeStyles
    }
  }}
`

const StyledButton = styled(AntdButton)<ExtendedButtonProps>`
  ${DefaultStyles}
  ${PrimaryStyles}
  ${props => {
    switch (props.type) {
      case 'primary':
        return CustomColorPrimaryStyles
      default:
        return CustomColorDefaultStyles
    }
  }}
  ${SizeStyles}
`
