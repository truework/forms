import * as React from 'react'
import { Field, FieldProps, FieldInputProps } from 'formik'
import { get } from 'lodash'
import { clean, mask, format } from 'parse-ssn'

import {
  Input,
  InputProps,
  InputFieldProps,
  InputFieldWithLabelProps
} from './Input'
import { Label } from './Label'

export type SSNProps = {
  onUpdate?(ssn: string): void
  masker?: string
  separator?: string
}
export type SSNInputProps = InputProps &
  SSNProps &
  Partial<Pick<FieldInputProps<string>, 'value'>>
export type SSNInputFieldProps = InputFieldProps & SSNProps
export type SSNInputFieldWithLabelProps = InputFieldWithLabelProps & SSNProps

export function SSNInput (props: SSNInputProps) {
  const { value: initialValue = '', masker = '*', separator = '-' } = props

  const [raw, setRaw] = React.useState(initialValue)
  const [active, setActive] = React.useState(false)

  const value = active ? raw : format(mask(raw, masker), separator)

  const activate = React.useCallback(() => {
    setActive(true)
  }, [setActive])
  const deactivate = React.useCallback(() => {
    setActive(false)
  }, [setActive])

  React.useEffect(() => {
    if (props.onUpdate) props.onUpdate(raw)
  }, [raw, props.onUpdate])

  return (
    <Input
      {...props}
      value={value}
      onFocus={activate}
      onClick={activate}
      onBlur={deactivate}
      onChange={e => {
        const val = e.target.value

        // clear on any change IF raw value (from API etc) has been masked
        const shouldClear = /\*\*/.test(val)

        setRaw(shouldClear ? '' : clean(val))
      }}
    />
  )
}

export function SSNInputField ({
  id,
  validate,
  ...rest
}: SSNInputFieldProps) {
  return (
    <Field name={id} validate={validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(get(form, ['errors', id]))

        // must be memoized
        const onUpdate = React.useCallback(
          ssn => {
            form.setFieldValue(id, ssn)
          },
          [name, form.setFieldValue]
        )

        return (
          <SSNInput
            id={id}
            {...rest}
            {...field}
            hasError={hasError}
            onUpdate={onUpdate}
          />
        )
      }}
    </Field>
  )
}

export function SSNInputFieldWithLabel (props: SSNInputFieldWithLabelProps) {
  return (
    <>
      <Label htmlFor={props.id}>{props.label}</Label>
      <SSNInputField {...props} />
    </>
  )
}
