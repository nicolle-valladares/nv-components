import React, { CSSProperties } from 'react'
import styled from 'styled-components'

interface SharedProps {
  /** The className of container */
  className?: string
  /** Inline style to apply to the card content */
  style?: CSSProperties
}

export const CardContent = ({
  className = '',
  children,
  style
}: React.PropsWithChildren<SharedProps>) => (
  <CardContainer className={`${className} ra-card-content`} style={style}>
    {children}
  </CardContainer>
)

const CardContainer = styled.div`
  &.ra-card-content {
    padding: 16px;
  }
`
