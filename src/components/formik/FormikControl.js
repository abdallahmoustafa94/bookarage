import FormikInput from './FormikInput'
import FormikTime from './FormikTime'
import FormikDate from './FormikDate'
import FormikTextArea from './FormikTextArea'
import FormikDropdown from './FormikDropdown'
import FormikSelect from './FormikSelect'
import FormikCheckbox from './FormikCheckbox'
import FormikPhone from './FormikPhone'
import FormikVerifyCode from './FormikVerifyCode'

function FormikControl({control, ...props}) {
  switch (control) {
    case 'input':
      return <FormikInput {...props} />
    case 'textarea':
      return <FormikTextArea {...props} />
    case 'time':
      return <FormikTime {...props} />
    case 'date':
      return <FormikDate {...props} />
    case 'phone':
      return <FormikPhone {...props} />
    case 'dropdown':
      return <FormikDropdown {...props} />
    case 'verifyCode':
      return <FormikVerifyCode {...props} />
    case 'select':
      return <FormikSelect {...props} />
    case 'checkbox':
      return <FormikCheckbox {...props} />
    default:
      return null
  }
}

export default FormikControl
