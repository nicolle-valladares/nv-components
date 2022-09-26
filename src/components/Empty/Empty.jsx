import React, { ReactNode } from 'react'
import { Empty as AntdEmpty } from 'antd'
import PropTypes from 'prop-types'

export const Empty = ({ image, ...props }) => {
  const defaultImage = image ? image : AntdEmpty.PRESENTED_IMAGE_SIMPLE

  return <AntdEmpty image={defaultImage} {...props} />
}

Empty.propTypes = {
  /** Image to display for the empty component */
  image: PropTypes.oneOf([
    AntdEmpty.PRESENTED_IMAGE_DEFAULT,
    AntdEmpty.PRESENTED_IMAGE_SIMPLE
  ]),
  /** Label to display in the empty component */
  description: PropTypes.string,
  /** React node content inside the component */
  children: ReactNode
}
