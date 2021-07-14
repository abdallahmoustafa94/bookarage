import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../components/formik/FormikControl'
import useAsync from '../hooks/useAsync'
import {addServiceForShop, getAllServices} from '../services/ShopService'
import useMediaQuery from '../hooks/use-media-query'
import {useShop} from '../context/ShopContext'
import routes from '../routes'
import {useToasts} from 'react-toast-notifications'

const AddServiceModal = ({serviceValues, updateService}) => {
  const [shop, setShop] = useShop()
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const [servicesOptions, setServicesOptions] = useState([])
  const [modalData, setModalData] = useState({})
  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()
  const isSmall = useMediaQuery('(max-width: 992px)')

  useEffect(() => {
    if (['registerService', 'addService'].includes(showModal.modalName)) {
      setOpen(true)

      // setModalData(showModal.data)

      run(getAllServices()).then(({data}) => {
        console.log(data)
        let servicesArr = []
        data.data.map((s, i) => {
          servicesArr.push({
            key: i,
            text: s.nameEN,
            value: s.id ,
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
    console.log(values, /[^-]*$/.exec(values?.serviceId))
    
    if (window.location.pathname.includes(routes.register)) {
      serviceValues(values)
    } else {
      const valueEntries = Object.entries(values);
      const valueFromEntries =  Object.fromEntries(valueEntries);
      valueFromEntries.shopId = JSON.parse(shop)
      // const valueFromEntriesStr = JSON.stringify(valueFromEntries)
      
        
       console.log(valueFromEntries)
  
     
      run(addServiceForShop(valueFromEntries))
        .then(({data}) => {
         
          console.log(data.data)
          addToast(data.message, {appearance: 'success'})
          updateService(true)
          setShowModal({modalName: '', data: null})
        })
        .catch(e => {
          console.log(e)
        })

      // console.log(newService)
    }
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
                serviceId:
                  showModal.data?.serviceId ||
                  showModal.data?.id + '-' + showModal.data?.nameEN ||
                  '',
                cost: showModal.data?.cost || '',
                details: showModal.data?.details || '',
                isAvailable: showModal.data?.isAvailable || false,
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
                        defaultValue={formik.values.serviceId}
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
