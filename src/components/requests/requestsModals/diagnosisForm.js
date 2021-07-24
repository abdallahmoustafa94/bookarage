import {Formik} from 'formik'
import {Button, Form, Icon} from 'semantic-ui-react'
import FormikControl from '../../formik/FormikControl'
import {HiCheckCircle} from 'react-icons/hi'

const DiagnosisFormStep = () => {
  return (
    <div className="my-10 mx-20">
      <Formik initialValues={{required: false}}>
        {formik => (
          <Form onSubmit={formik.submitForm}>
            <div>
              <p className="text-labelColor mb-0">Finish And Delivery Time</p>
              <Form.Group widths="8">
                <Form.Field width="4">
                  <FormikControl control="date" />
                </Form.Field>
                <Form.Field width="4">
                  <FormikControl control="time" />
                </Form.Field>
              </Form.Group>
            </div>

            <Form.Field width="4">
              <FormikControl
                control="input"
                name="serviceCost"
                label="Service Cost"
                placeholder="cost"
              />
            </Form.Field>
            <Form.Field>
              <FormikControl
                control="textarea"
                name="diagnosisDetails"
                label="Diagnosis Details"
                placeholder="Write Full Details of The Diagnosis"
                rows={5}
              />
            </Form.Field>

            <Form.Field>
              <div className="flex justify-between">
                <p className="text-labelColor">Parts Required</p>
                <FormikControl control="checkbox" name="required" toggle />
              </div>
            </Form.Field>

            <Form.Field>
              <div className="shadow-md rounded-xl p-3">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <p className="mb-0">Part 1</p>
                    <div className="bg-green-500 py-2 px-5 rounded-lg flex items-center ml-5">
                      <HiCheckCircle size={20} className="text-white mr-2" />
                      <p className="text-white">Approved</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <p className="mb-0 mr-2">Qty</p>
                    <FormikControl
                      name="quantity"
                      className="w-16"
                      control="input"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Form.Group widths="equal">
                    <Form.Field>
                      <FormikControl name="name" label="Name" control="input" />
                    </Form.Field>
                    <Form.Field>
                      <FormikControl
                        name="number"
                        label="Number"
                        control="input"
                      />
                    </Form.Field>
                    <Form.Field>
                      <FormikControl
                        name="price"
                        label="Price (AED)"
                        control="input"
                      />
                    </Form.Field>
                    <Form.Field>
                      <FormikControl
                        name="labourCost"
                        label="Labour Cost (AED)"
                        control="input"
                      />
                    </Form.Field>
                  </Form.Group>
                </div>
              </div>
            </Form.Field>

            <div className="mt-5">
              <p className="font-medium text-labelColor">Summary</p>
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 mb-0">Service Cost</p>
                <p className="text-gray-400 mb-0">200 AED</p>
              </div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 mb-0">Parts Cost</p>
                <p className="text-gray-400 mb-0">150 AED</p>
              </div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 mb-0">VAT</p>
                <p className="text-gray-400 mb-0">49 AED</p>
              </div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-mainBgColor-default font-medium mb-0">
                  Total Cost
                </p>
                <p className="text-mainBgColor-default font-medium mb-0">
                  200 AED
                </p>
              </div>
            </div>

            <div className="text-center my-7">
              <Button content="Save" className="btn-primary " type="submit" />
              <Button className="btn-declined mx-5">Cancel</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DiagnosisFormStep
