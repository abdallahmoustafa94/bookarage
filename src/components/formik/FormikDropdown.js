import React from 'react'
import {Field} from 'formik'
import {Form} from 'semantic-ui-react'

function FormikDropdown({label, name, className, ...props}) {
  return (
    <>
      <label htmlFor={name} className="font-bold text-base mt-4 text-primary">
        {label}
      </label>
      <Field name={name}>
        {({form, field}) => {
          const {setFieldValue, setFieldTouched, errors, touched} = form
          return (
            <Form.Dropdown
              id={name}
              {...field}
              {...props}
              className={`block mt-2 ${className}`}
              error={touched[name] && errors[name]}
              onBlur={() => setFieldTouched(name, true)}
              onChange={(e, {value}) => setFieldValue(name, value)}
            />
          )
        }}
      </Field>
    </>
  )
}

export default FormikDropdown