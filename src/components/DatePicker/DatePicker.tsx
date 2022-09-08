import React from 'react'
import { DatePicker as AntdDatePicker } from 'antd'
import moment from 'moment'
import styled, { css } from 'styled-components'

import {
  ISO_FORMAT_DATE,
  MONTH_DAY_YEAR_FORMAT_DATE
} from '../../constants/date'

export interface DatePickerProps {
  /** Action callback to retrieve selected date */
  onChange: React.FunctionComponent
  /** Text to show as the placeholder */
  placeholder: string
  /** Flag to make the component the same width as the container */
  fullWidth: boolean
}

export const DatePicker = ({
  onChange = undefined,
  placeholder = MONTH_DAY_YEAR_FORMAT_DATE,
  ...props
}) => {
  const handleOnChange = (date: Date, dateString: String) => {
    const datesString = date ? moment(date).format(ISO_FORMAT_DATE) : ''
  }

  return (
    <DatePickerContainer className='ra-date-picker'>
      <AntdDatePicker
        onChange={onChange && handleOnChange}
        placeholder={placeholder}
        {...props}
      />
    </DatePickerContainer>
  )
}

const backgroundColor = () =>
  css`
    background-color: ${props => props.theme.colors.bgInputs};
  `

const DatePickerContainer = styled.div`
  display: flex;
  width: 100%;

  .ant-picker {
    ${backgroundColor};

    &:hover,
    &:focus,
    &:active {
      border-color: ${props => props.theme.colors.primaryColor};
    }
  }

  .ant-picker-focused {
    border-color: ${props => props.theme.colors.primaryColor};
  }
`
