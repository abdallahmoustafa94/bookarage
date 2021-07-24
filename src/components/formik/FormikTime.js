import {Field} from 'formik'
import {TimeInput} from 'semantic-ui-calendar-react'

function FormikTime({label, name, ...props}) {
  return (
    <>
      <label htmlFor={name} className="font-bold text-primary text-base mt-4">
        {label}
      </label>
      <Field name={name}>
        {({form, field}) => {
          const {setFieldValue, setFieldTouched, errors, touched} = form
          const {value} = field

          return (
            <TimeInput
              id={name}
              closable
              iconPosition="left"
              popupPosition="bottom left"
              timeFormat="AMPM"
              {...field}
              {...props}
              // value={value}
              onBlur={() => setFieldTouched(name, true)}
              onChange={(e, {value}) => setFieldValue(name, value)}
              error={touched[name] && errors[name]}
            />
          )
        }}
      </Field>
    </>
  )
}

export default FormikTime
