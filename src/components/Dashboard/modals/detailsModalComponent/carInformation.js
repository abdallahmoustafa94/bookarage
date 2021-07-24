import {Button, Image, Progress} from 'semantic-ui-react'
import {IoAlertCircle} from 'react-icons/io5'
import {formatDate} from '../../../../utils/date-format'

const CarInformationSection = ({carInfo}) => {
  return (
    <div className="mx-1 bg-white rounded-md">
      <div className="p-7">
        <p className="mb-2">Car Information</p>
        <div
          className="bg-gradient-to-r  from-yellow-400 to-primaryRedColor-default rounded-full w-12"
          style={{content: ' ', height: '5px'}}
        ></div>
      </div>

      <div className="my-7">
        <div className="m-auto mb-2 p-7" style={{width: '150px'}}>
          <Image
            src={carInfo?.requestDetails?.car?.carPhotos?.[0]}
            width="150px"
            className="object-contain m-auto rounded-md"
            alt="Car Image"
          />
        </div>

        <p className="font-semibold text-labelColor text-lg px-7">
          {carInfo?.requestDetails?.car?.carMake}{' '}
          {carInfo?.requestDetails?.car?.carModel} -{' '}
          {carInfo?.requestDetails?.car?.carYear}
        </p>

        <div className="bg-blue-50 p-3 rounded-md text-labelColor">
          <p>Maintainance Overview</p>
        </div>

        <ul className="mt-4">
          <li className="px-5 py-2">
            <div className="flex items-center justify-between mb-1 text-labelColor">
              <p className="mb-0">Car Health</p>
              <p className="mb-0">
                {carInfo?.requestDetails?.car?.overview?.carHealth || '100'}%
              </p>
            </div>
            <Progress
              percent={
                carInfo?.requestDetails?.car?.overview?.carHealth || '100'
              }
              active
              size="medium"
              progress
              indicating
            />
          </li>
          <li className="bg-gray-50 px-5 py-2 text-labelColor">
            <div className="flex items-center justify-between">
              <p className="mb-0">Regular maintainance</p>
              <p>22 March 2020</p>
            </div>
            {carInfo?.requestDetails?.car?.overview?.regularMaintenance
              ?.isOutDated && (
              <div className="flex items-center text-primaryRedColor-default mt-1">
                <IoAlertCircle size={20} className="ltr:mr-2 rtl:ml-2" />
                <p className="mb-0">Maintainance Outdated</p>
              </div>
            )}
          </li>
          <li className="px-5 py-2 text-labelColor">
            <div className="flex items-center justify-between">
              <p className="mb-0">Battery</p>
              <p className="mb-0">22 March 2020</p>
            </div>
            {carInfo?.requestDetails?.car?.overview?.battery?.isOutDated && (
              <div className="flex items-center text-primaryRedColor-default mt-1">
                <IoAlertCircle size={20} className="ltr:mr-2 rtl:ml-2" />
                <p className="mb-0">Battery Outdated</p>
              </div>
            )}
          </li>
          <li className=" bg-gray-50 px-5 py-2 text-labelColor">
            <div className="flex items-center justify-between">
              <p className="mb-0">Oil Change</p>
              <p className="mb-0">22 March 2020</p>
            </div>
            {carInfo?.requestDetails?.car?.overview?.oilChange?.isOutDated && (
              <div className="flex items-center text-primaryRedColor-default mt-1">
                <IoAlertCircle size={20} className="ltr:mr-2 rtl:ml-2" />
                <p className="mb-0">Oil Outdated</p>
              </div>
            )}
          </li>
          <li className="px-5 py-2 text-labelColor">
            <div className="flex items-center justify-between">
              <p className="mb-0">Brake Fluid</p>
              <p className="mb-0">22 March 2020</p>
            </div>
            {carInfo?.requestDetails?.car?.overview?.brakeFluid?.isOutDated && (
              <div className="flex items-center text-primaryRedColor-default mt-1">
                <IoAlertCircle size={20} className="ltr:mr-2 rtl:ml-2" />
                <p className="mb-0">Brake Fluid Outdated</p>
              </div>
            )}
          </li>

          <li className="px-5 py-2 bg-gray-50 text-labelColor">
            <div className="flex items-center justify-between">
              <p className="mb-0">Air Filter</p>
              <p className="mb-0">22 March 2020</p>
            </div>
            {carInfo?.requestDetails?.car?.overview?.airFilter?.isOutDated && (
              <div className="flex items-center text-primaryRedColor-default mt-1">
                <IoAlertCircle size={20} className="ltr:mr-2 rtl:ml-2" />
                <p className="mb-0">Air Filter Outdated</p>
              </div>
            )}
          </li>
        </ul>

        <div className="bg-blue-50 p-3 rounded-md text-labelColor">
          <p>Car Details</p>
        </div>

        <ul>
          <li className="px-5 py-2 bg-gray-50">
            <p className="mb-1 text-gray-400">Insurance Date</p>
            <p className="mb-0 text-labelColor">
              {carInfo?.requestDetails?.car?.insuranceDate
                ? formatDate(carInfo?.requestDetails?.car?.insuranceDate)
                : null}
            </p>
          </li>
          <li className="px-5 py-2">
            <p className="mb-1 text-gray-400">Car Color</p>
            <p className="mb-0 text-labelColor">
              {carInfo?.requestDetails?.car?.carColor}
            </p>
          </li>
          <li className="px-5 py-2 bg-gray-50">
            <p className="mb-1 text-gray-400">Plate Number</p>
            <p className="mb-0 text-labelColor">
              {carInfo?.requestDetails?.car?.plateNumber}
            </p>
          </li>
          <li className="px-5 py-2">
            <p className="mb-1 text-gray-400">Milage</p>
            <p className="mb-0 text-labelColor">
              {carInfo?.requestDetails?.car?.mileage} KM
            </p>
          </li>
        </ul>

        <div className="bg-blue-50 p-3 rounded-md text-labelColor">
          <p>Car Owner</p>
        </div>

        <div className="p-3">
          <div className="flex items-center">
            <Image
              src={
                carInfo.user.avatar ||
                'https://react.semantic-ui.com/images/avatar/large/matthew.png'
              }
              alt="Car Owner Image"
              className="rounded-full w-20 h-20"
            />
            <div className="ltr:ml-3 rtl:mr-3 text-labelColor">
              <p className="font-medium text-lg mb-1">{carInfo.user.nameEN}</p>
              <p className="text-lg">{carInfo.user.phoneNumber}</p>
            </div>
          </div>
        </div>

        <div className="py-3 text-center">
          <Button
            content="Send Message"
            className="bg-transparent ring-1 ring-labelColor rounded-full font-normal"
            icon="mail"
          />
          <Button
            content="Add To Group"
            className="bg-transparent ring-1 ring-labelColor rounded-full font-normal"
            icon="users"
          />
        </div>
      </div>
    </div>
  )
}

export default CarInformationSection
