import React from 'react'
import {Field} from 'formik'
import {Form} from 'semantic-ui-react'

function FormikCheckbox({label, name, className, ...props}) {
  return (
    <>
      <label htmlFor={name} className="font-bold text-base mt-4 text-primary">
        {label}
      </label>
      <Field name={name}>
        {({form, field}) => {
          const {errors, touched} = form
          return (
            <Form.Checkbox
              id={name}
              {...field}
              {...props}
              className={`block mt-2 ${className}`}
              error={touched[name] && errors[name]}
            />
          )
        }}
      </Field>
    </>
  )
}

export default FormikCheckbox
