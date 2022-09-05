import React from 'react'
import styled from 'styled-components'

import { useTheme } from '../../hooks'

export interface TypographyProps {
  variant?: string
  color?: string
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  as?: React.ElementType | keyof JSX.IntrinsicElements
}

export const Typography: React.FC<TypographyProps> = ({
  /** Variant of the tipography. should be a valid from our core. */
  variant = 'paragraphRegular',
  /** Color of the typography, should be a valid from our core.  */
  color = 'bgBlack',
  /** Children elements */
  children,
  /** CSS Styles */
  style,
  ...props
}) => {
  const { colors, typography } = useTheme()

  return (
    <StyledTypography
      {...props}
      color={colors[`${color}`] ?? colors.bgBlack}
      variant={typography[`${variant}`] ?? typography.paragraphRegular}
      style={style}>
      {children}
    </StyledTypography>
  )
}

const StyledTypography = styled.div<TypographyProps>`
  color: ${props => props.color};
  ${props => props.variant}
`
