import React from 'react'
import { Collapse as AntdCollapse } from 'antd'
import { CollapseProps as AntdCollapseProps } from 'antd/lib/collapse/Collapse'
import styled, { css } from 'styled-components'

export type { CollapseProps }

// We are exposing children type directly because AntdCollapseProps
// doesn't expose React.FC types
interface CollapseProps extends AntdCollapseProps {
  /** Whether to keep or not the default header padding */
  headerPadding?: boolean
  /** Whether to keep or not the default content padding */
  contentPadding?: boolean
  /** Size of the toggle icon */
  iconSize?: string
  /** React node content inside the component */
  children?: React.ReactNode
}

interface StyledCollapseProps {
  $headerPadding?: boolean
  $contentPadding?: boolean
  $iconSize?: string
}

export const Collapse = ({
  headerPadding = true,
  contentPadding = true,
  iconSize = '24px',
  ...props
}: CollapseProps) => (
  <StyledCollapse
    $headerPadding={headerPadding}
    $contentPadding={contentPadding}
    $iconSize={iconSize}
    {...props}
  />
)

Collapse.Panel = AntdCollapse.Panel

const StyledCollapse = styled(AntdCollapse)<StyledCollapseProps>`
  .ant-collapse-item {
    background-color: ${props => props.theme.colors.white};

    .ant-collapse-header {
      ${props => props.theme.typography.headingTitle}
      ${({ $headerPadding }) =>
        !$headerPadding &&
        css`
          padding: 0px;
        `}
      span.material-icons.ant-collapse-arrow {
        font-size: ${props => props.$iconSize};

        &.rotate {
          transform: rotate(180deg);
        }
      }
    }
    ${({ $contentPadding }) =>
      !$contentPadding &&
      css`
        .ant-collapse-content-box {
          padding: 0px;
        }
      `}
  }
`
