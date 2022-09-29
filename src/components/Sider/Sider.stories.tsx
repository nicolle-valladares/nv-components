import React from 'react'
import { Sider } from './Sider'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from 'antd'
import { MenuItem, Menu, SubMenu, ContentCard } from '../index'

export default {
  title: 'Components/Sider',
  component: Sider
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = () => (
  <Sider
    sideContent={
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'>
        <MenuItem key='1'>Option 1</MenuItem>
        <MenuItem key='2'>Option 2</MenuItem>
        <SubMenu key='sub1' title='Option 3'>
          <MenuItem key='3'>Option 1.1</MenuItem>
          <MenuItem key='4'>Option 1.2</MenuItem>
          <SubMenu key='sub3' title='Option 1.3'>
            <MenuItem key='5'>Option 1.3.1</MenuItem>
            <MenuItem key='6'>Option 1.3.2</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    }
    mainContent={
      <ContentCard
        cardData={{
          rounded: true,
          size: 18,
          subtitleIcon: 'insert_link',
          subtitle: 'Account Login Credentials',
          content: `Content.`
        }}
      />
    }
  />
)

export const RASider = Template.bind({})
