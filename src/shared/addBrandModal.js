import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../components/formik/FormikControl'

const AddBrandModal = () => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  useEffect(() => {
    if (['registerBrand', 'addBrand'].includes(showModal.modalName)) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [showModal])

  const BrandsOptions = [
    {
      key: 'Honda',
      value: 'Honda',
      text: 'Honda',
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
            Add Brands
          </p>
          <p className="text-center text-labelColor text-base font-normal">
            Brands that you provide services for
          </p>
          <div className="my-20">
            <Formik initialValues={{brands: ''}} onSubmit={handleOnSubmit}>
              {formik => (
                <Form onSubmit={formik.submitForm}>
                  <Form.Field>
                    <FormikControl
                      control="dropdown"
                      name="brands"
                      fluid
                      multiple
                      selection
                      label="Select Brand"
                      clearable
                      options={BrandsOptions}
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
            <Button content="Add" className="btn-primary mx-5" type="submit" />
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

export default AddBrandModal
