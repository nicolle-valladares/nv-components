import React from 'react'
import { Checkbox as AntdCheckbox } from 'antd'
import styled from 'styled-components'

export interface CheckboxProps {
  /** Children node for the checkbox */
  children?: React.ReactNode
  /** CSS styles */
  style?: React.CSSProperties
  /** If disable checkbox */
  disabled?: boolean
  /** Specifies whether the checkbox is selected*/
  checked?: boolean
  /** Class for the checkbox element */
  className?: string
}

export const Checkbox = ({
  children,
  disabled,
  checked,
  ...props
}: CheckboxProps) => (
  <StyledCheckbox checked={checked} disabled={disabled} {...props}>
    {children}
  </StyledCheckbox>
)

const StyledCheckbox = styled(AntdCheckbox)`

  .ant-checkbox-inner {
    width: 18px;
    height: 18px;
    border: 2px solid ${props => props.theme.colors.primaryColor};
  }

  .ant-checkbox-checked .ant-checkbox-inner{
    border-color: ${props => props.theme.colors.primaryColor};
    background-color: ${props => props.theme.colors.primaryColor};
  }

`
