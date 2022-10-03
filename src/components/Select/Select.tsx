import React from 'react'
import { Select as AntdSelect } from 'antd'
import { OptionData, OptionGroupData } from 'rc-select/lib/interface/index'
import styled, { css } from 'styled-components'

import { OptionType, ValueType } from '../../types/Option'
import { Icon } from '../Icon/Icon'
import { Typography } from '../Typography/Typography'

const DEFAULT_SIZES = {
  MIN_WIDTH: 120,
  HEIGHT: 40,
  MAX_OPTIONS: 7,
  CLEAR_ICON_SIZE: 20
}
type Fn = (omittedValues: [unknown]) => void

export interface SelectProps {
  /** Sets width to 100% so it can match with its parent's */
  autoWidth?: boolean
  /** Collapse the select width to the content width. No min width defined */
  collapsed?: boolean
  /** Whether has border style */
  bordered?: boolean
  /** The additional class to Switch */
  className?: string
  /**  children of component */
  children?: React.ReactNode
  /** Whether disabled select */
  disabled?: boolean
  /** Label of the select */
  label?: React.ReactNode
  /** Typography variant for label of the select */
  labelVariant?: string
  /** Placeholder of select */
  placeholder?: string
  /** Prefix icon for input */
  prefixIcon?: React.ReactNode
  /** Called when select an option or input value change */
  onChange?: (value: ValueType, option: OptionType) => void
  /** Select width size. Must be a valid css unit. For example "50px" or "50%" */
  width?: string
  /** Minimum width size. Must be a valid css unit. For example "50px" or "50%" */
  minWidth?: string
  /** Show clear button */
  allowClear?: boolean
  /** States the size of the clearing icon in pixels */
  clearIconSize?: number
  /** Parent Node which the selector should be rendered to. Default to body.
   * When position issues happen, try to modify it into scrollable content and position it relative. */
  getPopupContainer?: () => HTMLElement
  /** Select trigger height. Defaulted to 40 pixels */
  selectHeight?: string
  /** Option height. Defaulted to 40 pixels */
  optionHeight?: string
  /** Defines the dropdown position based on the parent trigger element. */
  dropdownAlign?: {
    offset: [number, number]
  }
  /** Whether to show the drop-down arrow */
  showArrow?: boolean
  /** Allow filter/search in select component */
  allowSearch?: boolean
  showSearch?: boolean
  mode?: 'multiple' | 'tags'
  optionLabelProp?: string
  value?: ValueType
}

export const handleFilterOption = (
  input: string,
  option?: OptionData | OptionGroupData
) => option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0
export const Select = ({
  bordered = true,
  className,
  disabled = false,
  label,
  labelVariant = 'paragraphRegular',
  allowClear = false,
  getPopupContainer = () => document.body,
  autoWidth = false,
  clearIconSize = DEFAULT_SIZES.CLEAR_ICON_SIZE,
  selectHeight = `${DEFAULT_SIZES.HEIGHT}px`,
  optionHeight = `${DEFAULT_SIZES.HEIGHT}px`,
  minWidth = `${DEFAULT_SIZES.MIN_WIDTH}px`,
  collapsed = false,
  dropdownAlign = {
    offset: [0, -2]
  },
  prefixIcon,
  width,
  allowSearch = false,
  mode,
  ...props
}: SelectProps) => {
  const additionalProps = allowSearch
    ? { filterOption: handleFilterOption }
    : {}
  return (
    <Container
      className={className}
      autoWidth={autoWidth}
      selectHeight={selectHeight}>
      {label && (
        <Label variant={labelVariant} color={disabled ? 'aTint30' : 'textBody'}>
          {label}
        </Label>
      )}
      {prefixIcon && <PrefixContainer>{prefixIcon}</PrefixContainer>}
      <SelectContainer
        selectHeight={selectHeight}
        minWidth={minWidth}
        clearIconSize={clearIconSize}
        collapsed={collapsed}
        prefixIcon={prefixIcon}
        width={width}>
        <AntdSelect
          bordered={bordered}
          suffixIcon={<Icon>arrow_drop_down</Icon>}
          disabled={disabled}
          allowClear={allowClear}
          getPopupContainer={getPopupContainer}
          clearIcon={
            <CloseIcon clearIconSize={clearIconSize}>cancel</CloseIcon>
          }
          menuItemSelectedIcon={mode && <Icon>done</Icon>}
          mode={mode}
          dropdownRender={menu => (
            <StyledDropdown
              className='ra-select-dropdown'
              optionHeight={optionHeight}>
              {menu}
            </StyledDropdown>
          )}
          dropdownAlign={dropdownAlign}
          listHeight={DEFAULT_SIZES.HEIGHT * DEFAULT_SIZES.MAX_OPTIONS}
          dropdownStyle={{
            boxShadow: 'none',
            padding: 0,
            borderRadius: 0,
            background: 'transparent'
          }}
          {...additionalProps}
          {...props}
        />
      </SelectContainer>
    </Container>
  )
}
interface ContainerProps {
  autoWidth: boolean
  selectHeight: string
}
const Container = styled.div<ContainerProps>`
  width: auto;
  position: relative;
  ${props =>
    props.selectHeight === '100%' &&
    css`
      height: 100%;
    `}
  ${props =>
    props.autoWidth &&
    css`
      width: 100%;
      .ant-select {
        width: 100%;
      }
    `}
`
const PrefixContainer = styled.div`
  position: absolute;
  bottom: 6px;
  left: 13px;
  z-index: 1;
`
interface CloseIconProps {
  clearIconSize: number
}
const CloseIcon = styled(Icon)<CloseIconProps>`
  font-size: ${props => props.clearIconSize}px;
`
const Label = styled(Typography)`
  margin-bottom: 4px;
  text-transform: capitalize;
`
interface SelectContainerProps {
  clearIconSize: number
  selectHeight?: string
  collapsed?: boolean
  prefixIcon?: React.ReactNode
  minWidth?: string
  width?: string
}
const SelectContainer = styled.div<SelectContainerProps>`
  .ant-select {
    height: ${props => props.selectHeight};
    min-width: ${props => (props.collapsed ? 'auto' : props.minWidth)};
    ${props =>
      props.width &&
      css`
        width: ${props.width};
      `};
    .ant-select-arrow {
      width: 32px;
      height: calc(100% - 2px);
      top: 1px;
      right: 1px;
      color: ${props => props.theme.colors.textBody};
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      > span {
        transition: transform 330ms ease;
      }
    }
    .ant-select-clear {
      width: ${props => props.clearIconSize}px;
      height: ${props => props.clearIconSize}px;
      top: calc(50% - ${props => props.clearIconSize / 2}px);
      right: 12px;
      color: ${props => props.theme.colors.textBody};
      background: ${props => props.theme.colors.bgInputs};
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      opacity: 1;
    }
    .ant-select-selector {
      height: ${props => props.selectHeight};
      padding: 0 16px;
      padding-right: calc(32px + 16px);
      border-color: ${props => props.theme.colors.bgInputs};
      background-color: ${props => props.theme.colors.bgInputs};
      ${props =>
        props.prefixIcon &&
        css`
          padding: 0 12px;
        `}
      .ant-select-selection-placeholder {
        opacity: 1;
        text-transform: capitalize !important;
      }
      .ant-select-selection-search-input {
        height: ${props => props.selectHeight};
        ${props =>
          props.prefixIcon &&
          css`
            padding-left: 36px;
          `};
      }
      &:hover,
      &:focus {
        border-color: ${props => props.theme.colors.secondaryColor};
        box-shadow: none;
      }
    }
    /* BORDERLESS START */
    &.ant-select-borderless .ant-select-selector {
      border: none;
    }
    /* BORDERLESS END */
    &.ant-select-single .ant-select-selection-item,
    &.ant-select-single .ant-select-selection-placeholder {
      ${props => props.theme.typography.paragraphRegular};
      line-height: ${props => props.selectHeight};
      display: flex;
      align-items: center;
    }
    &.ant-select-single.ant-select-show-arrow
      .ant-select-selection-placeholder {
      color: ${props => props.theme.colors.aTint30};
    }
    &.ant-select-single.ant-select-show-arrow .ant-select-selection-item {
      color: ${props => props.theme.colors.bgBlack};
    }
    &.ant-select-single.ant-select-open .ant-select-selection-item {
      opacity: 1;
    }
    &.ant-select-multiple {
      .ant-select-selection-search {
        margin-top: -4px;
      }
      &.ant-select-show-search {
        min-height: 40px;
        height: auto;
        .ant-select-selector {
          cursor: pointer;
          min-height: 40px;
          height: auto;
          padding-top: 7px;
          .ant-select-selection-search-input {
            height: auto;
          }
          .ant-select-selection-placeholder {
            left: 16px;
            right: 16px;
            color: ${props => props.theme.colors.aTint30};
          }
          .ant-select-selection-item {
            border: 1px solid ${props => props.theme.colors.primaryColor};
            color: ${props => props.theme.colors.primaryColor};
            border-radius: 24px;
            background: white;
          }
        }
      }
      .ant-select-selection-search:first-child
        .ant-select-selection-search-input {
        margin-left: 0;
      }
    }
    /* DISABLED START */
    &.ant-select-disabled.ant-select-multiple {
      .ant-select-selector {
        background-color: ${props => props.theme.colors.bgWhite};
        cursor: not-allowed;
        .ant-select-selection-item {
          color: ${props => props.theme.colors.aTint30};
        }
        &:focus,
        &:hover {
          border-color: ${props => props.theme.colors.bgInputs};
        }
      }
      .ant-select-arrow {
        color: ${props => props.theme.colors.aTint30};
      }
    }
    &.ant-select-disabled.ant-select-single:not(.ant-select-customize-input) {
      .ant-select-selector {
        background-color: ${props => props.theme.colors.bgWhite};
        cursor: not-allowed;
        .ant-select-selection-item {
          color: ${props => props.theme.colors.aTint30};
        }
        &:focus,
        &:hover {
          border-color: ${props => props.theme.colors.bgInputs};
        }
      }
      .ant-select-arrow {
        color: ${props => props.theme.colors.aTint30};
      }
    }
    /* DISABLED END */
    &.ant-select-focused:not(.ant-select-disabled).ant-select-single:not(.ant-select-customize-input)
      .ant-select-selector {
      border-color: ${props => props.theme.colors.secondaryColor};
      box-shadow: none;
    }
    &.ant-select-focused.ant-select-show-arrow.ant-select-open
      .ant-select-arrow
      > span {
      transform: rotate(180deg);
    }
  }
`

interface StyledDropdownProps {
  optionHeight: string
}
const StyledDropdown = styled.div<StyledDropdownProps>`
  background-color: ${props => props.theme.colors.bgInputs};
  border: 1px solid ${props => props.theme.colors.secondaryColor};
  outline: 2px solid ${props => props.theme.colors.secondaryColor};
  overflow: hidden;
  .ant-select-item-option {
    ${props => props.theme.typography.paragraphRegular};
    height: ${props => props.optionHeight};
    padding-top: 6px;

    &:hover {
      background-color: ${props => props.theme.colors.aTint05};
    }
  }
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${props => props.theme.colors.bTint40};
  }
`
