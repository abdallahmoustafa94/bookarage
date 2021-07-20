import {useContext, useEffect, useState} from 'react'
import StateContext from '../../../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../../formik/FormikControl'
import useAsync from '../../../hooks/useAsync'
import {editProfile} from '../../../services/MyAccountService'
import {useToasts} from 'react-toast-notifications'

const EditPhoneNumber = ({updateProfile}) => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()

  useEffect(() => {
    if (['editPhoneNumber', 'editPhoneNumber'].includes(showModal.modalName)) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [showModal])

  const handleOnSubmit = values => {
    console.log(values)
    run(editProfile({phoneNumber: values.phoneNumber.replace(/ /g, '')}))
      .then(({data}) => {
        console.log(data)
        addToast(data.message, {appearance: 'success'})
        updateProfile(true)
        setShowModal({modalName: '', data: null})
      })
      .catch(e => {
        console.log(e)
      })
    // phoneNumberValue(values)
    // setShowModal({modalName: '', data: null})
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
            Edit Phone Number
          </p>
          <div className="my-40 w-1/2 mx-auto">
            <Formik
              initialValues={{phoneNumber: showModal?.data || ''}}
              onSubmit={handleOnSubmit}
            >
              {formik => (
                <Form onSubmit={formik.submitForm} loading={isLoading}>
                  <Form.Field>
                    <FormikControl
                      name="phoneNumber"
                      control="phone"
                      label="Phone Number"
                    />
                  </Form.Field>
                  <div className="flex w-full text-center">
                    <Button
                      content="Save"
                      className="btn-primary  w-1/2"
                      type="submit"
                    />
                    <Button
                      className="btn-declined  w-1/2"
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

export default EditPhoneNumber
