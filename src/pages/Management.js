import {useEffect, useState,useContext} from 'react'
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
import AddBrandModal from '../shared/addBrandModal'
import AddServiceModal from '../shared/addServiceModal'
import DeleteServiceModal from '../shared/deleteServiceModal'
import AddEmployeeModal from '../shared/AddEmployeeModal'
import EditEmployeeModal from '../shared/EditEmployeeModal'

const Management = () => {
  const [activeMenu, setActiveMenu] = useState('shopInformation')
  const [user, setUser] = useUser()
  const parsedUser = JSON.parse(user)
  const {run, isLoading} = useAsync()

  useEffect(() => {
    if (!user) return
    console.log(parsedUser)
    run(getShopById(parsedUser.shopId))
      .then(({data}) => {
        console.log(data.data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [user])

  const {setShowModal} = useContext(StateContext)

  return (

   
    
    <div className="flex  w-full space-x-8 p-10">
      
      <ManagementTabs
        activeMenu={activeMenu}
        setActiveMenu={value => setActiveMenu(value)}
      />
      <AddBrandModal />
      <AddServiceModal />
      <DeleteServiceModal />
      <AddEmployeeModal />
      <EditEmployeeModal />

      <div className="flex flex-col w-3/4">
        {activeMenu === 'shopInformation' && (
          <div className=" p-10 bg-white w-full">
            <p className="font-medium text-gray-700">Basic Information</p>
            <ShopInformation loading={isLoading} />
            <ShopLocation />
            <LegalInformation />
          </div>
        )}

        {activeMenu === 'workingHours' && (
          <div className=" p-10 bg-white w-full">
            <WorkingHours />
          </div>
        )}

        {activeMenu === 'servicesAndParts' && (
          <div className=" p-10 bg-white w-full">
            <ServicesAndParts />
          </div>
        )}

        {activeMenu === 'employees' && (
          <div className=" p-10  w-full">
            <Employees />
          </div>
        )}

        {activeMenu === 'customerLists' && (
          <div className=" p-10  w-full">
            <CustomerLists />
          </div>
        )}
      </div>
    </div>
  )
}

export default Management
