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
  },

]

  const handleOnSubmit = (e) =>{
    console.log(e)
  }
  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      open={open}
    >
      <Modal.Content>
        <div className="px-40">
        <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Add Service
          </p>
        
          <div>
            <Formik initialValues={{services: ''}} onSubmit={handleOnSubmit}>
              {formik => (
                <Form onSubmit={formik.submitForm}>
                  <div className="flex items-center justify-center">
                  <div className="w-1/2">
                  <Form.Field>
                    <FormikControl
                      control="dropdown"
                      name="services"
                      className="rounded-lg "
                      multiple
                      selection
                      label="Selected Service"
                      clearable
                      options={ServicesOptions}
                    />
                  </Form.Field>
                  </div>
                  <div className="w-1/4 p-2">
                    <Form.Field>
                    <FormikControl
                    label="Cost Start From"
                     name="Cost"
                     placeholder="Cost"
                     control="input"
                     className="rounded leading-tight px-1"
                    />
                  </Form.Field>
                    </div>
                  </div>
                  <div className="w-3/4 mx-auto">
                  <Form.Field>
                    <FormikControl
                    label="Service Details"
                     name="serviceDetails"
                     placeholder="Write the details about the service"
                     control="textarea"
                     rows="8"
                    />
                  </Form.Field>
                  </div>
                  <div className="flex items-center w-full py-8 ">
          <p className="mb-0 w-1/1 mx-auto">Service Availability</p>
          <div className="flex justify-end w-1/1 -mt-3 mx-auto">
             <FormikControl
               name='availability'
               control="checkbox"
               toggle
             />
           </div>
          
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
        <div className="text-center">
          <Button content="Add" className="btn-primary mx-5" />
          <Button
          className="btn-declined mx-5"
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
