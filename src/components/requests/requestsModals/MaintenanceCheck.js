import {Formik} from 'formik'
import {Button, Form} from 'semantic-ui-react'
import FormikControl from '../../formik/FormikControl'
import useAsync from '../../../hooks/useAsync'
import {updateOverviewForCar} from '../../../services/RequestService'

const MaintenanceCheckStep = ({carValue, nextStep}) => {
  const {run, isLoading} = useAsync()

  const handleOnSubmit = values => {
    console.log(values)
    const newCheck = {
      ...values,
      carId: carValue?.requestDetails?.car?._id,
    }

    console.log(newCheck)

    run(updateOverviewForCar(newCheck))
      .then(({data}) => {
        nextStep('diagnosis')
      })
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <div className="my-10">
      <div className="my-5 text-center">
        <p className="text-labelColor font-medium mb-1">
          Check the required maintenance parts for the selected car
        </p>
        <small className="text-gray-500">
          If item checked means that status is{' '}
          <span className="text-green-500">normal</span>
        </small>
      </div>
      <Formik
        initialValues={{
          airFilter: false,
          battery: false,
          brakeFluid: false,
          oilChange: false,
          regularMaintenance: false,
        }}
        onSubmit={handleOnSubmit}
      >
        {formik => (
          <Form loading={isLoading} onSubmit={formik.submitForm}>
            <Form.Field className="ml-5">
              <FormikControl
                name="regularMaintenance"
                checked={formik.values.regularMaintenance}
                control="checkbox"
                label="Regular Maintenance"
              />
            </Form.Field>

            <Form.Field className="ml-5">
              <FormikControl
                name="battery"
                checked={formik.values.battery}
                control="checkbox"
                label="Battery"
              />
            </Form.Field>

            <Form.Field className="ml-5">
              <FormikControl
                name="oilChange"
                checked={formik.values.oilChange}
                control="checkbox"
                label="Oil Change"
              />
            </Form.Field>

            <Form.Field className="ml-5">
              <FormikControl
                name="airFilter"
                checked={formik.values.airFilter}
                control="checkbox"
                label="Air Filter"
              />
            </Form.Field>

            <Form.Field className="ml-5">
              <FormikControl
                name="brakeFluid"
                checked={formik.values.brakeFluid}
                control="checkbox"
                label="Brake Fluid"
              />
            </Form.Field>

            <div className="text-center my-5">
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

export default MaintenanceCheckStep
