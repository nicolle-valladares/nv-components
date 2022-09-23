import React from 'react'
import { Space as AntdSpace } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ALIGN = {
  START: 'start',
  END: 'end',
  CENTER: 'center',
  BASELINE: 'baseline'
}

export const DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
}

export const SIZE = {
  SMALL: 'small',
  MIDDLE: 'middle',
  LARGE: 'large'
}

const DEFAULT_SIZE = 8

export const Space = ({
  direction = DIRECTION.HORIZONTAL,
  size = SIZE.SMALL || DEFAULT_SIZE,
  ...props
}) => <StyledSpace direction={direction} size={size} {...props} />

Space.ALIGN = ALIGN
Space.DIRECTION = DIRECTION
Space.SIZE = SIZE

// Common used props
const StyledSpace = styled(AntdSpace)`
  display: flex;
`

Space.propTypes = {
  /**	Align items*/
  align: PropTypes.oneOf([
    ALIGN.START,
    ALIGN.END,
    ALIGN.CENTER,
    ALIGN.BASELINE
  ]),
  /**	The space direction */
  direction: PropTypes.oneOf([DIRECTION.HORIZONTAL, DIRECTION.VERTICAL]),
  /** The space size */
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([SIZE.SMALL, SIZE.MIDDLE, SIZE.LARGE])
  ])
}
