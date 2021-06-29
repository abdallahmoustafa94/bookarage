import {Formik} from 'formik'
import {IoArrowBack} from 'react-icons/io5'


import {useContext, useEffect, useState} from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {MdModeEdit} from 'react-icons/md'
import {
  Form,
  Image,
  Button,
  Header,
  Modal,
  Label,
  Select,
} from 'semantic-ui-react'

import FormikControl from '../formik/FormikControl'

// import '../../../assets/css/shopinfostep.css'
import StateContext from '../../context/stateContext'

const ServicesAndParts = ({
  handleBack,
  step,
  values,
  nextStep,
  loading,
  stepTitle,
}) => {
  const {setShowModal} = useContext(StateContext)

 
  
  return (
    <div className="px-8">
      <div >
        <div className="flex items-center w-full">
          <p className="mb-0 w-1/2">Brands Services & Parts For</p>
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
        <div className="space-y-1 text-center  ">
                  <div className="flex text-sm col-span-6 sm:col-span-3 	">
                    
                     <div className="rounded-full bg-gray-100 py-1 px-2  flex">
                     <span className="primary-text-color  ">
                        Volkswagen
                      </span>
                      <RiDeleteBin6Line
                        size={16}
                        className="text-primaryRedColor-default mr-3"
                      />
                      <span className="primary-text-color  rtl:mr-3 ">
                        Octavia
                      </span>
                      <RiDeleteBin6Line
                        size={16}
                        className="text-primaryRedColor-default mr-3"
                      />
                      <span className="primary-text-color  rtl:mr-3 ">
                        Toyota
                      </span>
                      <RiDeleteBin6Line
                        size={16}
                        className="text-primaryRedColor-default mr-3"
                      />
                      <span className="primary-text-color  rtl:mr-3 ">
                        Hyundai
                      </span>
                      <RiDeleteBin6Line
                        size={16}
                        className="text-primaryRedColor-default mr-3"
                      />
                     </div>
                     
                     
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
                setShowModal({modalName: 'registerService', data: null})
              }
            />
          </div>
        </div>
        <div className="border border-grey-300 w-full p-2 mb-3">
        <div className="flex items-center ">
        <div className="flex mb-0 w-1/2">
        <RiDeleteBin6Line
                        size={16}
                        className="text-primaryRedColor-default "
                      />
                     <span className="primary-text-color  rtl:mr-3 ">
                        Electric Repair
                      </span>
                     
                     </div>
          <div className=" flex justify-end    w-full mr-4 ">
            <span className=" bg-red-50 px-6 py-2 rounded-full">Available</span>
          </div>
          
        </div>
        <p className="p-2 text-sm text-gray-500	">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <div className="flex items-center">
        <div className="flex mb-0 w-1/2 ">
        
                     <span className="text-blue-900	text-sm primary-text-color  ">
                        Start from 50 AED
                      </span>
                     
                     </div>
                     <div className="p-0 justify-end flex w-1/2 mr-6">
                     <MdModeEdit
                        size={16}
                        className="text-gray-400 mr-1"
                      />
                     <Button className="text-gray-400 text-base bg-transparent font-normal p-0" content="edit" onClick={() =>
                setShowModal({modalName: 'registerService', data: null})
              } />
                     
                     
                     </div>
                     <div className="p-0 justify-end flex  w-1/6">
                      <RiDeleteBin6Line
                        size={16}
                        className="text-gray-400 mr-1"
                        
                      />
                     <Button className="text-gray-400 text-base bg-transparent font-normal p-0" content="delete" onClick={() =>
                setShowModal({modalName: 'removeService', data: null})
              } />
                     
                     </div>
                     
          
        </div>
        </div>
        <div className="border border-grey-300 w-full p-2 mb-3">
        <div className="flex items-center ">
        <div className="flex mb-0 w-1/2">
        <RiDeleteBin6Line
                        size={16}
                        className="text-primaryRedColor-default "
                      />
                     <span className="primary-text-color  rtl:mr-3 ">
                        Electric Repair
                      </span>
                     
                     </div>
          <div className=" flex justify-end    w-full mr-4 ">
            <span className=" bg-red-50 px-6 py-2 rounded-full">Available</span>
          </div>
          
        </div>
        <p className="p-2 text-sm text-gray-500	">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <div className="flex items-center">
        <div className="flex mb-0 w-1/2 ">
        
                     <span className="text-blue-900	text-sm primary-text-color  ">
                        Start from 50 AED
                      </span>
                     
                     </div>
                     <div className="p-0 justify-end flex w-1/2 mr-6">
                     <MdModeEdit
                        size={16}
                        className="text-gray-400 mr-1"
                      />
                     <Button className="text-gray-400 text-base bg-transparent font-normal p-0" content="edit" onClick={() =>
                setShowModal({modalName: 'registerService', data: null})
              } />
                     
                     
                     </div>
                     <div className="p-0 justify-end flex  w-1/6">
                      <RiDeleteBin6Line
                        size={16}
                        className="text-gray-400 mr-1"
                        
                      />
                     <Button className="text-gray-400 text-base bg-transparent font-normal p-0" content="delete" onClick={() =>
                setShowModal({modalName: 'removeService', data: null})
              } />
                     
                     </div>
                     
          
        </div>
        </div>
        <div className="border border-grey-300 w-full p-2 mb-3">
        <div className="flex items-center ">
        <div className="flex mb-0 w-1/2">
        <RiDeleteBin6Line
                        size={16}
                        className="text-primaryRedColor-default "
                      />
                     <span className="primary-text-color  rtl:mr-3 ">
                        Electric Repair
                      </span>
                     
                     </div>
          <div className=" flex justify-end    w-full mr-4 ">
            <span className=" bg-red-50 px-6 py-2 rounded-full">Available</span>
          </div>
          
        </div>
        <p className="p-2 text-sm text-gray-500	">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <div className="flex items-center">
        <div className="flex mb-0 w-1/2 ">
        
                     <span className="text-blue-900	text-sm primary-text-color  ">
                        Start from 50 AED
                      </span>
                     
                     </div>
                     <div className="p-0 justify-end flex w-1/2 mr-6">
                     <MdModeEdit
                        size={16}
                        className="text-gray-400 mr-1"
                      />
                     <Button className="text-gray-400 text-base bg-transparent font-normal p-0" content="edit" onClick={() =>
                setShowModal({modalName: 'registerService', data: null})
              } />
                     
                     
                     </div>
                     <div className="p-0 justify-end flex  w-1/6">
                      <RiDeleteBin6Line
                        size={16}
                        className="text-gray-400 mr-1"
                        
                      />
                     <Button className="text-gray-400 text-base bg-transparent font-normal p-0" content="delete" onClick={() =>
                setShowModal({modalName: 'removeService', data: null})
              } />
                     
                     </div>
                     
          
        </div>
        </div>
        <div className="border border-grey-300 w-full p-2 ">
        <div className="flex items-center ">
        <div className="flex mb-0 w-1/2">
        <RiDeleteBin6Line
                        size={16}
                        className="text-primaryRedColor-default "
                      />
                     <span className="primary-text-color  rtl:mr-3 ">
                        Electric Repair
                      </span>
                     
                     </div>
          <div className=" flex justify-end    w-full mr-4 ">
            <span className=" bg-red-50 px-6 py-2 rounded-full">Available</span>
          </div>
          
        </div>
        <p className="p-2 text-sm text-gray-500	">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <div className="flex items-center">
        <div className="flex mb-0 w-1/2 ">
        
                     <span className="text-blue-900	text-sm primary-text-color  ">
                        Start from 50 AED
                      </span>
                     
                     </div>
                     <div className="p-0 justify-end flex w-1/2 mr-6">
                     <MdModeEdit
                        size={16}
                        className="text-gray-400 mr-1"
                      />
                     <Button className="text-gray-400 text-base bg-transparent font-normal p-0" content="edit" onClick={() =>
                setShowModal({modalName: 'registerService', data: null})
              } />
                     
                     
                     </div>
                     <div className="p-0 justify-end flex  w-1/6">
                      <RiDeleteBin6Line
                        size={16}
                        className="text-gray-400 mr-1"
                        
                      />
                     <Button className="text-gray-400 text-base bg-transparent font-normal p-0" content="delete" onClick={() =>
                setShowModal({modalName: 'removeService', data: null})
              } />
                     
                     </div>
                     
          
        </div>
        </div>
        
      </div>

      <div className="my-10 text-center flex justify-start">
        <Button
          content="save"
          className="btn-primary"
        />
      </div>
    </div>
  )
}

export default ServicesAndParts
