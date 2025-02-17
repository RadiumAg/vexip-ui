import {
  buildProps,
  booleanProp,
  booleanStringProp,
  sizeProp,
  stateProp,
  eventProp
} from '@vexip-ui/config'

import type { PropType, ExtractPropTypes } from 'vue'
import type { ConfigurableProps } from '@vexip-ui/config'
import type { Placement } from '@vexip-ui/hooks'
import type { Dateable } from '@vexip-ui/utils'
import type { TimeType, DateTimeType, DatePickerType, DateShortcut, TimeShortcut } from './symbol'

export const datePickerProps = buildProps({
  size: sizeProp,
  state: stateProp,
  type: String as PropType<DatePickerType>,
  visible: booleanProp,
  placement: String as PropType<Placement>,
  transfer: booleanStringProp,
  value: [Number, String, Date, Array] as PropType<Dateable | Dateable[]>,
  format: String,
  filler: String,
  noFiller: booleanProp,
  clearable: booleanProp,
  noAction: booleanProp,
  labels: Object as PropType<Partial<Record<DateTimeType, string>>>,
  dateSeparator: String,
  timeSeparator: String,
  shortcuts: Array as PropType<DateShortcut[]>,
  disabledDate: Function as PropType<(date: Date) => boolean>,
  steps: Array as PropType<number[]>,
  ctrlSteps: Array as PropType<number[]>,
  prefix: Object,
  prefixColor: String,
  suffix: Object,
  suffixColor: String,
  noSuffix: booleanProp,
  disabled: booleanProp,
  transitionName: String,
  confirmText: String,
  cancelText: String,
  today: [Number, String, Date] as PropType<Dateable>,
  isRange: booleanProp,
  loading: booleanProp,
  loadingIcon: Object,
  loadingLock: booleanProp,
  loadingSpin: booleanProp,
  min: [Number, String, Date] as PropType<Dateable>,
  max: [Number, String, Date] as PropType<Dateable>,
  outsideClose: booleanProp,
  outsideCancel: booleanProp,
  onInput: eventProp<(type: DateTimeType, value: number) => void>(),
  onPlus: eventProp<(type: DateTimeType, value: number) => void>(),
  onMinus: eventProp<(type: DateTimeType, value: number) => void>(),
  onEnter: eventProp(),
  onCancel: eventProp(),
  onChange: eventProp<(value: string | number | string[] | number[] | null) => void>(),
  onClear: eventProp(),
  onShortcut: eventProp<(name: string, value: Dateable | Dateable[]) => void>(),
  onToggle: eventProp<(visible: boolean) => void>(),
  onFocus: eventProp(),
  onBlur: eventProp(),
  onChangeCol: eventProp<(type: DateTimeType, inputType: 'start' | 'end') => void>(),
  onClickOutside: eventProp(),
  onOutsideClose: eventProp()
})

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>
export type DatePickerCProps = ConfigurableProps<DatePickerProps>

export const timePickerProps = buildProps({
  size: sizeProp,
  state: stateProp,
  visible: booleanProp,
  placement: String as PropType<Placement>,
  transfer: booleanStringProp,
  format: String,
  separator: String,
  value: [String, Array] as PropType<string | string[]>,
  filler: String,
  noFiller: booleanProp,
  clearable: booleanProp,
  noAction: booleanProp,
  noArrow: booleanProp,
  pointer: booleanProp,
  candidate: Number as PropType<0 | 1 | 2 | 3>,
  steps: Array as PropType<number[]>,
  labels: Object as PropType<Partial<Record<TimeType, string>>>,
  shortcuts: Array as PropType<TimeShortcut[]>,
  isRange: booleanProp,
  disabled: booleanProp,
  transitionName: String,
  confirmText: String,
  cancelText: String,
  ctrlSteps: Array as PropType<number[]>,
  prefix: Object,
  prefixColor: String,
  suffix: Object,
  suffixColor: String,
  noSuffix: booleanProp,
  exchange: booleanProp,
  loading: booleanProp,
  loadingIcon: Object,
  loadingLock: booleanProp,
  loadingSpin: booleanProp,
  min: String,
  max: String,
  outsideClose: booleanProp,
  outsideCancel: booleanProp,
  onInput: eventProp<(type: TimeType, value: number) => void>(),
  onPlus: eventProp<(type: TimeType, value: number) => void>(),
  onMinus: eventProp<(type: TimeType, value: number) => void>(),
  onEnter: eventProp(),
  onCancel: eventProp(),
  onChange: eventProp<(value: string | string[]) => void>(),
  onClear: eventProp(),
  onShortcut: eventProp<(name: string, value: string | string[]) => void>(),
  onToggle: eventProp<(visible: boolean) => void>(),
  onFocus: eventProp(),
  onBlur: eventProp(),
  onChangeCol: eventProp<(type: TimeType, inputType: 'start' | 'end') => void>(),
  onClickOutside: eventProp(),
  onOutsideClose: eventProp()
})

export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>
export type TimePickerCProps = ConfigurableProps<TimePickerProps>
