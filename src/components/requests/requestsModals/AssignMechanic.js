import {useContext, useEffect, useState} from 'react'
import StateContext from '../../../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik, validateYupSchema} from 'formik'
import FormikControl from '../../formik/FormikControl'

const AssignMechanic = () => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)

  useEffect(() => {
    if (['assignMechanic', 'assignMechanic'].includes(showModal.modalName)) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [showModal])

  const handleOnSubmit = value => {
    console.log(value)
  }

  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      open={open}
    >
      <Modal.Content>
        <div className="px-10">
          <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Assign To Mechanic
          </p>
          <p className="text-center text-labelColor text-base font-normal">
            Choose The Mechanic You Want To Work On This Request
          </p>
          <div className="my-20 w-1/2 mx-auto">
            <Formik>
              <Form>
                <Form.Field>
                  <FormikControl
                    control="dropdown"
                    name="role"
                    fluid
                    selection
                    multiple
                    clearable
                    label="Select Mechanic"
                  />
                </Form.Field>
                <div className="flex text-center">
                  <Button
                    content="Assign"
                    className="btn-primary "
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
            </Formik>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default AssignMechanic
