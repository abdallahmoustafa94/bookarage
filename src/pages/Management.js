import {useEffect, useState} from 'react'
import {Form, Button, Image} from 'semantic-ui-react'
import ManagementTabs from '../components/Dashboard/ManagementTabs'
import ShopInformation from '../components/Dashboard/ShopInformation'
import ShopLocation from '../components/Dashboard/ShopLocation'
import LegalInformation from '../components/Dashboard/LegalInformation'
import WorkingHours from '../components/Dashboard/WorkingHours'
import ServicesAndParts from '../components/Dashboard/ServiceAndParts'
import Employees from '../components/Dashboard/Employees'
import CustomerLists from '../components/Dashboard/CustomerLists'





const Management =() => {
    const [activeMenu, setActiveMenu] = useState('shopInformation')

return(

    <div className="flex  w-full space-x-8 p-10" >
    
    <ManagementTabs
        activeMenu={activeMenu}
        setActiveMenu={value => setActiveMenu(value)}
      />
    <div className="flex flex-col w-3/4">
   
        {activeMenu === 'shopInformation' && (
                
             <div className=" p-10 bg-white w-full">
            <p className="font-medium text-gray-700">Basic Information</p>
            <ShopInformation />
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

export default Management;