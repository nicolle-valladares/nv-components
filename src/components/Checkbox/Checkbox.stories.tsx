import React from 'react'
import { Checkbox } from './Checkbox'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />

export const RACheckbox = Template.bind({})
RACheckbox.args = {
  children: 'Hello world!',
}