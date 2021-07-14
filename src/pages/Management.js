import {Fragment, useContext, useEffect, useState} from 'react'
import {Form, Button, Image} from 'semantic-ui-react'
import ManagementTabs from '../components/Dashboard/ManagementTabs'
import ShopInformation from '../components/Dashboard/ShopInformation'
import ShopLocation from '../components/Dashboard/ShopLocation'
import LegalInformation from '../components/Dashboard/LegalInformation'
import WorkingHours from '../components/Dashboard/WorkingHours'
import ServicesAndParts from '../components/Dashboard/ServiceAndParts'
import Employees from '../components/Dashboard/Employees'
import CustomerLists from '../components/Dashboard/CustomerLists'
import {useUser} from '../context/UserContext'
import useAsync from '../hooks/useAsync'
import {getShopById} from '../services/ShopService'
import StateContext from '../context/stateContext'
import CreateShopModal from '../shared/createShopModal'
import {useShop} from '../context/ShopContext'
import AddBrandModal from '../shared/addBrandModal'
import AddServiceModal from '../shared/addServiceModal'
import DeleteServiceModal from '../shared/deleteServiceModal'
import AddEmployeeModal from '../shared/AddEmployeeModal'
import EditEmployeeModal from '../shared/EditEmployeeModal'
import Auth from '../config/auth'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {useToasts} from 'react-toast-notifications'
import {removeBrand,deleteService} from '../services/ShopService'

const Management = ({values}) => {
  const {addToast} = useToasts()

  const [activeMenu, setActiveMenu] = useState('shopInformation')
  const [user, setUser] = useUser()
  const [shop, setShop] = useShop()
  const parsedUser = JSON.parse(user)
  const {run, isLoading} = useAsync()
  const [selectedShop, setSelectedShop] = useState({})
  const {showModal, setShowModal} = useContext(StateContext)
  const [state, setState] = useState({
    services: [],
    brands: [],
  })
  const [updateShop, setUpdateShop] = useState(false)
  const [removeState,setRemoveState] = useState({
    shopId: '',
    brandName:''
  })

  useEffect(() => {
    if (!user) return
    console.log(Auth.getShopId(), shop)
    if (JSON.parse(shop) !== 0) {
      run(getShopById(JSON.parse(shop)))
        .then(({data}) => {
          console.log(data.data)
          setSelectedShop(data.data)
          setState({
            services: data.data?.[data.data.shopType]?.services || [],
            brands: data.data?.[data.data.shopType]?.brands || [],
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
    setRemoveState({
      shopId : JSON.parse(shop),
      brandName :  remove[0]["name"]
    })
   
    console.log(removeState)
   
    run(removeBrand(removeState))
      .then(({data}) => {
      
        console.log(data.data)
        addToast(data.message, {appearance: 'success'})
      })
      .catch(e => {
        console.log(e)
      })
  }

  const handleDeleteService = i => {
    let serviceArr = [...state.services]
    let remove = serviceArr.splice(i, 1)
    setState({...state, services: serviceArr})
    const removedService = {
      shopId: JSON.parse(shop),
    serviceId: remove[0]["id"]
    } 


    console.log(removedService)
    
    run(deleteService(removedService))
    .then(({data}) => {
    
      console.log(data.data)
      addToast(data.message, {appearance: 'success'})
    })
    .catch(e => {
      console.log(e)
    })
  }
  return (
    <div className="flex  w-full space-x-8 p-10">
      <CreateShopModal />
      <AddBrandModal
        brandValues={v => setState({...state, brands: v.brands})}
        updateBrand={v => setUpdateShop(prev => !prev)}
      />
      <AddServiceModal
        serviceValues={v => handleService(v)}
        updateService={v => setUpdateShop(prev => !prev)}
      />
      <AddEmployeeModal
        
      />
      <DeleteServiceModal deletedService={handleDeleteService} />
      <EditEmployeeModal />
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
          <div className="flex flex-col w-3/4">
            {activeMenu === 'shopInformation' && (
              <div className=" p-10 bg-white w-full">
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
                <WorkingHours />
              </div>
            )}

            {activeMenu === 'servicesAndParts' && (
              <div className=" p-10 bg-white w-full">
                <ServicesAndParts
                  values={state}
                  deletedBrand={v => handleDeleteBrand(v)}
                  deletedService={v => handleDeleteService(v)}
                />
              </div>
            )}

            {activeMenu === 'employees' && (
              <div className=" p-10  w-full">
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
