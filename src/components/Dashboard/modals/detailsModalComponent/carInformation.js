import {Image} from 'semantic-ui-react'

const CarInformationSection = ({carInfo}) => {
  return (
    <div className="mx-1 bg-white p-3 rounded-md">
      <div>
        <p className="mb-2">Car Information</p>
        <div
          className="bg-gradient-to-r  from-yellow-400 to-primaryRedColor-default rounded-full w-12"
          style={{content: ' ', height: '5px'}}
        ></div>
      </div>

      <div className="my-7">
        <div className="m-auto mb-2" style={{width: '150px'}}>
          <Image
            src={carInfo.requestDetails.car.carPhotos?.[0]}
            width="150px"
            className="object-contain m-auto rounded-md"
            alt="Car Image"
          />
        </div>

        <p className="font-semibold text-labelColor text-lg">
          {carInfo.requestDetails.car?.carMake}{' '}
          {carInfo.requestDetails.car?.carModel} -{' '}
          {carInfo.requestDetails.car?.carYear}
        </p>

        <div className="bg-blue-50 p-3 rounded-md text-labelColor">
          <p>Maintainance Overview</p>
        </div>
      </div>
    </div>
  )
}

export default CarInformationSection
