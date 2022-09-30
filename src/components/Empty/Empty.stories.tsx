import React from 'react'
import { Button } from '../Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Empty } from './Empty'

export default {
  title: 'Components/Empty',
  component: Empty
} as ComponentMeta<typeof Empty>

const Template: ComponentStory<typeof Empty> = args => <Empty {...args} />

export const RAEmpty = Template.bind({})
RAEmpty.args = {
  description: 'No data provided.'
}
