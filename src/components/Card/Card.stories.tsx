import React from 'react'
import { CardContent } from './CardContent'
import { Card } from './Card'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const RACard = Template.bind({})
RACard.args = {
  title: 'Default Card ',
  style: { width: 300 },
  children: (
    <CardContent>
      <p style={{ margin: 0 }}>Card content</p>
      <p style={{ margin: 0 }}>Card content</p>
      <p style={{ margin: 0 }}>Card content</p>
    </CardContent>
  )
}
