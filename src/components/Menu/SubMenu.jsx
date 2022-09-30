import React from 'react'
import { Menu } from 'antd'
import PropTypes from 'prop-types'

import { MenuItem } from './MenuItem'

export const SubMenu = ({ title = '', children, ...props }) => (
  <Menu.SubMenu title={title} {...props}>
    {children}
  </Menu.SubMenu>
)

SubMenu.propTypes = {
  /**	Title of sub menu */
  title: PropTypes.node,
  /**	Sub-menus or sub-menu items */
  children: PropTypes.oneOfType([PropTypes.arrayOf(MenuItem), PropTypes.node])
    .isRequired
}
