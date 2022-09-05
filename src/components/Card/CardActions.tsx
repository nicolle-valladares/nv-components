import React, { CSSProperties } from 'react'
import styled from 'styled-components'

interface SharedProps {
  /** The className of container */
  className?: string
  /** If true, the actions do not have additional margin. */
  disableSpacing?: boolean
  /** The style object of container */
  style?: CSSProperties
}

export const CardActions = ({
  children,
  className = '',
  disableSpacing = false,
  style
}: React.PropsWithChildren<SharedProps>) => (
  <ActionsContainer
    className={`${className} ra-card-actions`}
    disableSpacing={disableSpacing}
    style={style}>
    {children}
  </ActionsContainer>
)

const ActionsContainer = styled.div<SharedProps>`
  &.ra-card-actions {
    display: flex;
    justify-content: space-between;
    ${props =>
      !props.disableSpacing &&
      `
      padding: 0px 16px 16px;
    `}
  }
`
