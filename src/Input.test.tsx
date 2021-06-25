import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { InputFieldWithLabel } from "./Input";
import {Box} from "@truework/ui";
import { Formik, Form, Field, FieldProps } from 'formik'
import { ThemeProvider } from 'styled-components';
import { theme } from '@truework/ui';

const id = "some-id"
const label = "some-label"
const value = "some-value"

describe("InputFieldWithLabel", () => {
  test("has correct association between ID, label, and value", () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Formik initialValues={{[id]: value}} onSubmit={console.log}>
          <Form>
            <Box mb='med'>
              <InputFieldWithLabel
                label={label}
                id={id}
              />
            </Box>
          </Form>
        </Formik>
      </ThemeProvider>
    )
    expect(getByLabelText(label)).toHaveValue(value);
  });
});
