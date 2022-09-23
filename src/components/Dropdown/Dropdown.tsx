import React, { CSSProperties, ReactNode } from 'react'
import { Dropdown as AntdDropdown } from 'antd'
import styled from 'styled-components'

export const TRIGGER = {
  CLICK: 'click',
  HOVER: 'hover',
  CONTEXT_MENU: 'contextMenu'
} as const

export const PLACEMENT = {
  BOTTOM_RIGHT: 'bottomRight',
  BOTTOM_CENTER: 'bottomCenter',
  BOTTOM_LEFT: 'bottomLeft',
  TOP_RIGHT: 'topRight',
  TOP_CENTER: 'topCenter',
  TOP_LEFT: 'topLeft'
} as const

type triggerProp = 'click' | 'hover' | 'contextMenu'

export interface DropdownProps {
  /** Whether the dropdown arrow should be visible */
  arrow?: boolean
  /** Children component to render in the Dropdown */
  children?: ReactNode
  /** Whether the dropdown menu is disabled */
  disabled?: boolean
  /** To set the container of the dropdown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition. */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  /** Height of each item option of the menu. The value is in pixels */
  itemHeight?: number
  /** Max number of menu visible items */
  maxItems?: number
  /** Called when the visible state is changed */
  onVisibleChange?: (visible: boolean) => void
  /** The dropdown menu */
  overlay?: ReactNode
  /** The class name of the dropdown root element */
  overlayClassName?: string
  /** The style of the dropdown root element */
  overlayStyle?: CSSProperties
  /** Placement of popup menu */
  placement?:
    | 'bottomRight'
    | 'bottomCenter'
    | 'bottomLeft'
    | 'topRight'
    | 'topCenter'
    | 'topLeft'
  /** The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens */
  trigger?: triggerProp | triggerProp[]
  /** Whether the dropdown menu is currently visible */
  visible?: boolean
}

interface StyledDropdownMenuProps {
  readonly theme: {
    shadows: string
    colors: string
  }
  readonly maxItems: number
  readonly itemHeight: number
}

export const Dropdown = ({
  trigger = 'click',
  placement = 'bottomRight',
  getPopupContainer = e => document.body,
  overlayClassName = 'RADropdown',
  maxItems = 7,
  itemHeight = 40,
  overlay,
  ...props
}: DropdownProps) => (
  <AntdDropdown
    trigger={Array.isArray(trigger) ? trigger : [trigger]}
    placement={placement}
    getPopupContainer={getPopupContainer}
    overlayClassName={overlayClassName}
    overlay={
      <StyledDropdownMenu itemHeight={itemHeight} maxItems={maxItems}>
        {overlay}
      </StyledDropdownMenu>
    }
    {...props}
  />
)

Dropdown.TRIGGER = TRIGGER
Dropdown.PLACEMENT = PLACEMENT

const StyledDropdownMenu = styled.div<StyledDropdownMenuProps>`
  .ant-dropdown-menu,
  .ant-menu {
    box-shadow: ${props => props.theme.shadows.elevationOne};
    border: 1px solid ${props => props.theme.colors.aTint10};
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 2px;

    max-height: ${props => props.maxItems * props.itemHeight + 4}px;
    overflow: auto;
  }

  .ant-menu-root.ant-menu-vertical,
  .ant-menu-root.ant-menu-vertical-left,
  .ant-menu-root.ant-menu-vertical-right,
  .ant-menu-root.ant-menu-inline {
    box-shadow: ${props => props.theme.shadows.elevationOne};
  }

  .ant-dropdown-arrow {
    display: block;
    height: 10px;
    width: 10px;
    background-color: ${props => props.theme.colors.bgWhite};
    border: 1px solid ${props => props.theme.colors.aTint10};
    position: absolute;
    bottom: -10px;
    clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
    transform: rotate(135deg);
    border-radius: 0 0 0 2px;
    margin-left: -5px;
  }

  &.ant-dropdown-placement-topCenter > .ant-dropdown-arrow,
  &.ant-dropdown-placement-topLeft > .ant-dropdown-arrow,
  &.ant-dropdown-placement-topRight > .ant-dropdown-arrow {
    bottom: 6px;
    transform: rotate(-45deg);
  }

  .ant-menu-item-selected {
    background-color: ${props => props.theme.colors.bgWhite};

    &:hover {
      background: ${props => props.theme.colors.aTint05};
      color: ${props => props.theme.colors.aColor};
    }
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${props => props.theme.colors.bgWhite};

    &:hover {
      background: ${props => props.theme.colors.aTint05};
      color: ${props => props.theme.colors.primaryColor};
    }
  }

  .ant-dropdown-menu-item,
  .ant-menu-item {
    display: flex;
    align-items: center;
    height: ${props => props.itemHeight}px;
    margin: 0;

    &:not(.ant-dropdown-menu-item-only-child) > :first-child,
    &:not(.ant-menu-item-only-child) > :first-child {
      margin-right: 8px;
    }

    &:hover {
      background: ${props => props.theme.colors.aTint05};
      color: ${props => props.theme.colors.primaryColor};
    }
  }

  .ant-menu-vertical .ant-menu-item:not(:last-child),
  .ant-menu-vertical-left .ant-menu-item:not(:last-child),
  .ant-menu-vertical-right .ant-menu-item:not(:last-child),
  .ant-menu-inline .ant-menu-item:not(:last-child) {
    margin: 0;
  }

  .ant-menu-item-divider {
    height: 1px;
    padding: 0;
    overflow: hidden;
    line-height: 0;
    background-color: ${props => props.theme.colors.aTint05};
    margin: 0;
  }
`
