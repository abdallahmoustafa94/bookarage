import {Fragment, useContext, useEffect, useState} from 'react'
import ManagementTabs from '../components/ManagementComponenets/ManagementTabs'
import ShopInformation from '../components/ManagementComponenets/ShopInformation'
import WorkingHours from '../components/ManagementComponenets/WorkingHours'
import ServicesAndParts from '../components/ManagementComponenets/ServiceAndParts'
import Employees from '../components/ManagementComponenets/Employees'
import {useUser} from '../context/UserContext'
import useAsync from '../hooks/useAsync'
import {getShopById} from '../services/ShopService'
import StateContext from '../context/stateContext'
import CreateShopModal from '../shared/createShopModal'
import {useShop} from '../context/ShopContext'
import AddBrandModal from '../shared/addBrandModal'
import AddServiceModal from '../shared/addServiceModal'
import DeleteServiceModal from '../shared/deleteServiceModal'
import Auth from '../config/auth'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {useToasts} from 'react-toast-notifications'
import {removeBrand, deleteService} from '../services/ShopService'
import EditServiceModal from '../shared/editServiceModal'

const Management = ({values}) => {
  const {addToast} = useToasts()

  const [activeMenu, setActiveMenu] = useState('shopInformation')
  const [user, setUser] = useUser()
  const [shop, setShop] = useShop()
  const {run, isLoading} = useAsync()
  const [selectedShop, setSelectedShop] = useState({})
  const {showModal, setShowModal} = useContext(StateContext)
  const [state, setState] = useState({
    services: [],
    brands: [],
  })
  const [updateShop, setUpdateShop] = useState(false)
  const [removeState, setRemoveState] = useState({
    shopId: '',
    brandName: '',
  })

  useEffect(() => {
    if (!JSON.parse(shop) === 0) return
    console.log(Auth.getShopId(), shop)
    if (JSON.parse(shop) !== 0) {
      run(getShopById(Auth.getShopId()))
        .then(({data}) => {
          console.log(data.data)
          setSelectedShop(data.data)
          setState({
            services: data.data?.shopDetails?.services || [],
            brands: data.data?.shopDetails?.brands || [],
          })
        })
        .catch(e => {
          console.log(e)
        })
    } else {
      if (Auth.isAuth()) {
        console.log('no branches')
        setShowModal({modalName: 'createShop', data: null})
      }
    }
  }, [shop, updateShop])

  const handleService = v => {
    let serviceArr = [...state.services]
    const index = serviceArr.findIndex(o => o.serviceId === v.serviceId)

    if (index === -1) {
      serviceArr = [...serviceArr, v]
    } else {
      serviceArr.splice(index, 1)
      serviceArr = [...serviceArr, v]
    }

    setState({...state, services: serviceArr})
  }

  const handleDeleteBrand = i => {
    let brandsArr = [...state.brands]
    let remove = brandsArr.splice(i, 1)
    setState({...state, brands: brandsArr})
    console.log(state)
    const deletedBrand = {
      shopId: JSON.parse(shop),
      brandName: remove[0]['name'],
    }

    run(removeBrand(deletedBrand))
      .then(({data}) => {
        console.log(data.data)
        addToast(data.message, {appearance: 'success'})
      })
      .catch(e => {
        console.log(e)
      })
  }

  const handleDeleteService = v => {
    let serviceArr = [...state.services]
    serviceArr.splice(v.index, 1)
    setState({...state, services: serviceArr})
    const removedService = {
      shopId: JSON.parse(shop),
      serviceId: v.serviceId,
    }

    console.log(removedService)
    run(deleteService(removedService))
      .then(({data}) => {
        console.log(data)
        addToast(data.message, {appearance: 'success'})
      })
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <div className="lg:flex  w-full lg:space-x-8 p-10">
      <CreateShopModal />
      <AddBrandModal
        brandValues={v => setState({...state, brands: v.brands})}
        updateBrand={v => setUpdateShop(prev => !prev)}
      />
      <AddServiceModal
        serviceValues={v => handleService(v)}
        updateService={v => setUpdateShop(prev => !prev)}
      />
      <DeleteServiceModal deletedService={handleDeleteService} />
      <EditServiceModal updateService={v => setUpdateShop(prev => !prev)} />
      {JSON.parse(shop) !== 0 && (
        <Fragment>
          <ManagementTabs
            activeMenu={activeMenu}
            setActiveMenu={value => setActiveMenu(value)}
          />

          <div
            className="fixed bottom-10 right-10 z-10 rounded-full p-3 cursor-pointer"
            onClick={() => setShowModal({modalName: 'createShop', data: null})}
          >
            <BsFillPlusCircleFill
              size={55}
              className="bg-white rounded-full text-primaryRedColor-default"
            />
          </div>
          <div className="lg:flex lg:flex-col lg:w-3/4 ">
            {activeMenu === 'shopInformation' && (
              <div className=" p-10 bg-white w-full xs:mx-auto">
                <p className="font-medium text-gray-700">Basic Information</p>
                <ShopInformation
                  loading={isLoading}
                  shopInfo={selectedShop}
                  updateShop={v => setUpdateShop(prev => !prev)}
                  // nextStep={v => handleOnSubmit(v)
                  // }
                />
              </div>
            )}

            {activeMenu === 'workingHours' && (
              <div className=" p-10 bg-white w-full">
                <WorkingHours
                  values={selectedShop?.workingHrs}
                  updateShop={v => setUpdateShop(prev => !prev)}
                />
              </div>
            )}

            {activeMenu === 'servicesAndParts' && (
              <div className=" lg:p-10 bg-white w-full">
                <ServicesAndParts
                  values={state}
                  deletedBrand={v => handleDeleteBrand(v)}
                  deletedService={v => handleDeleteService(v)}
                />
              </div>
            )}

            {activeMenu === 'employees' && (
              <div className=" lg:p-10  w-full">
                <Employees />
              </div>
            )}

            {/* {activeMenu === 'customerLists' && (
              <div className=" p-10  w-full">
                <CustomerLists />
              </div>
            )} */}
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default Management
