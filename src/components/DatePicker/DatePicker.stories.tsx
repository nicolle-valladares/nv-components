import React, { useState } from 'react'
import { DatePicker } from './DatePicker'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/DatePicker',
  component: DatePicker
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = args => (
  <DatePicker {...args} />
)

export const RADatePicker = Template.bind({})
RADatePicker.args = {
  bgColor: 'white'
}
