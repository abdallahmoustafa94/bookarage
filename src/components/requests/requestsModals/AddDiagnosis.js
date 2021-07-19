import {useContext, useEffect, useState} from 'react'
import StateContext from '../../../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik, validateYupSchema} from 'formik'
import FormikControl from '../../formik/FormikControl'

const AddDiagnosis = () => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)

  useEffect(() => {
    if (['addDiagnosis', 'addDiagnosis'].includes(showModal.modalName)) {
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
            Add Diagnosis Details
          </p>

          <div className="my-8 w-full mx-auto">
            <Formik>
              <Form>
                <div className="flex items-center">
                  <Form.Field className="flex justify-start mr-8">
                    <FormikControl control="date" />
                  </Form.Field>
                  <Form.Field className="flex justify-start">
                    <FormikControl control="time" />
                  </Form.Field>
                </div>
                <Form.Field className="w-1/3 ">
                  <FormikControl
                    control="input"
                    name="serviceCost"
                    label="Service Cost"
                    placeholder="cost"
                  />
                </Form.Field>
                <Form.Field className="w-3/4 ">
                  <FormikControl
                    control="textarea"
                    name="diagnosisDetails"
                    label="Diagnosis Details"
                    placeholder="Write Full Details of The Diagnosis"
                    rows={12}
                  />
                </Form.Field>

                <div className="flex text-center">
                  <Button
                    content="Save"
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

export default AddDiagnosis
