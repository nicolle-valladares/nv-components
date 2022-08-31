import React from 'react'
import styled, { css } from 'styled-components'

import { useTheme } from '../../hooks'

export type SizeTypes = 'default' | 'small'

export interface IconProps {
  /** Inner html content */
  children?: React.ReactNode
  /** The CSS class */
  className?: string
  /** The background color of the icon */
  color?: string
  /** Set the handler to handle click event */
  onClick?: React.MouseEventHandler<HTMLElement>
  /** If its true the component will be rounded */
  rounded?: boolean
  /** The size of the icon in pixels. Example 16 */
  size?: SizeTypes | number
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      className: cls,
      color: colorProp = 'inherit',
      rounded = false,
      children,
      size,
      ...props
    },
    ref
  ) => {
    const { colors } = useTheme()
    const className = cls ? `${cls} material-icons` : 'material-icons'
    const color = colors[colorProp]

    return (
      <StyledIcon
        ref={ref}
        className={className}
        color={color}
        rounded={rounded}
        size={size}
        {...props}>
        {children}
      </StyledIcon>
    )
  }
)

const StyledIcon = styled.span<IconProps>`
  color: ${props => props.color};
  user-select: none;

  ${props =>
    props.size &&
    css`
      font-size: ${props.size}px;
    `}

  ${props =>
    props.rounded &&
    css<IconProps>`
      color: ${props.theme.colors.bgWhite};
      background-color: ${props =>
        props.color ?? props.theme.colors.primaryColor};
      border-radius: 50%;
      padding: 3px;
      margin-left: 2px;
      font-size: ${props => !props.size && '14px'};
    `};

  &[disabled] {
    ${props =>
      props.rounded
        ? css`
            background-color: ${props => props.theme.colors.aTint30};
            color: ${props.theme.colors.bgWhite} !important;
          `
        : css`
            color: ${props => props.theme.colors.aTint30};
          `}
  }
`
