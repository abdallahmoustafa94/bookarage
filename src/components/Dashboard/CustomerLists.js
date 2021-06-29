import { Image, Button } from 'semantic-ui-react'
const CustomerLists = () => {
    return(
        <div>
            <div className="flex items-center w-full">
           
           <p className="flex justify-start  w-1/2">Employees</p>
           <div className="flex justify-end w-1/2">
             <Button
               content="add New Employess"
               icon="plus"
               className="bg-transparent font-normal text-primaryRedColor-default"
               
             />
           </div>
           
         </div>
            <ul className="m-0">
                <li>
                    <div className="flex w-full bg-white items-center  p-8 rounded-lg">
                        <div className="w-1/6  ">
                        <div>
                        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar size="mini" verticalAlign="middle" />
                         <span className="text-center">Jacob Roberts </span>
                         </div>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-primaryRedColor-default text-2xl p-0 m-0">Set Hours</p>
                            <p className="text-gray-700 text-sm">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Bought Hours</p>
                            <p className="font-medium text-gray-400 text-2xl p-0 m-0">None</p>
                            <p className="text-gray-700 text-sm">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-gray-400 text-2xl p-0 m-0">None</p>
                            <p className="text-gray-700 text-sm">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                            <p className="p-0 m-0 text-gray-400">Working Hours</p>
                            <p className="font-medium text-gray-400 text-2xl p-0 m-0">None</p>
                            <p className="text-gray-700 text-sm">Hours / Monthly</p>
                        </div>
                        <div className="w-1/6 flex justify-end">
                        <Button
              
              icon="edit"
              className="bg-transparent font-normal text-gray-400 text-3xl	"
            
            />
                        </div>
                    </div>
                </li>
                
            </ul>
          
            
            
        </div>
        
    )
}

export default CustomerLists