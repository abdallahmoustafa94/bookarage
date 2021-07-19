import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../components/formik/FormikControl'
import useAsync from '../hooks/useAsync'
import {
  addServiceForShop,
  getAllServices,
  updateShopService,
} from '../services/ShopService'
import useMediaQuery from '../hooks/use-media-query'
import {useShop} from '../context/ShopContext'
import routes from '../routes'
import {useToasts} from 'react-toast-notifications'

const EditServiceModal = ({updateService}) => {
  const [shop, setShop] = useShop()
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const [servicesOptions, setServicesOptions] = useState([])
  const [modalData, setModalData] = useState({})
  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()
  const isSmall = useMediaQuery('(max-width: 992px)')

  console.log(showModal.data)

  useEffect(() => {
    if (['editService'].includes(showModal.modalName)) {
      setOpen(true)

      // setModalData(showModal.data)

      run(getAllServices()).then(({data}) => {
        console.log(data)
        let servicesArr = []
        data.data.map((s, i) => {
          servicesArr.push({
            key: i,
            text: s.nameEN,
            value: s.id,
          })
        })
        // + '-' + s.nameEN
        setServicesOptions(servicesArr)
      })
    } else {
      setOpen(false)
    }
  }, [showModal])

  const handleOnSubmit = values => {
    // console.log(values, /[^-]*$/.exec(values?.serviceId))

    // const valueEntries = Object.entries(values)
    // const valueFromEntries = Object.fromEntries(valueEntries)
    // valueFromEntries.shopId = JSON.parse(shop)

    // const valueFromEntriesStr = JSON.stringify(valueFromEntries)

    // console.log(valueFromEntries)

    const updatedService = {
      shopId: JSON.parse(shop),
      service: {
        id: values.serviceIdService,
        cost: values.costService,
        details: values.detailsService,
        isAvailable: values.isAvailableService,
      },
    }

    run(updateShopService(updatedService))
      .then(({data}) => {
        console.log(data.data)
        addToast(data.message, {appearance: 'success'})
        updateService(true)
        setShowModal({modalName: '', data: null})
      })
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      closeOnDimmerClick={false}
      open={open}
    >
      <Modal.Content>
        <div className={isSmall ? 'px-5' : 'px-40'}>
          <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Edit Service
          </p>
          <div className="my-10">
            <Formik
              initialValues={{
                serviceIdService: showModal.data?.id || '',
                costService: showModal.data?.cost || '',
                detailsService: showModal.data?.details || '',
                isAvailableService: showModal.data?.isAvailable || false,
              }}
              onSubmit={handleOnSubmit}
            >
              {formik => (
                <Form onSubmit={formik.submitForm} loading={isLoading}>
                  <Form.Group widths="equal">
                    <Form.Field>
                      <FormikControl
                        control="dropdown"
                        name="serviceIdService"
                        selection
                        disabled={true}
                        label="Selected Service"
                        clearable
                        options={servicesOptions}
                      />
                    </Form.Field>

                    <Form.Field>
                      <FormikControl
                        label="Cost Start From"
                        name="costService"
                        placeholder="Cost"
                        control="input"
                      />
                    </Form.Field>
                  </Form.Group>

                  <div className={isSmall ? '' : 'w-3/4 mx-auto'}>
                    <Form.Field>
                      <FormikControl
                        label="Service Details"
                        name="detailsService"
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
                        name="isAvailableService"
                        control="checkbox"
                        checked={formik.values.isAvailableService}
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

export default EditServiceModal
