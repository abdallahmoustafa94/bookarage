import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../components/formik/FormikControl'
import useAsync from '../hooks/useAsync'
import {getAllServices} from '../services/ShopService'
import useMediaQuery from '../hooks/use-media-query'

const AddServiceModal = ({serviceValues}) => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const [servicesOptions, setServicesOptions] = useState([])
  const [modalData, setModalData] = useState({})
  const {run, isLoading} = useAsync()
  const isSmall = useMediaQuery('(max-width: 992px)')

  useEffect(() => {
    if (['registerService', 'addService'].includes(showModal.modalName)) {
      setOpen(true)
      setModalData(showModal.data)
      run(getAllServices()).then(({data}) => {
        console.log(data)
        let servicesArr = []
        data.data.map((s, i) => {
          servicesArr.push({
            key: i,
            text: s.nameEN,
            value: s.id + '-' + s.nameEN,
          })
        })
        setServicesOptions(servicesArr)
      })
    } else {
      setOpen(false)
    }
  }, [showModal])

  const handleOnSubmit = values => {
    console.log(values, /[^-]*$/.exec(values?.serviceId))
    serviceValues(values)
    setShowModal({modalName: '', data: null})
  }
  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      open={open}
    >
      <Modal.Content>
        <div className={isSmall ? 'px-5' : 'px-40'}>
          <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Add Service
          </p>

          <div className="my-10">
            <Formik
              initialValues={{
                serviceId: modalData?.serviceId || '',
                cost: modalData?.cost || '',
                details: modalData?.details || '',
                isAvailable: modalData?.isAvailable || false,
              }}
              onSubmit={handleOnSubmit}
            >
              {formik => (
                <Form onSubmit={formik.submitForm} loading={isLoading}>
                  <Form.Group widths="equal">
                    <Form.Field>
                      <FormikControl
                        control="dropdown"
                        name="serviceId"
                        selection
                        label="Selected Service"
                        clearable
                        options={servicesOptions}
                      />
                    </Form.Field>

                    <Form.Field>
                      <FormikControl
                        label="Cost Start From"
                        name="cost"
                        placeholder="Cost"
                        control="input"
                      />
                    </Form.Field>
                  </Form.Group>

                  <div className={isSmall ? '' : 'w-3/4 mx-auto'}>
                    <Form.Field>
                      <FormikControl
                        label="Service Details"
                        name="details"
                        placeholder="Write the details about the service"
                        control="textarea"
                        rows="8"
                      />
                    </Form.Field>
                  </div>
                  <div className="flex items-center justify-center w-full py-8 ">
                    <p className="mb-0 w-1/1 mx-auto">Service Availability</p>
                    <div className="flex justify-end w-1/1 -mt-3 mx-auto">
                      <FormikControl
                        name="isAvailable"
                        control="checkbox"
                        checked={formik.values.isAvailable}
                        toggle
                      />
                    </div>
                  </div>

                  <div className={`text-center my-20`}>
                    <Button
                      content={showModal.data ? 'Edit' : 'Add'}
                      type="submit"
                      className={`btn-primary mx-5 ${isSmall ? 'mb-5' : ''}`}
                    />
                    <Button
                      className="btn-declined mx-5"
                      color="transparent"
                      onClick={() => setShowModal({modalName: '', data: null})}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div></div>
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default AddServiceModal
