import React from 'react'
import { Steps as AntdSteps } from 'antd'
import { v4 as uuid } from 'uuid'

import styled, { css } from 'styled-components'
import {
  StepProps as AntdStepProps,
  StepsProps as AntdStepsProps
} from 'antd/lib/steps'

export type StepProps = AntdStepProps & {
  title: string
}

export interface StepsProps extends AntdStepsProps {
  /** @deprecated We'no longer use classnames */
  className?: string
  steps: StepProps[]
  /** Defaults to 'secondary' to maintain backwards compatibility */
  variant?: 'primary' | 'secondary'
  /** @deprecated we'll provide a cleaner way of interacting with styles in a future release */
  width?: string | number
}

const { Step } = AntdSteps

export const Steps = ({
  steps = [],
  variant = 'secondary',
  ...props
}: StepsProps) => {
  if (variant === 'primary' && props.direction === 'vertical') {
    throw Error(
      `direction value 'vertical' is not supported for variant 'primary' yet`
    )
  }

  return (
    <StyledSteps
      {...props}
      progressDot={variant === 'secondary'}
      type={variant === 'primary' ? 'navigation' : 'default'}
      variant={variant}>
      {steps.map(step => (
        <Step key={uuid()} {...step} />
      ))}
    </StyledSteps>
  )
}

export const StyledSteps = styled(AntdSteps)<Omit<StepsProps, 'steps'>>`
  ${({ theme, type, variant = 'secondary' }) => {
    const primaryColor =
      variant === 'primary'
        ? theme.colors.primaryColor
        : theme.colors.accentGreen03
    const secondaryColor =
      variant === 'primary' ? theme.colors.aTint30 : theme.colors.greenTint25

    const navigationStyles = css`
      &.ant-steps-navigation {
        .ant-steps-item {
          text-align: left;
          padding-left: 0px;

          &.ant-steps-item-active,
          &.ant-steps-item-finish {
            &::before {
              background-color: ${primaryColor};
            }
          }

          .ant-steps-item-container {
            margin-top: 15px;
            margin-left: 0;
            .ant-steps-item-icon,
            .ant-steps-item-tail {
              display: none;
            }

            .ant-steps-item-content {
              .ant-steps-item-title {
                ${theme.typography.captionSemibold};
              }
            }
          }

          &.ant-steps-item-wait {
            .ant-steps-item-container {
              .ant-steps-item-content {
                .ant-steps-item-title {
                  color: ${secondaryColor};
                  ${theme.typography.captionRegular};
                }
              }
            }
          }

          &.ant-steps-item-finish {
            .ant-steps-item-container {
              .ant-steps-item-content {
                .ant-steps-item-title {
                  color: ${theme.colors.textSecondary};
                  ${theme.typography.captionRegular};
                }
              }
            }
          }

          &::before {
            width: calc(100% - 5px);
            top: 0;
            left: 0;
            height: 4px;
            border-radius: 10px;
            background-color: ${secondaryColor};
          }
          &::after {
            content: none;
          }
        }
      }
    `

    const defaultStyles = css`
      &.ant-steps-dot {
        .ant-steps-item-icon {
          position: relative;
          top: -4px;
          left: -4px;
          height: 16px;
          width: 16px;
        }

        &.ant-steps-horizontal {
          .ant-steps-item-tail {
            margin-left: 55px;
            &::after {
              background-color: ${secondaryColor};
              width: 100%;
              margin-left: 0px;
            }
          }

          .ant-steps-item-icon {
            margin-left: 55px;
          }
        }

        .ant-steps-item-title {
          ${theme.typography.captionRegular}
        }

        .ant-steps-item-process {
          .ant-steps-item-icon {
            & > .ant-steps-icon .ant-steps-icon-dot {
              background: ${primaryColor};
            }
          }

          & > .ant-steps-item-container {
            & > .ant-steps-item-content {
              & > .ant-steps-item-title {
                color: ${theme.colors.textBody};
              }
            }

            & > .ant-steps-item-tail {
              &::after {
                background-color: ${secondaryColor};
              }
            }
          }
        }
        .ant-steps-item-wait {
          .ant-steps-item-icon {
            & > .ant-steps-icon .ant-steps-icon-dot {
              background: ${secondaryColor};
            }
          }

          & > .ant-steps-item-container {
            & > .ant-steps-item-content {
              & > .ant-steps-item-title {
                color: ${secondaryColor};
              }
            }
            & > .ant-steps-item-tail {
              &::after {
                background-color: ${secondaryColor};
              }
            }
          }
        }

        .ant-steps-item-finish {
          .ant-steps-item-icon {
            & > .ant-steps-icon .ant-steps-icon-dot {
              background: ${primaryColor};
            }
          }

          & > .ant-steps-item-container {
            & > .ant-steps-item-content {
              & > .ant-steps-item-title {
                color: ${theme.colors.textBody};
              }
            }
            & > .ant-steps-item-tail {
              &::after {
                background-color: ${primaryColor};
              }
            }
          }
        }

        &.ant-steps-vertical {
          .ant-steps-item-finish {
            .ant-steps-item-container {
              .ant-steps-item-tail {
                &::after {
                  width: 3px;
                  background-color: ${primaryColor};
                }
              }
            }
          }
          .ant-steps-item-container {
            .ant-steps-item-tail {
              top: 6px;
              padding: 10px 0px 0px;
              margin: 0;

              &::after {
                width: 3px;
                background-color: ${secondaryColor};
              }
            }
          }
          .ant-steps-item-process {
            .ant-steps-item-icon {
              left: -2px;
            }
          }
        }
      }
    `

    switch (type) {
      case 'navigation':
        return navigationStyles
      default:
        return defaultStyles
    }
  }}
`
