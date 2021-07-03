import {useContext, useEffect, useState} from 'react'
import StateContext from '../../../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../../formik/FormikControl'

const EditFullNames = () => {
    const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  useEffect(() => {
    if (['editFullName', 'editFullName'].includes(showModal.modalName)) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [showModal])

  
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
            Edit Full Name
          </p>
          <div className="my-40 w-1/2 mx-auto">
            <Formik initialValues={{fullName: ''}} onSubmit={handleOnSubmit}>
              {formik => (
                <Form onSubmit={formik.submitForm}>
                  <Form.Field>
                    <FormikControl
                      control="input"
                      name="fullName"
                      label="Full Name"
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
            <Button content="Save" className="btn-primary mx-5" type="submit" />
            <Button
              className="btn-declined mx-5"
              onClick={() => setShowModal({modalName: "", data: null})}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default EditFullNames