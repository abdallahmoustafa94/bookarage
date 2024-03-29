import {useContext, useEffect, useState} from 'react'
import StateContext from '../../../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../../formik/FormikControl'
import useAsync from '../../../hooks/useAsync'
import {editProfile} from '../../../services/MyAccountService'
import {useUser} from '../../../context/UserContext'
import {useToasts} from 'react-toast-notifications'

const EditFullNames = ({updateProfile}) => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const [user, setUser] = useUser()
  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()
  useEffect(() => {
    if (['editFullName', 'editFullName'].includes(showModal.modalName)) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [showModal])

  const handleOnSubmit = values => {
    // console.log(values, JSON.parse(user))
    run(editProfile({nameEN: values.fullName, nameAR: values.fullName}))
      .then(({data}) => {
        // console.log(data)
        const updateUser = {
          ...JSON.parse(user),
          nameEN: data.data.nameEN,
          nameAR: data.data.nameAR,
        }
        setUser(JSON.stringify(updateUser))
        addToast(data.message, {appearance: 'success'})
        updateProfile(true)
        setShowModal({modalName: '', data: null})
      })
      .catch(e => {
        console.log(e)
      })
    // fullNameValue(values)
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
            <Formik
              initialValues={{fullName: showModal.data || ''}}
              onSubmit={handleOnSubmit}
            >
              {formik => (
                <Form onSubmit={formik.submitForm} loading={isLoading}>
                  <Form.Field>
                    <FormikControl
                      control="input"
                      name="fullName"
                      label="Full Name"
                    />
                  </Form.Field>
                  <div className="flex text-center">
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

export default EditFullNames
