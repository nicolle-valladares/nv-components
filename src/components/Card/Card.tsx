import React, { CSSProperties, ReactNode } from 'react'
import { Card as AntdCard } from 'antd'
import styled, { css } from 'styled-components'

export interface CardProps {
  /** Toggles rendering of the border around the card */
  bordered?: boolean
  /** The title of the card */
  title?: ReactNode
  /** React node content inside the component */
  children?: ReactNode
  /** The className of container */
  className?: string
  /** Inline style to apply to the card head */
  headStyle?: CSSProperties
  /** Sets size of the card */
  size?: 'small' | 'default'
  /** CSS styles */
  style?: React.CSSProperties
}

interface ExtendedCardProps extends Omit<CardProps, 'size'> {
  size?: 'small' | 'default'
}

export const Card = ({
  title,
  bordered = true,
  children,
  className,
  headStyle,
  ...props
}: CardProps) => (
  <CardContainer
    title={title}
    {...props}
    bordered={bordered}
    className={`${className} ra-card`}
    bodyStyle={{
      padding: 0
    }}
    headStyle={{
      padding: '16px 16px 5px',
      ...headStyle
    }}>
    {children}
  </CardContainer>
)

export const { Meta } = AntdCard

const DefaultSizeStyles = css<ExtendedCardProps>`
  &.ant-card {
    font-size: 14px;
    border-radius: 2px;
  }
`

const SmallSizeStyles = css<ExtendedCardProps>`
  &.ant-card {
    font-size: 12px;
    border-radius: 2px;
  }
`

const SizeStyles = css<ExtendedCardProps>`
  ${props => {
    switch (props.size) {
      case 'small':
        return SmallSizeStyles
      case 'default':
      default:
        return DefaultSizeStyles
    }
  }}
`

const CardContainer = styled(AntdCard)`
  &.ra-card {
    &.ant-card-bordered {
      .ant-card-cover {
        img {
          border-radius: 1px 1px 1px 1px;
        }
      }
    }

    ${props => props.bordered && `border-color: ${props.theme.colors.aTint20};`}
    .ant-card-head {
      padding: 24px;
      .ant-card-head-title {
        padding: 0px;
        ${props => props.theme.typography.paragraphRegular}
      }
      border-bottom: 1px solid ${props => props.theme.colors.aTint20};
    }

    .ant-card-extra {
      padding: 0px;
    }
  }
  ${SizeStyles}
`
