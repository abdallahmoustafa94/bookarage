import {Formik} from 'formik'
import {useEffect} from 'react'
import {Form, Image, Button} from 'semantic-ui-react'
import FormikControl from '../../formik/FormikControl'
import {FiUpload} from 'react-icons/fi'

// import '../../../assets/css/shopinfostep.css'

const LegalInformation = ({step, values, nextStep, loading, stepTitle}) => {
  const handleOnSubmit = values => {
    console.log(values)
    nextStep({type: 'step', value: values})
  }

  return (
    <div>
      <Formik
        // initialValues={{
        //   vatNumber: values.vatNumber || '',
        // }}
        onSubmit={handleOnSubmit}
      >
        {formik => (
          <Form
            loading={loading}
            onSubmit={formik.submitForm}
            className="w-2/4"
          >
            <p className="font-medium text-gray-700">Legal Information</p>
            <Form.Field>
              <FormikControl
                name="vatNumber"
                control="input"
                label="vat number"
                placeholder="Write your vat number"
              />
            </Form.Field>
            <p className="mt-2 text-sm text-gray-500">
              To change the name you need to contact the admin
            </p>
            <Form.Field>
              <div>
                <p className="text-gray-600">Trading License</p>
                <p className="mt-2 text-sm text-gray-500">
                  File details size maximum 2mb extension .jpg.png
                </p>
                <div className="space-y-1 text-center">
                  <div className="flex text-sm col-span-6 sm:col-span-3">
                    <label
                      htmlFor="file-upload"
                      className="relative flex items-center cursor-pointer bg-white rounded-md font-medium file-upload"
                    >
                      <FiUpload
                        size={22}
                        className="text-primaryRedColor-default"
                      />
                      <span className="secondary-text-color ltr:ml-3 rtl:mr-3">
                        Upload License
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>
              </div>
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
  )
}

export default LegalInformation
