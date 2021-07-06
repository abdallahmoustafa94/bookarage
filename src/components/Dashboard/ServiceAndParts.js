import {Formik} from 'formik'
import AddServiceModal from '../../shared/addServiceModal'
import AddBrandModal from '../../shared/addBrandModal'
import DeleteServiceModal from '../../shared/deleteServiceModal'
import { addService,addBrand } from '../../services/ShopService'

import {useContext, useEffect, useState} from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {RiCloseCircleFill} from 'react-icons/ri'
import {BsWrench} from 'react-icons/bs'
import useAsync from '../../hooks/useAsync'
import {useToasts} from 'react-toast-notifications'
import { useShop } from '../../context/ShopContext'


import {MdModeEdit} from 'react-icons/md'
import {
  Form,
  Image,
  Button,
  Header,
  Modal,
  Label,
  Select,
  Grid,
} from 'semantic-ui-react'

import FormikControl from '../formik/FormikControl'

// import '../../../assets/css/shopinfostep.css'
import StateContext from '../../context/stateContext'

const ServicesAndParts = ({
  values,
  nextStep,
  stepTitle,
  deletedBrand,
  loading,
}) => {
  const [shop, setShop] = useShop()
  const {setShowModal} = useContext(StateContext)
  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()

  const [state, setState] = useState({
    services: [],
    brands: [],
  })

  const handleOnSubmit = () => {
    let addServices = []
    state.services.map((s, i) => {
      console.log(Number(s?.serviceId.split('-')[0]))
      addServices.push(
        'services[' + i + '][serviceId]',
        Number(s?.serviceId.split('-')[0]),
      )
      addServices.push('services[' + i + '][cost]', s?.cost)
      addServices.push('services[' + i + '][details]', s?.details)
      addServices.push('services[' + i + '][isAvailable]', s?.isAvailable)
    })

    addServices.map(service =>
      run(addService(service))
      .then(({data}) => {
        JSON.stringify({
          shopId: JSON.parse(shop).id,
          serviceId : data.data.service.serviceId,
          cost:data.data.service.cost,
          details:data.data.service.cost,
          isAvailable : data.data.service.isAvailable
        })
        console.log(data.data)
        addToast(data.message, {appearance: 'success'})
      })
      .catch(e => {
        console.log(e)
      })
      
      )

      const addBrands = new FormData()
      state.brands.map((b, i) => {
        addBrands.append('brands[' + i + '][brand]', b)
        addBrands.append('brandLogo[' + i + '][brandLogo]', b)
      })

      run(addBrand(addBrands))
      .then(({data}) => {
       
        console.log(data.data)
        addToast(data.message, {appearance: 'success'})
      })
      .catch(e => {
        console.log(e)
      })

  }

  

  return (
    <div className="px-8">
      {/* <AddBrandModal
        brandValues={v => setState({...state, brands: v.brands})}
      />
      <AddServiceModal serviceValues={v => handleService(v)} />
      <DeleteServiceModal deletedService={handleDeleteService} /> */}

      <Form loading={loading}>
        <div className="my-20">
          <div className="flex items-center w-full">
            <p className="mb-0 w-1/2">Brands Services For</p>
            <div className="flex justify-end w-1/2">
              <Button
                content="add Brand"
                icon="plus"
                className="bg-transparent font-normal text-primaryRedColor-default"
                onClick={() =>
                  setShowModal({modalName: 'registerBrand', data: null})
                }
              />
            </div>
          </div>
          <div className="my-2 text-center">
            <div className="text-sm mt-5">
              <Grid columns={3} doubling verticalAlign="middle">
                <Grid.Row>
                  {values?.brands?.map((b, i) => (
                    <Grid.Column>
                      <div className="relative rounded-full bg-gray-100 px-5 py-3 flex items-center justify-center mb-2">
                        <span className="primary-text-color rtl:ml-3 ltr:mr-3 ">
                          {b}
                        </span>
                        <div className="absolute top-0 ltr:right-0 rtl:left-0">
                          <RiCloseCircleFill
                            size={22}
                            className="text-primaryRedColor-default cursor-pointer"
                            onClick={() => deletedBrand(i)}
                          />
                        </div>
                      </div>
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            </div>
          </div>
          <div className="flex items-center w-full py-4">
            <p className="mb-0 w-1/2">Providing Services</p>
            <div className="flex justify-end w-1/2">
              <Button
                content="add Service"
                icon="plus"
                className="bg-transparent font-normal text-primaryRedColor-default"
                onClick={() =>
                  setShowModal({modalName: 'addService', data: null})
                }
              />
            </div>
          </div>
          {values?.services?.map((s, i) => (
            <div className="border border-gray-300 w-full p-2 mb-3">
              <div className="flex items-center ">
                <div className="flex items-center mb-0 w-1/2">
                  <BsWrench
                    size={17}
                    className="text-primaryRedColor-default ltr:mr-3 rtl:ml-3"
                  />
                  <span className="primary-text-color rtl:mr-3 ">
                    {/[^-]*$/.exec(s?.serviceId)[0]}
                  </span>
                </div>
                <div className="flex justify-end w-1/2 mr-4">
                  <span className=" bg-red-50 px-6 py-2 rounded-full">
                    {s?.isAvailable ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>
              <p className="p-2 text-sm text-gray-500	">{s?.details}</p>
              <div className="flex items-center">
                <div className="flex mb-0 w-1/2 ">
                  <span className="text-blue-900	text-sm primary-text-color  ">
                    Start from {s?.cost} AED
                  </span>
                </div>
                <div className="p-0 justify-end flex w-1/2 mr-6">
                  <MdModeEdit size={16} className="text-gray-400 mr-1" />
                  <Button
                    className="text-gray-400 text-base bg-transparent font-normal p-0"
                    content="edit"
                    onClick={() =>
                      setShowModal({modalName: 'addService', data: s})
                    }
                  />
                </div>
                <div className="p-0 justify-end flex  w-1/6">
                  <RiDeleteBin6Line size={16} className="text-gray-400 mr-1" />
                  <Button
                    className="text-gray-400 text-base bg-transparent font-normal p-0"
                    content="delete"
                    onClick={() =>
                      setShowModal({
                        modalName: 'removeService',
                        data: {index: i},
                      })
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-10 text-center">
          <Button
            content="Save"
            onClick={handleOnSubmit}
            className="btn-primary"
          />
         
        </div>
      </Form>
    </div>
  )
}

export default ServicesAndParts
