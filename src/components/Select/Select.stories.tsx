import React from 'react'
import { Option, Select } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Select',
  component: Select
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const RASelect = Template.bind({})
RASelect.args = {
  placeholder: 'Select an option',
  label: 'Input Label',
  autoWidth: true,
  allowClear: true,
  children: (
    <>
      <Option value={1}>Option One</Option>
      <Option value={2}>Option Two</Option>
      <Option value={3}>Option Three</Option>
      <Option value={4}>Option Four</Option>
    </>
  )
}
