import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik} from 'formik'
import FormikControl from '../components/formik/FormikControl'
import useAsync from '../hooks/useAsync'
import {getAllBrands} from '../services/ShopService'
import useMediaQuery from '../hooks/use-media-query'
import {useToasts} from 'react-toast-notifications'
import {addBrand} from '../services/ShopService'
import {useShop} from '../context/ShopContext'
import {object} from 'yup/lib/locale'
import routes from '../routes'

const AddBrandModal = ({brandValues, updateBrand}) => {
  const isSmall = useMediaQuery('(max-width: 992px)')
  const [shop, setShop] = useShop()
  const {addToast} = useToasts()
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const {run, isLoading} = useAsync()
  const [brandsOptions, setBrandsOptions] = useState([])
  useEffect(() => {
    if (['registerBrand', 'addBrand'].includes(showModal.modalName)) {
      setOpen(true)
      run(getAllBrands()).then(({data}) => {
        console.log(data)
        let brandsArr = []
        data.data.map((b, i) => {
          brandsArr.push({
            key: i,
            text: b.name,
            value: b.name,
          })
        })
        setBrandsOptions(brandsArr)
      })
    } else {
      setOpen(false)
    }
  }, [showModal])

  // const BrandsOptions = [
  //   {
  //     key: 'Honda',
  //     value: 'Honda',
  //     text: 'Honda',
  //   },
  // ]

  const handleOnSubmit = values => {
    console.log(values)
    // console.log(`${key}: ${value}`);

    if (window.location.pathname.includes(routes.management)) {
      run(addBrand({shopId: JSON.parse(shop), brand: values.brands}))
        .then(({data}) => {
          console.log(data.data)
          addToast(data.message, {appearance: 'success'})
          updateBrand(true)
          setShowModal({modalName: '', data: null})
        })
        .catch(e => {
          console.log(e)
        })
    } else {
      console.log(values.brands)
      brandValues({brands: values.brands})
      setShowModal({modalName: '', data: null})
    }
  }
  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      closeOnDimmerClick={false}
      open={open}
    >
      <Modal.Content>
        <div className={isSmall ? 'px-5' : 'px-32'}>
          <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Add Brands
          </p>
          <p className="text-center text-labelColor text-base font-normal">
            Brands that you provide services for
          </p>
          <div className={`${isSmall ? 'w-full' : 'w-1/2'} my-20 mx-auto`}>
            <Formik initialValues={{brands: []}} onSubmit={handleOnSubmit}>
              {formik => (
                <Form onSubmit={formik.submitForm} loading={isLoading}>
                  <Form.Field>
                    <FormikControl
                      control="dropdown"
                      name="brands"
                      fluid
                      multiple
                      selection
                      label="Select Brand"
                      clearable
                      options={brandsOptions}
                    />
                  </Form.Field>

                  <div className="text-center flex justify-center items-center my-20">
                    <Button
                      content="Add"
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

export default AddBrandModal
