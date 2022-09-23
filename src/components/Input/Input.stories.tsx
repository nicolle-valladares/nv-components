import React from 'react'
import { Input } from './Input'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const RAInput = Template.bind({})
RAInput.args = {
  placeholder: 'With label',
  label: 'Input Label'
}
