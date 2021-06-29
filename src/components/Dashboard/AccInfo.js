import {Button} from 'semantic-ui-react'
const AccInfo = (props) => {
    return(
        <div className="flex mt-8">
        <div className="justify-start w-3/4">
          <p className="text-gray-300">{props.label}</p>
          <p className="text-gray-700 font-medium -mt-2">{props.info}</p>
        </div>
        <div className=" w-1/4 flex justify-end ">
          <Button content="Edit" className="bg-transparent text-blue-700 font-semibold  py-2 px-4 border border-gray-500  "/>
        </div>
      </div>
    )
}

export default AccInfo