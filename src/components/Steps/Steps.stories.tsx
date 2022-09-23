import React from 'react'
import { Steps } from './Steps'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Steps',
  component: Steps
} as ComponentMeta<typeof Steps>

const steps = [
  { title: 'Start' },
  { title: 'In Progress' },
  { title: 'Finished' }
]

const Template: ComponentStory<typeof Steps> = args => <Steps {...args} />

export const RASteps = Template.bind({})
RASteps.args = {
  direction: 'vertical',
  variant: 'secondary',
  steps: steps,
  current: 1
}
