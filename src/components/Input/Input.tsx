import React, { ChangeEvent, forwardRef } from 'react'
import { Input as AntdInput } from 'antd'
import { InputProps as AntdInputProps } from 'antd/lib/input'
import { isNumber, isString } from 'lodash-es'
import styled from 'styled-components'

import { Typography } from '../Typography/Typography'

export interface InputProps extends AntdInputProps {
  /** Whether has border style */
  bordered?: boolean
  /** The initial input content */
  defaultValue?: string
  /** Whether the input is disabled */
  disabled?: boolean
  /** The ID for input */
  id?: string
  /** The label for the input */
  label?: string
  /** The max length */
  maxLength?: number
  /** Callback when user input */
  onChange?:
    | React.FormEventHandler
    | ((e: ChangeEvent<HTMLInputElement>) => void)
  /** The callback function that is triggered when Enter key is pressed */
  onPressEnter?: React.KeyboardEventHandler
  /** The prefix icon for the Input */
  prefix?: string | React.ReactNode
  /** The suffix icon for the Input */
  suffix?: string | React.ReactNode
  /** The input content value */
  value?: string
  /** Width of the input component */
  width?: number | string
}

const InputComponent = forwardRef<AntdInput, InputProps>(
  (
    {
      bordered = true,
      disabled = false,
      label,
      allowClear,
      placeholder,
      prefix,
      width,
      ...props
    },
    ref
  ): JSX.Element => {
    const inp = (
      <StyledInput
        ref={ref}
        disabled={disabled}
        bordered={bordered}
        allowClear={allowClear}
        placeholder={placeholder}
        prefix={prefix}
        width={width}
        {...props}
      />
    )

    return label ? (
      <div>
        <Label variant='paragraphSemiBold' color='textBody'>
          {label}
        </Label>
        {inp}
      </div>
    ) : (
      inp
    )
  }
)

const Label = styled(Typography)`
  margin-bottom: 4px;
  text-transform: capitalize;
`

const StyledInput = styled(AntdInput)<{
  width?: string | number
}>`
  &.ant-input {
    color: ${props => props.theme.colors.textBody};
    background-color: ${props => props.theme.colors.bgInputs};
    height: 40px;
    border-color: ${props => props.theme.colors.bgInputs};
    width: ${({ width }) =>
      isNumber(width) ? `${width}px` : isString(width) ? width : '100%'};

    /* spread typography variant */
    ${props => props.theme.typography.paragraphRegular}

    &::placeholder {
      color: ${props => props.theme.colors.aTint30};
    }
  }

  &.ant-input:focus,
  &.ant-input:hover,
  &.ant-input-focused {
    border-color: ${props => props.theme.colors.secondaryColor};
    box-shadow: none;
  }

  /* BORDERLESS START */
  &.ant-input-borderless {
    border: none;
    background: none;
    padding: 0;
    height: auto;
  }
  /* BORDERLESS END */

  /* DISABLED START */
  &.ant-input[disabled] {
    &:focus,
    &:hover {
      border-color: ${props => props.theme.colors.bgInputs};
    }
  }
  /* DISABLED END */

  /* INPUT PREFIX SUFFIX START */
  &.ant-input-affix-wrapper {
    height: 40px;
    background-color: ${props => props.theme.colors.bgInputs};
    border-color: ${props => props.theme.colors.bgInputs};

    .ant-input {
      color: ${props => props.theme.colors.textBody};
      background-color: ${props => props.theme.colors.bgInputs};
      /* spread typography variant */
      ${props => props.theme.typography.paragraphRegular}

      &::placeholder {
        color: ${props => props.theme.colors.aTint30};
      }
    }
  }

  &.ant-input-affix-wrapper:focus,
  &.ant-input-affix-wrapper:hover,
  &.ant-input-affix-wrapper-focused {
    border-color: ${props => props.theme.colors.secondaryColor};
    box-shadow: none;
  }

  &.ant-input-affix-wrapper-disabled {
    &:focus,
    &:hover {
      border-color: ${props => props.theme.colors.bgInputs};
    }
  }
  /* INPUT PREFIX SUFFIX END */
`

export const Input = Object.assign(InputComponent, {
  Search: AntdInput.Search,
  Password: AntdInput.Password
})
