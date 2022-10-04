import { LabeledValue } from 'antd/lib/select'

type Key = string | number

interface OptionCoreData {
  key?: Key
  disabled?: boolean
  value: Key
  title?: string
  className?: string
  style?: React.CSSProperties
  label?: React.ReactNode
  /** @deprecated Only works when use `children` as option data */
  children?: React.ReactNode
}
export interface OptionData extends OptionCoreData {
  /** Save for customize data */
  [prop: string]: unknown
}
export interface OptionGroupData {
  key?: Key
  label?: React.ReactNode
  options: OptionData[]
  className?: string
  style?: React.CSSProperties
  /** Save for customize data */
  [prop: string]: unknown
}
export type OptionsType = (OptionData | OptionGroupData)[]

export type OptionType = OptionsType | OptionData | OptionGroupData

export type ValueType =
  | string
  | string[]
  | number
  | number[]
  | LabeledValue
  | LabeledValue[]
