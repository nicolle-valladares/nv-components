import React, { ReactNode } from 'react'
import { Menu } from 'antd'

import { MenuItem } from './MenuItem'

import { SubMenuProps as AntdSubMenuProps } from 'antd/lib/menu/SubMenu'

type ItemType = typeof MenuItem

export interface SubMenuProps extends AntdSubMenuProps {
  /**	Title of sub menu */
  title: ReactNode
  /**	Sub-menus or sub-menu items */
  children: ItemType[] | ReactNode
}

export const SubMenu = ({ title = '', children, ...props }: SubMenuProps) => (
  // @ts-ignore TODO 
  <Menu.SubMenu title={title} {...props}>
    {children}
  </Menu.SubMenu>
)
