import * as React from 'react'
import { Box, Span, theme } from '@truework/ui'
import styled from 'styled-components'
import { Field, FieldConfig, FieldProps } from 'formik'

export type TileProps = {
  id: string
  icon?: React.ReactElement
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export type TileFieldProps = { name: string } & TileProps &
  Pick<FieldConfig, 'validate'>

const TileButton = styled.label`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  cursor: pointer;
`

const TileContent = styled.div`
  width: 100%;
  height: 100%;
  padding: ${theme.space.med} ${theme.space.sm};
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${theme.colors.body};
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.outline};
  border-radius: ${theme.space.xxs};

  transition-property: color, background-color, border-color;
  transition-duration: ${theme.transitionDurations.fast};
  transition-timing-function: ${theme.transitionTimingFunctions.ease};
`

const Input = styled.input`
  margin: 0;
  padding: 0;
  appearance: none;

  &:checked
    ~ ${TileContent},
    &:hover
    ~ ${TileContent},
    &:focus
    ~ ${TileContent} {
    border: 1px solid ${theme.colors.primary};
    background-color: rgb(91, 99, 254, 0.1);
  }

  &:checked ~ ${TileContent} {
    color: ${theme.colors.primary};
  }
`

export function Tile ({ id, icon, label, width, height, ...props }: TileProps) {
  return (
    <TileButton htmlFor={id}>
      <Input id={id} type='radio' {...props} />

      <TileContent>
        {icon && (
          <Box
            mb='xs'
            backgroundColor='white'
            width='48px'
            height='48px'
            borderRadius='50%'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            {icon}
          </Box>
        )}
        <Span
          display='flex'
          alignItems='center'
          minHeight='32px'
          fontSize={0}
          fontWeight={5}
          lineHeight={0}
        >
          {label}
        </Span>
      </TileContent>
    </TileButton>
  )
}

export function TileField ({
  name,
  validate,
  onChange,
  onBlur,
  ...rest
}: TileFieldProps) {
  return (
    <Field name={name} validate={validate}>
      {({ field }: FieldProps) => {
        return (
          <Tile
            {...rest}
            {...field}
            onChange={e => {
              field.onChange(e)
              if (onChange) onChange(e)
            }}
            onBlur={e => {
              field.onBlur(e)
              if (onBlur) onBlur(e)
            }}
          />
        )
      }}
    </Field>
  )
}
