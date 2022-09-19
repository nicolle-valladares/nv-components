import React from 'react'
import { Button } from './Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const RAButton = Template.bind({})
RAButton.args = {
  children: 'Hello world!',
  type: 'primary'
}