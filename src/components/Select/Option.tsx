import React from 'react'
import { Select } from 'antd'
import { OptionFC } from 'rc-select/lib/Option'

interface OptionProps {
  children: React.ReactNode
  /**	The additional class to option */
  className?: string
  /** Disable this option */
  disabled?: boolean
  /** Title of Select after select this Option */
  title?: string
  /** Default to filter with this property */
  value: string | number
}

export const Option: OptionFC = ({
  children,
  disabled = false,
  value,
  ...props
}: OptionProps) => (
  <Select.Option disabled={disabled} value={value} {...props}>
    {children}
  </Select.Option>
)

Option.isSelectOption = true
