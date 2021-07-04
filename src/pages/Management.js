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

const Management = ({values}) => {
  const [activeMenu, setActiveMenu] = useState('shopInformation')
  const [user, setUser] = useUser()
  const [shop, setShop] = useShop()
  const parsedUser = JSON.parse(user)
  const {run, isLoading} = useAsync()
  const [selectedShop, setSelectedShop] = useState({})
  const {showModal, setShowModal} = useContext(StateContext)
  const [state,setState] = useState({
    services: [],
    brands: [],
  })

  useEffect(() => {
    if (!user) return
    console.log(Auth.getShopId(), shop)
    if (JSON.parse(shop) !== 0) {
      run(getShopById(JSON.parse(shop)))
        .then(({data}) => {
          console.log(data.data)
          setSelectedShop(data.data)
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
  }, [shop])


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

  const handleDeleteService = i => {
    let serviceArr = [...state.services]
    serviceArr.splice(i, 1)
    setState({...state, services: serviceArr})
  }

  const handleOnSubmit = (e) => {
    console.log(e)
  }


  

  return (
    <div className="flex  w-full space-x-8 p-10">
      <CreateShopModal />
      <AddBrandModal brandValues={v => setState({...state, brands: v.brands})}/>
      <AddServiceModal serviceValues={v => handleService(v)}/>
      <AddEmployeeModal />
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
            <Form loading={isLoading}>
              {activeMenu === 'shopInformation' && (
                <div className=" p-10 bg-white w-full">
                  <p className="font-medium text-gray-700">Basic Information</p>
                  <ShopInformation
                    loading={isLoading}
                    shopInfo={selectedShop}
                  />
           
                </div>
              )}
            </Form>

            {activeMenu === 'workingHours' && (
              <div className=" p-10 bg-white w-full">
                <WorkingHours />
              </div>
            )}

            {activeMenu === 'servicesAndParts' && (
              <div className=" p-10 bg-white w-full">
                <ServicesAndParts values={state} />
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
