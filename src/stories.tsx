/* eslint-disable */
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Box,
  Span,
  Gutter,
  Icon,
  H5,
  Button,
  GridRow,
  GridItem
} from '@truework/ui'
import { Formik, Form } from 'formik'

import { Label } from './Label'
import { SubGroup } from './SubGroup'
import { Input, InputField, InputFieldWithLabel } from './Input'
import { Select, SelectField, SelectFieldWithLabel } from './Select'
import { Textarea, TextareaFieldWithLabel } from './Textarea'
import { Checkbox, CheckboxField, CheckboxGroup } from './Checkbox'
import { Radio, RadioFieldWithLabel } from './Radio'
import { Toggle, ToggleField } from './Toggle'
import { DateInput, DateInputFieldWithLabel } from './DateInput'
import { Dropdown, DropdownFieldWithLabel } from './Dropdown'
import { SSNInput, SSNInputFieldWithLabel } from './SSNInput'
import { Tile, TileField } from './Tile'

storiesOf('Base', module).add('SSN', () => (
  <Gutter withVertical>
    <Box mb='med'>
      <Label>Social Security Number</Label>
      <SSNInput name='ssn' placeholder='Enter your SSN here' />
    </Box>
  </Gutter>
))

storiesOf('Base', module).add('Input', () => (
  <Gutter withVertical>
    <Box mb='med'>
      <Label>Input</Label>
      <Input name='a' placeholder='Input' />
    </Box>
    <SubGroup>
      <Box mb='med'>
        <Label>Input</Label>
        <Input name='a' placeholder='Input' preTab={<Icon name='FileText' />} />
      </Box>
      <Box mb='med'>
        <Label>Input</Label>
        <Input
          name='a'
          placeholder='Input'
          postTab={<Icon name='FileText' />}
        />
      </Box>
    </SubGroup>
    <Box mb='med'>
      <Label>Input</Label>
      <Input
        name='a'
        placeholder='email'
        postTab={<Span fontSize={1}>@truework.com</Span>}
      />
    </Box>
    <Box mb='med'>
      <Label>Input</Label>
      <Input name='a' placeholder='Input' disabled />
    </Box>
    <Box mb='med'>
      <Label>Input</Label>
      <Input
        name='a'
        placeholder='Input'
        preTab={<Icon name='FileText' />}
        disabled
      />
    </Box>
    <Box mb='med'>
      <Label>Input</Label>
      <Input name='a' placeholder='Input' hasError />
    </Box>
    <Box mb='med'>
      <Label>Input</Label>
      <Input
        name='a'
        placeholder='Input'
        preTab={<Icon name='FileText' />}
        hasError
      />
    </Box>
    <Box mb='med'>
      <Label>Input</Label>
      <Input name='a' placeholder='Input' small />
    </Box>
    <Box mb='med'>
      <Label>Input</Label>
      <Input
        name='a'
        placeholder='Input'
        preTab={<Icon name='FileText' />}
        small
      />
    </Box>
  </Gutter>
))

storiesOf('Base', module).add('Select', () => (
  <Gutter withVertical>
    <Box mb='med'>
      <Label>Select</Label>
      <Select name='a'>
        {[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' }
        ].map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </Box>
    <Box mb='med'>
      <Label>Select w/Placeholder</Label>
      <Select name='a' placeholder='Please select'>
        {[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' }
        ].map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </Box>
    <Box mb='med'>
      <Label>Select</Label>
      <Select name='a' placeholder='Please select' disabled>
        {[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' }
        ].map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </Box>
    <Box mb='med'>
      <Label>Select</Label>
      <Select name='a' placeholder='Please select' hasError>
        {[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' }
        ].map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </Box>
    <Box mb='med'>
      <Label>Select</Label>
      <Select name='a' small>
        {[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' }
        ].map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </Box>
  </Gutter>
))

storiesOf('Base', module).add('Textarea', () => (
  <Gutter withVertical>
    <Box mb='med'>
      <Label>Input</Label>
      <Textarea name='a' placeholder='Textarea' />
    </Box>
    <Box mb='med'>
      <Label>Input</Label>
      <Textarea name='a' placeholder='Textarea' disabled />
    </Box>
    <Box mb='med'>
      <Label>Input</Label>
      <Textarea name='a' placeholder='Textarea' hasError />
    </Box>
  </Gutter>
))

storiesOf('Base', module).add('Checkbox', () => (
  <Gutter withVertical>
    <Box mb='med'>
      <Checkbox name='a'>Checkbox</Checkbox>
    </Box>
    <Box mb='med'>
      <Checkbox name='b' checked>
        Checkbox
      </Checkbox>
    </Box>
    <Box mb='med'>
      <Checkbox name='c' hasError>
        Checkbox
      </Checkbox>
    </Box>
    <Box mb='med'>
      <Checkbox name='d' disabled>
        Checkbox
      </Checkbox>
    </Box>
    <Box mb='med'>
      <CheckboxGroup>
        <Checkbox name='one'>Checkbox in CheckboxGroup</Checkbox>
        <Checkbox name='two'>Checkbox in CheckboxGroup</Checkbox>
        <Checkbox name='three' disabled>
          Checkbox in CheckboxGroup
        </Checkbox>
      </CheckboxGroup>
    </Box>
  </Gutter>
))

storiesOf('Base', module).add('Radio', () => (
  <Gutter withVertical>
    <Box mb='med'>
      <Radio name='a' value='a' label='Radio' />
    </Box>
    <Box mb='med'>
      <Radio name='b' value='b' checked label='Radio' />
    </Box>
  </Gutter>
))

storiesOf('Base', module).add('Toggle', () => (
  <Gutter withVertical>
    <Box mb='med' display='flex' alignItems='center'>
      <H5 mr='xs'>Toggle</H5>
      <Toggle name='b' label='Toggle' />
    </Box>
    <Box mb='med' display='flex' alignItems='center'>
      <Toggle name='b' label='Toggle' checked />
      <H5 ml='xs'>Toggle</H5>
    </Box>
  </Gutter>
))

storiesOf('Base', module).add('DateInput', () => (
  <Gutter withVertical>
    <Box mb='med'>
      <Label>Date</Label>
      <DateInput name='date' label='Date' onUpdate={() => {}} />
    </Box>
  </Gutter>
))

storiesOf('Base', module).add('Dropdown', () => (
  <Gutter withVertical>
    <Box mb='med'>
      <Label>Dropdown</Label>
      <Dropdown
        items={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' }
        ]}
      />
    </Box>
    <Box mb='med'>
      <Label>Dropdown Disabled</Label>
      <Dropdown
        disabled
        items={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' }
        ]}
      />
    </Box>
    <Box mb='med'>
      <Label>Dropdown Error</Label>
      <Dropdown
        hasError
        items={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' }
        ]}
      />
    </Box>
  </Gutter>
))

storiesOf('Base', module).add('Tile', () => (
  <Gutter withVertical>
    <Box width='500px' mb='sm'>
      <GridRow gutter='sm'>
        {[
          { id: 'tile-1', icon: 'FileText', label: 'Mortgage / Home Equity' },
          {
            id: 'tile-2',
            icon: 'X',
            label: 'Background Check / Employment Screen'
          },
          { id: 'tile-3', icon: 'FileText', label: 'Tenant Screening' }
        ].map(t => (
          <GridItem width={[1, 1 / 3]}>
            <Box width='152px' height='136px'>
              <Tile
                name='tile'
                id={t.id}
                icon={
                  <Icon name={t.icon} width='32px' height='32px' color='body' />
                }
                label={t.label}
              />
            </Box>
          </GridItem>
        ))}
      </GridRow>
    </Box>
    <Box width='500px' mb='med'>
      <GridRow gutter='sm'>
        {[
          { id: 'tile-4', icon: 'X', label: 'Government / Social Services' },
          { id: 'tile-5', icon: 'FileText', label: 'Auto Lender' },
          {
            id: 'tile-6',
            icon: 'X',
            label: 'Personal Loans or Consumer Lending'
          }
        ].map(t => (
          <GridItem width={[1, 1 / 3]}>
            <Box width='152px' height='136px'>
              <Tile
                name='tile'
                id={t.id}
                icon={
                  <Icon name={t.icon} width='32px' height='32px' color='body' />
                }
                label={t.label}
              />
            </Box>
          </GridItem>
        ))}
      </GridRow>
    </Box>
  </Gutter>
))

storiesOf('Formik', module).add('Basic', () => (
  <Gutter withVertical>
    <Formik
      initialValues={{
        input: '',
        textarea: '',
        select: '',
        checkbox: '',
        radio: '',
        toggle: '',
        date: '',
        dropdown: '',
        ssn: '***-**-1234'
      }}
      onSubmit={values => {
        const val = JSON.stringify(values, null, '  ')
        alert(val)
        console.log(val)
      }}
    >
      <Form>
        <Box mb='med'>
          <InputFieldWithLabel name='input' label='Input' placeholder='Input' />
        </Box>
        <Box mb='med'>
          <TextareaFieldWithLabel
            name='textarea'
            label='Textarea'
            placeholder='Textarea'
          />
        </Box>
        <Box mb='med'>
          <SSNInputFieldWithLabel
            label='Social Security Number'
            name='ssn'
            placeholder='Enter your SSN here'
          />
        </Box>
        <Box mb='med'>
          <SelectFieldWithLabel
            name='select'
            label='Select'
            placeholder='Please select'
            validate={val => {
              return !val ? 'Required' : undefined
            }}
          >
            {[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ].map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </SelectFieldWithLabel>
        </Box>
        <Box mb='med'>
          <CheckboxField name='checkbox'>Checkbox</CheckboxField>
        </Box>
        <Box mb='med'>
          <CheckboxGroup>
            <CheckboxField name='one'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CheckboxField>
            <CheckboxField name='two'>Checkbox in CheckboxGroup</CheckboxField>
            <CheckboxField name='three' disabled>
              Checkbox in CheckboxGroup
            </CheckboxField>
          </CheckboxGroup>
        </Box>

        <Box mb='med'>
          <RadioFieldWithLabel name='radio' label='Radio'>
            <Radio
              value='foo'
              label={<Span>Item label for Foo</Span>}
              description='Item description for Foo.'
            />
            <Radio
              value='bar'
              label='Item label for Bar'
              description='Item description for Bar.'
            />
            <Radio
              value='baz'
              label='Item label for Baz'
              disabled
              description='Item description for Baz.'
            />
          </RadioFieldWithLabel>
        </Box>
        <Box mb='med' display='flex' alignItems='center'>
          <ToggleField name='toggle' label='Toggle' />
          <Label mb='0' ml='xs'>
            Toggle
          </Label>
        </Box>
        <Box mb='med'>
          <DateInputFieldWithLabel name='date' label='Date' />
        </Box>
        <Box mb='med'>
          <DropdownFieldWithLabel
            name='dropdown'
            label='Dropdown'
            items={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
          />
        </Box>

        <Box mb='med' display='flex'>
          <SelectField
            small
            name='select'
            placeholder='Filter'
            validate={val => {
              return !val ? 'Required' : undefined
            }}
          >
            {[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ].map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </SelectField>

          <Box ml='sm'>
            <InputField small name='search' placeholder='Search' />
          </Box>
        </Box>

        <Box width='152px' height='136px' mb='med'>
          <TileField
            name='tile'
            id='tile-1'
            icon={
              <Icon name='FileText' width='32px' height='32px' color='body' />
            }
            label='Tile'
          />
        </Box>

        <Box mb='med'>
          <Button type='submit' size='large' appearance='primary'>
            Submit
          </Button>
        </Box>
      </Form>
    </Formik>
  </Gutter>
))
