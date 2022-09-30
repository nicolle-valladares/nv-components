import React, { ReactNode } from 'react'
import { Empty as AntdEmpty } from 'antd'

const { PRESENTED_IMAGE_DEFAULT, PRESENTED_IMAGE_SIMPLE } = AntdEmpty

enum IMAGE_TYPES {
  IMAGE_DEFAULT = 'default',
  IMAGE_SIMPLE = 'simple',
  IMAGE_EMPTY = ''
}

export interface EmptyProps {
  /** Default image to display for the empty component */
  image?:
    | IMAGE_TYPES.IMAGE_DEFAULT
    | IMAGE_TYPES.IMAGE_SIMPLE
    | IMAGE_TYPES.IMAGE_EMPTY
  /** Custom image to display for the empty component */
  url?: string
  /** Label to display in the empty component */
  description?: string
  /** React node content inside the component */
  children?: ReactNode
}

const FACTORY = {
  [IMAGE_TYPES.IMAGE_DEFAULT]: PRESENTED_IMAGE_DEFAULT,
  [IMAGE_TYPES.IMAGE_SIMPLE]: PRESENTED_IMAGE_SIMPLE,
  [IMAGE_TYPES.IMAGE_EMPTY]: ''
}

export const Empty = ({
  image = IMAGE_TYPES.IMAGE_EMPTY,
  url,
  ...props
}: EmptyProps) => {
  return <AntdEmpty image={FACTORY[image] || url} {...props} />
}
