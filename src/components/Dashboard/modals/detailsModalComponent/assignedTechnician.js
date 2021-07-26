import {Image} from 'semantic-ui-react'

const AssignedTechnicianSection = ({assignedTechData}) => {
  console.log(assignedTechData)
  return (
    <div className="mx-1 bg-white p-7 rounded-md text-lg mt-5">
      <div>
        <p className="mb-2">Assigned Mechanic</p>
        <div
          className="bg-gradient-to-r  from-yellow-400 to-primaryRedColor-default rounded-full w-12"
          style={{content: ' ', height: '5px'}}
        ></div>
      </div>
      {assignedTechData && (
        <div className="my-5 flex items-center">
          <Image
            avatar
            src={
              assignedTechData?.avatar ||
              'https://react.semantic-ui.com/images/avatar/large/matthew.png'
            }
            className="w-16 h-16"
          />
          <div className="ml-3">
            <p>{assignedTechData?.nameEN}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AssignedTechnicianSection
