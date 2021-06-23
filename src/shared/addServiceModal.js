import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../components/formik/FormikControl'


const AddServiceModal = () => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)

  useEffect(() => {
    if (['registerService', 'addService'].includes(showModal.modalName)) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [showModal])

  const ServicesOptions = [{
    key: 'erepair',
      value: 'erepair',
      text: 'Electric Repair',
  }]
  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      open={open}
    >
      <Modal.Content>
        <div>
        <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Add Brands
          </p>
          <p className="text-center text-labelColor text-base font-normal">
            Brands that you provide services for
          </p>
          <div className="my-20 ">
            <Formik initialValues={{services: ''}} onSubmit={handleOnSubmit}>
              {formik => (
                <Form onSubmit={formik.submitForm}>
                  <div className="flex items-center w-full">
                  <Form.Field>
                    <FormikControl
                      control="dropdown"
                      name="services"
                      fluid
                      multiple
                      selection
                      label="Selected Service"
                      clearable
                      options={ServicesOptions}
                    />
                  </Form.Field>
                  <Form.Field>
                    <FormikControl
                    label="Cost Start From"
                     name="CostStartFrom"
                     placeholder="Cost Start From"
                     control="input"
                    />
                  </Form.Field>
                  </div>
                  <div>
                  <Form.Field>
                    <FormikControl
                    label="Service Details"
                     name="serviceDetails"
                     placeholder="Write the details about the service"
                     control="textarea"
                    />
                  </Form.Field>
                  </div>
                  
                </Form>
              )}
            </Formik>
          </div>
          <div>

          </div>
        </div>
     

      </Modal.Content>
      <Modal.Actions>
        <div className="brands-buttons">
          <Button content="Add" className="btn-primary" />
          <Button
            color="transparent"
            onClick={() => setShowModal({modalName: '', data: null})}
          >
            Cancel
          </Button>
        </div>
      </Modal.Actions>
    </Modal>
  )
}

export default AddServiceModal
