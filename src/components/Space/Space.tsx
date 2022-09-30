import React from 'react'
import { Space as AntdSpace } from 'antd'
import styled from 'styled-components'

import { SpaceProps as AntdSpaceProps} from 'antd/lib/space'

enum ALIGN {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  BASELINE = 'baseline'
}

enum DIRECTION {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}

enum SIZE {
  DEFAULT = 8,
  SMALL = 'small',
  MIDDLE = 'middle',
  LARGE = 'large'
}

export interface SpaceProps extends AntdSpaceProps {
  /**	Align items*/
  align?: ALIGN.START | ALIGN.END | ALIGN.CENTER | ALIGN.BASELINE
  /**	The space direction */
  direction?: DIRECTION.HORIZONTAL | DIRECTION.VERTICAL
  /** The space size */
  size?: SIZE.DEFAULT | SIZE.SMALL | SIZE.MIDDLE | SIZE.LARGE
  children?: React.ReactNode
}

const DEFAULT_SIZE = 8

export const Space = ({
  direction = DIRECTION.HORIZONTAL,
  size = SIZE.SMALL || DEFAULT_SIZE,
  ...props
}: SpaceProps) => <StyledSpace direction={direction} size={size} {...props} />

Space.ALIGN = ALIGN
Space.DIRECTION = DIRECTION
Space.SIZE = SIZE

// Common used props
const StyledSpace = styled(AntdSpace)`
  display: flex;
`
