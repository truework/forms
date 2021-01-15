import * as React from 'react'
import styled from 'styled-components'
import { Field, FieldConfig, FieldProps } from 'formik'
import { get } from 'lodash'
import { Box, P } from '@truework/ui'

export type TileProps = {
  hasError?: boolean
  name?: string
  checked?: boolean
  value: string
  description?: React.ReactNode
  icon?: React.ReactElement
} & React.InputHTMLAttributes<HTMLInputElement>

export type TileFieldProps = {
  name: string
} & Omit<TileProps, 'checked' | 'value'> &
  Pick<FieldConfig, 'validate'>

const TileButton = styled.label<{ checked?: boolean }>(
  ({ theme, checked }) => `
    width: 152px;
    height: 136px;
    background-color: ${theme.colors.background};  
    padding: ${theme.space.med} ${theme.space.sm};
    
    text-align: center;
    border-radius: ${theme.space.xxs};
    
    &:hover {
      border: 1px solid ${theme.colors.primary};
      background-color: rgb(91, 99, 254, 0.1);  
    }
    
    ${
      checked
        ? `
      border: 1px solid ${theme.colors.primary};
      background-color: rgb(91, 99, 254, 0.1);        
    `
        : ``
    }
  `
)

const Input = styled.input`
  appearance: none;
`

const TileGroup = styled.div<{ hasError: boolean }>(
  ({ theme, hasError }) =>
    `
    display: flex;
    
    ${
      hasError
        ? `
        border-color: ${theme.colors.error} !important;
      `
        : ``
    }
  `
)

export function Tile ({
  children,
  name,
  checked,
  description,
  icon,
  ...props
}: TileProps) {
  const id = name + props.value

  return (
    <>
      <Input id={id} name={name} type='radio' checked={checked} {...props} />

      <TileButton htmlFor={id} checked={checked}>
        <Box display='flex' alignItems='center' justifyContent='center' mb='xs'>
          {icon}
        </Box>
        <P fontSize={0} fontWeight={5} lineHeight={0} color='body'>
          {description}
        </P>
      </TileButton>
    </>
  )
}

export function TileField ({
  children,
  name,
  validate,
  onChange,
  onBlur,
  ...rest
}: React.PropsWithChildren<TileFieldProps>) {
  return (
    <Field name={name} validate={validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(get(form, ['errors', name]))

        return (
          <TileGroup hasError={hasError}>
            {React.Children.toArray(children).map(
              (child: React.ReactElement) => {
                return React.cloneElement(child, {
                  ...field,
                  ...rest,
                  value: child.props.value,
                  checked: Boolean(field.value === child.props.value),
                  onChange (e: React.ChangeEvent<HTMLInputElement>) {
                    field.onChange(e)
                    if (onChange) onChange(e)
                    console.log(child.props.value)
                  },
                  onBlur (e: React.FocusEvent<HTMLInputElement>) {
                    field.onBlur(e)
                    if (onBlur) onBlur(e)
                  }
                })
              }
            )}
          </TileGroup>
        )
      }}
    </Field>
  )
}
