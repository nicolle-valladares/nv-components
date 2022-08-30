import React from 'react'
import { Card as AntdCard } from 'antd'
import './Card.css'

export interface CardProps {
  title: string
  description?: string
}

export const Card = (props: CardProps) => {
  return <AntdCard title={props.title} style={{ width: 240 }} />
}
