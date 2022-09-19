import React from 'react'
import { Button } from '../Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Icon } from '../Icon'
import { Menu, MenuItem } from '../Menu'

export default {
  title: 'Components/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = args => (
  <Dropdown overlay={defaultMenu} {...args} />
)

const defaultMenu = (
  <Menu>
    <MenuItem icon={<Icon>home</Icon>}>Option 1</MenuItem>
    <MenuItem icon={<Icon>thumb_up</Icon>}>Option 2</MenuItem>
    <MenuItem icon={<Icon>work</Icon>}>Option 3</MenuItem>
    <MenuItem icon={<Icon>view_list</Icon>}>Option 4</MenuItem>
  </Menu>
)

export const RADropdown = Template.bind({})
RADropdown.args = {
  children: <Button type='primary'>click me</Button>
}
