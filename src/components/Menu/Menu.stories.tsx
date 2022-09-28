import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuItem, Menu, SubMenu } from './index'

export default {
  title: 'Components/Menu',
  component: Menu
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = args => <Menu {...args} />

export const RAMenu = Template.bind({})
RAMenu.args = {
  style: { width: 256 },
  defaultSelectedKeys: ['1'],
  defaultOpenKeys: ['sub1'],
  mode: 'inline',
  children: (
    <SubMenu key='sub1' title='Option 1'>
      <MenuItem key='1'>Option 1.1</MenuItem>
      <MenuItem key='2'>Option 1.2</MenuItem>
      <MenuItem key='3'>Option 1.3</MenuItem>
      <MenuItem key='4'>Option 1.4</MenuItem>
    </SubMenu>
  )
}
