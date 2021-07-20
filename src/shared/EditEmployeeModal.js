import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Form, Button, Image} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../components/formik/FormikControl'
import useAsync from '../hooks/useAsync'
import {
  editWorkingHoursForEmployee,
  getAllBrands,
} from '../services/ShopService'
import {useLanguage} from '../context/languageContext'
import {useToasts} from 'react-toast-notifications'

const EditEmployeeModal = ({updateEmployees}) => {
  const [lang] = useLanguage()
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()

  useEffect(() => {
    if (['editEmployee', 'editEmployee'].includes(showModal.modalName)) {
      setOpen(true)
      console.log(showModal?.data.technicianDetails)
    } else {
      setOpen(false)
    }
  }, [showModal])

  const employeeOptions = [
    {
      key: 'mechanic',
      value: 'tech',
      text: 'Mechanic',
    },
  ]

  const handleOnSubmit = values => {
    console.log(values)
    const editEmployeeHours = {
      workingDays: values.workingDaysEdit,
      workingHours: values.workingHoursEdit,
      hoursRate: values.hoursRateEdit,
      userId: showModal?.data?._id,
    }
    run(editWorkingHoursForEmployee(editEmployeeHours))
      .then(({data}) => {
        console.log(data)
        addToast(data.message, {appearance: 'success'})
        updateEmployees(true)
        setShowModal({modalName: '', data: null})
      })
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      closeOnDimmerClick={false}
      open={open}
    >
      <Modal.Content>
        <div>
          <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Edit Employee
          </p>
          <p className="text-center text-labelColor text-base font-normal">
            Edit Employee Details
          </p>
          <div className="my-10 w-1/2 mx-auto">
            <div className="p-10 bg-blue-50 mb-10">
              <Image
                src={
                  showModal?.data?.avatar ||
                  'https://react.semantic-ui.com/images/avatar/large/matthew.png'
                }
                size="tiny"
                circular
                className="block mx-auto"
              />
              <p className="text-center mt-2 text-lg">
                {showModal?.data?.['name' + lang.toUpperCase()]}
              </p>
              <p className="text-center -mt-4 text-lg text-gray-400">
                Mechanic
              </p>
            </div>
            <Formik
              initialValues={{
                roleEdit: showModal?.data?.role || '',
                workingHoursEdit:
                  showModal?.data?.technicianDetails?.workingHours,
                workingDaysEdit:
                  showModal?.data?.technicianDetails?.workingDays,
                hoursRateEdit: showModal?.data?.technicianDetails?.hoursRate,
              }}
              onSubmit={handleOnSubmit}
              enableReinitialize
            >
              {formik => (
                <Form onSubmit={formik.submitForm} loading={isLoading}>
                  <Form.Field>
                    <FormikControl
                      control="dropdown"
                      name="roleEdit"
                      fluid
                      selection
                      label="Select Role"
                      options={employeeOptions}
                    />
                  </Form.Field>
                  <Form.Group widths="equal">
                    <Form.Field>
                      <FormikControl
                        control="input"
                        name="workingDaysEdit"
                        label="Working Days per month"
                      />
                    </Form.Field>

                    <Form.Field>
                      <FormikControl
                        control="input"
                        name="workingHoursEdit"
                        label="Working Hours per month"
                      />
                    </Form.Field>
                  </Form.Group>

                  <Form.Field width={8}>
                    <FormikControl
                      control="input"
                      name="hoursRateEdit"
                      label="Working Hours rate"
                    />
                  </Form.Field>

                  <div className="text-center mt-10">
                    <Button
                      content="Save"
                      className="btn-primary mx-5"
                      type="submit"
                    />
                    <Button
                      className="btn-declined mx-5"
                      onClick={() => setShowModal({modalName: '', data: null})}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* <Form.Field>
                      <Label className="font-bold text-base mt-4 text-primary brands-selection">
                        Select Brand
                      </Label>
                    </Form.Field> */}
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default EditEmployeeModal
