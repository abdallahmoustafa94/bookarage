import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../components/formik/FormikControl'
import useAsync from '../hooks/useAsync'
import {getAllBrands} from '../services/ShopService'

const AddEmployeeModal = () => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const {run, isLoading} = useAsync()
  useEffect(() => {
    if (['addEmployee', 'addEmployee'].includes(showModal.modalName)) {
      setOpen(true)
      run(getAllBrands()).then(({data}) => {
        console.log(data)
      })
    } else {
      setOpen(false)
    }
  }, [showModal])

  const employeeOptions = [
    {
      key: 'mechanic',
      value: 'mechanic',
      text: 'Mechanic',
    },
  ]

  const handleOnSubmit = values => {
    console.log(values)
  }
  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      open={open}
    >
      <Modal.Content>
        <div className="px-32">
          <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Add New Employee
          </p>
          <p className="text-center text-labelColor text-base font-normal">
            Invite employee to work in your shop
          </p>
          <div className="my-20 w-1/2 mx-auto">
            <Formik initialValues={{brands: ''}} onSubmit={handleOnSubmit}>
              {formik => (
                <Form onSubmit={formik.submitForm}>
                    <Form.Field>
                    <FormikControl
                      control="input"
                      name="email"
                      label="Email Address"
                    />
                  </Form.Field>
                  <Form.Field>
                    <FormikControl
                      control="dropdown"
                      name="brands"
                      fluid
                      
                      selection
                      label="Select Role"
                      
                      options={employeeOptions}
                    />
                  </Form.Field>
                </Form>
              )}
            </Formik>
          </div>

          {/* <Form.Field>
                      <Label className="font-bold text-base mt-4 text-primary brands-selection">
                        Select Brand
                      </Label>
                    </Form.Field> */}
          <div className="text-center">
            <Button content="Invite Employee" className="btn-primary mx-5" type="submit" />
            <Button
              className="btn-declined mx-5"
              onClick={() => setShowModal({modalName: '', data: null})}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default AddEmployeeModal
