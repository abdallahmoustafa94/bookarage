import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Form, Button, Image} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../components/formik/FormikControl'
import useAsync from '../hooks/useAsync'
import {getAllBrands} from '../services/ShopService'

const EditEmployeeModal = () => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const {run, isLoading} = useAsync()
  useEffect(() => {
    if (['editEmployee', 'editEmployee'].includes(showModal.modalName)) {
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
        <div>
          <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Edit Employee
          </p>
          <p className="text-center text-labelColor text-base font-normal">
            Edit Employee Details
          </p>
          <div className="my-10 w-1/2 mx-auto">
              <div className="p-10 bg-blue-100 mb-10">
              <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='tiny' circular className="block mx-auto" />
              <p className="text-center mt-2 text-lg">Jacob Roberts</p>
              <p className="text-center -mt-4 text-lg text-gray-400">Mechanic</p>
              </div>
            <Formik initialValues={{brands: ''}} onSubmit={handleOnSubmit}>
              {formik => (
                <Form onSubmit={formik.submitForm}>
                    
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
                  <div className="flex w-full">
                  <Form.Field className="w-1/2">
                    <FormikControl
                      control="input"
                      name="workingDays"
                      label="Working Days per month"
                      
                    />
                  </Form.Field>
                  
                  <Form.Field className="w-1/2 space-x-4">
                    <FormikControl
                      control="input"
                      name="workingHours"
                      label="Working Hours per month"
                      
                    />
                  </Form.Field>
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
          <div className="text-center">
            <Button content="Save" className="btn-primary mx-5" type="submit" />
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

export default EditEmployeeModal
