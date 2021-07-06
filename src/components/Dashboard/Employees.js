import {useState,useContext} from 'react'
import StateContext from '../../context/stateContext'
import { Image, Button } from 'semantic-ui-react'
import { number } from 'yup'
const Employees = (values) => {
    
    const {setShowModal} = useContext(StateContext)
  
    
    return(
        <div>
            <div className="flex items-center w-full">
           
          <p className="flex justify-start  w-1/2">Employees</p>
          <div className="flex justify-end w-1/2">
            <Button
              content="add New Employess"
              icon="plus"
              className="bg-transparent font-normal text-primaryRedColor-default"
              onClick = {()=>setShowModal({modalName:'addEmployee',data:null})}
            />
          </div>
          
        </div>

            <ul className="m-0">
                
                <li>
                    <div className="flex w-full bg-white items-center  p-8 rounded-lg">
                        <div className="w-1/6  ">
                        <div>
                        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar size="mini" verticalAlign="middle" />
                         <span className="text-center"></span>
                         </div>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex justify-end">
                        <Button
              onClick={()=>setShowModal({modalName:"editEmployee",data:null})}
              icon="edit"
              className="bg-transparent font-normal text-gray-400 text-3xl	"
            
            />
                        </div>
                    </div>
                </li>
                
            </ul>
            <ul className="m-0">
                <li>
                    <div className="flex w-full bg-white items-center mt-4 p-8 rounded-lg">
                        <div className="w-1/6  ">
                        <div>
                        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar size="mini" verticalAlign="middle" />
                         <span className="text-center">Jacob Roberts </span>
                         </div>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex justify-end">
                        <Button
              onClick={()=>setShowModal({modalName:"editEmployee",data:null})}
              icon="edit"
              className="bg-transparent font-normal text-gray-400 text-3xl	"
            //   onClick={() =>
            //     setShowModal({modalName: 'registerBrand', data: null})
            //   }
            />
                        </div>
                    </div>
                </li>
                
            </ul>
            <ul className="m-0">
                <li>
                    <div className="flex w-full bg-white items-center mt-4 p-8 rounded-lg">
                        <div className="w-1/6  ">
                        <div>
                        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar size="mini" verticalAlign="middle" />
                         <span className="text-center">Jacob Roberts </span>
                         </div>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-black text-2xl p-0 m-0">200</p>
                            <p className="text-gray-700">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex justify-end">
                        <Button
              
              icon="edit"
              className="bg-transparent font-normal text-gray-400 text-3xl	"
              onClick={()=>setShowModal({modalName:"editEmployee",data:null})}
            
            />
                        </div>
                    </div>
                </li>
                
            </ul>
            
        </div>
        
    )
}

export default Employees