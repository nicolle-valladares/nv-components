import React from 'react'
import { Logo } from './Logo'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Logo',
  component: Logo
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />

export const RALogo = Template.bind({})
RALogo.args = {
  variant: 'full'
}
