import {useEffect, useState,useContext} from 'react'
import RequestTabs from '../components/Dashboard/requestTabs'
import {Form, Button, Image} from 'semantic-ui-react'
import AccInfo from '../components/Dashboard/AccInfo'
import StateContext from '../context/stateContext'
import EditFullName from '../components/Dashboard/myAccountModals/EditFullName'
import EditPhoneNumber from '../components/Dashboard/myAccountModals/EditPhoneNumber'



const Myaccount =() => {

return(

    <div className="flex  w-full space-x-8" >
      <EditFullName />
      <EditPhoneNumber />

    <div className="flex flex-col w-1/4 text-gray-700 bg-white flex-initial p-10">
       <Button content="Account info"
            className="bg-primaryRedColor-default text-white rounded-full py-4 px-1"
            icon="user"
            ></Button>
            <Button content="Account info"
            className="bg-transparent text-gray-700 rounded-full py-4 px-2 mt-4"
            icon="payment"
            ></Button>
    </div>
    <div className="flex flex-col w-2/4">
    <div className=" p-10 bg-white w-full">
      <p className="font-medium text-gray-700">Personal info</p>
      <p className="text-gray-300">Account Picture</p> 
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='tiny' circular className="-mt-2" />
      <AccInfo label="Full Name" info="Yehia Fouad" modalName="editFullName" />
      <AccInfo label="Phone Number" info="+20111676611" modalName="editPhoneNumber" />
      {/* <AccInfo label="Date Of Birth" info="19 August 1985"  />   */}
    </div>
    
    <div className=" p-10 bg-white mt-8 w-full">
      <p className="font-medium text-gray-700">Security info</p>
      <div className="flex mt-8">
        <div className="justify-start w-3/4">
          <p className="text-gray-700">Email Address</p>
          <p className="text-gray-300 font-medium -mt-2">mathew.gray@mail.com</p>
        </div>
        {/* <div className=" w-1/4 flex justify-end ">
          <Button  content="Edit" className="bg-transparent text-blue-700 font-semibold  py-2 px-4 border border-gray-500  "/>
        </div> */}
      </div>
      <div className="flex mt-8">
        <div className="justify-start w-3/4">
          <p className="text-gray-700">Password</p>
          <p className="text-gray-300 font-medium -mt-2">Protect your account by creating a long and strong password</p>
        </div>
        {/* <div className=" w-1/4 flex justify-end ">
          <Button content="Edit" className="bg-transparent text-blue-700 font-semibold  py-2 px-4 border border-gray-500  "/>
        </div> */}
      </div>
      
    </div>
    </div>
     
    
    </div>  
  
)
  
}

export default Myaccount;