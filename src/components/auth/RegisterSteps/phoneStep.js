import {Header, Icon, Form, Button} from 'semantic-ui-react'
import {IoArrowBack} from 'react-icons/io5'
import {Formik} from 'formik'
import FormikControl from '../../formik/FormikControl'
import * as Yup from 'yup'
import useAsync from '../../../hooks/useAsync'
import {useToasts} from 'react-toast-notifications'

const PhoneStep = ({handleBack, nextStep, values, loading}) => {
  const handleOnSubmit = values => {
    console.log(values)
    nextStep({type: 'sendOTP', value: values})
  }
  return (
    <div>
      <div className="flex items-center w-full">
        <div
          className="flex justify-start cursor-pointer"
          onClick={() => handleBack(true)}
        >
          <IoArrowBack
            size={30}
            className="text-labelColor text-lg text-left"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <Header
            as="h3"
            className=" text-labelColor text-center font-semibold m-0"
          >
            Create New Account
          </Header>
          <p className="px-40 text-center mt-2">
            Please enter your phone number and wait for activation code.
          </p>
        </div>
      </div>

      <div className="px-40">
        <Formik
          initialValues={{
            phoneNumber: values?.phoneNumber || '',
          }}
          onSubmit={handleOnSubmit}
        >
          {formik => (
            <Form loading={loading} onSubmit={formik.submitForm}>
              <Form.Field className="py-16">
                <FormikControl
                  name="phoneNumber"
                  control="phone"
                  label="Phone Number"
                />
              </Form.Field>

              <div className="my-10 text-center">
                <Button
                  content="Continue"
                  type="submit"
                  className="btn-primary"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default PhoneStep
