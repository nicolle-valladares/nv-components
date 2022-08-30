import React, { ComponentType } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Components/Button',
  // argTypes: {
  //   type: {
  //     options: ['default', 'primary', 'ghost', 'dashed', 'link', 'text'],
  //     control: { type: 'select' }
  //   }
  // }
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  children: 'Hello world!',
  type: 'primary'
}

export const RoundButton = Template.bind({})
RoundButton.args = {
  children: 'Round button',
  type: 'primary',
  shape: 'round'
}
