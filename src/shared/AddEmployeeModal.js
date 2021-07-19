import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik, validateYupSchema} from 'formik'
import FormikControl from '../components/formik/FormikControl'
import useAsync from '../hooks/useAsync'
import {getAllEmployees} from '../services/ShopService'
import {addEmployee} from '../services/ShopService'
import {useToasts} from 'react-toast-notifications'
import {useShop} from '../context/ShopContext'

const AddEmployeeModal = ({updateEmployee}) => {
  const {addToast} = useToasts()
  const [shop, setShop] = useShop()
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const {run, isLoading} = useAsync()
  const [state, setState] = useState({
    email: '',
    isApproved: true,
    nameEN: '',
    role: 'tech',
  })
  // const [employeesOptions,setEmployeesOptions] = useState([])

  useEffect(() => {
    if (['addEmployee'].includes(showModal.modalName)) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [showModal])

  const employeeOptions = [
    {
      key: 'tech',
      value: 'tech',
      text: 'Mechanic',
    },
  ]

  const handleOnSubmit = (values, {resetForm}) => {
    const newEmployee = {
      nameEN: values.employeeName,
      nameAR: values.employeeName,
      email: values.employeeEmail,
      shopId: JSON.parse(shop),
      phoneNumber: values.employeePhone,
      role: values.employeeRole,
      isApproved: true,
    }

    console.log(newEmployee)

    run(addEmployee(newEmployee))
      .then(({data}) => {
        console.log(data.data)
        addToast(data.message, {appearance: 'success'})
        resetForm({})
        updateEmployee(true)
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
        <div className="px-10">
          <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Add New Employee
          </p>
          <p className="text-center text-labelColor text-base font-normal">
            Invite employee to work in your shop
          </p>
          <div className="my-20 w-1/2 mx-auto">
            <Formik
              initialValues={{
                employeeName: '',
                employeeEmail: '',
                employeePhone: '',
                employeeRole: '',
              }}
              onSubmit={handleOnSubmit}
            >
              {formik => (
                <Form onSubmit={formik.submitForm} loading={isLoading}>
                  <Form.Field>
                    <FormikControl
                      control="input"
                      name="employeeName"
                      label="Full Name"
                    />
                  </Form.Field>
                  <Form.Field>
                    <FormikControl
                      control="input"
                      name="employeeEmail"
                      label="Email Address"
                    />
                  </Form.Field>
                  <Form.Field>
                    <FormikControl
                      name="employeePhone"
                      control="phone"
                      label="Phone Number"
                    />
                  </Form.Field>
                  <Form.Field>
                    <FormikControl
                      control="dropdown"
                      name="employeeRole"
                      fluid
                      selection
                      clearable
                      label="Select Role"
                      options={employeeOptions}
                    />
                  </Form.Field>
                  <div className="flex text-center">
                    <Button
                      content="Invite Employee"
                      className="btn-primary"
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

export default AddEmployeeModal
