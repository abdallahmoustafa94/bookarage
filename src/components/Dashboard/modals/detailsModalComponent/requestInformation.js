import {
  FaAngleRight,
  FaCarSide,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa'
import {ImWrench} from 'react-icons/im'
import {
  IoCalendar,
  IoCopyOutline,
  IoShareSocial,
  IoNavigate,
} from 'react-icons/io5'
import {FaTruckLoading} from 'react-icons/fa'
import {RiMapPinFill} from 'react-icons/ri'

import {Button} from 'semantic-ui-react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {useToasts} from 'react-toast-notifications'
import {useState} from 'react'
import {useLanguage} from '../../../../context/languageContext'
import moment from 'moment'
import useMediaQuery from '../../../../hooks/use-media-query'

const RequestInformationSection = ({requestInfo}) => {
  const [copied, setCopied] = useState(false)
  const [lang] = useLanguage()
  const {addToast} = useToasts()
  const isSmall = useMediaQuery('(max-width: 992px)')

  const handleOnCopy = () => {
    setCopied(true)
    addToast('Text Copied!', {appearance: 'success'})
  }
  return (
    <div className="mx-1 bg-white p-3 rounded-md text-lg">
      <div>
        <p className="mb-2">Request Information</p>
        <div
          className="bg-gradient-to-r  from-yellow-400 to-primaryRedColor-default rounded-full w-12"
          style={{content: ' ', height: '5px'}}
        ></div>
      </div>
      <div className="my-7">
        <p className="mb-2 text-gray-400 font-light">Required Services</p>
        {requestInfo.requestDetails.services?.map((service, i) => (
          <div className="flex items-center">
            <div className="bg-primaryRedColor-default p-1 rounded-md ltr:mr-3 rtl:ml-3">
              <ImWrench size={15} className="text-white" />
            </div>
            <p>{service['name' + lang.toUpperCase()]}</p>
          </div>
        ))}
      </div>

      <div className="my-7">
        <p className="mb-2 text-gray-400 font-light">Requested Date & Time</p>
        <div className="flex items-center">
          <IoCalendar size={21} className="ltr:mr-3 rtl:ml-3" />
          <p className="m-0">
            {moment(requestInfo.requestDetails.requestDate).format('LLL')}
          </p>
        </div>
      </div>

      <div className="my-7">
        <p className="mb-2 text-gray-400 font-light">Car Recovery</p>
        {requestInfo.requestDetails.requestRecovery ? (
          <div className="flex items-center">
            <FaTruckLoading size={21} className="ltr:mr-3 rtl:ml-3" />
            <p className="m-0">Requested</p>
            <FaCheckCircle
              size={22}
              className="ltr:ml-3 rtl:mr-3 text-green-400"
            />
          </div>
        ) : (
          <div className="flex items-center">
            <FaTruckLoading size={21} className="ltr:mr-3 rtl:ml-3" />
            <p className="m-0">Not Requested</p>
            <FaTimesCircle
              size={22}
              className="ltr:ml-3 rtl:mr-3 text-red-400"
            />
          </div>
        )}
      </div>

      <div className="my-7">
        <p className="mb-2 text-gray-400 font-light">Car Location</p>
        <div
          className={`flex ${
            isSmall ? 'flex-col justify-start' : 'flex-row justify-between'
          } items-center`}
        >
          <div className={`flex items-center ${isSmall ? 'mb-5' : 'w-1/2'}`}>
            <RiMapPinFill size={21} className="ltr:mr-3 rtl:ml-3" />
            <p
              className="m-0"
              style={{
                width: isSmall ? '100%' : '100%',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: isSmall ? 'pre-wrap' : 'nowrap',
              }}
            >
              {requestInfo.requestDetails.location}
            </p>
          </div>
          <div
            className={`flex items-center ${
              isSmall ? 'justify-start w-full' : 'w-1/2 justify-end'
            }  `}
          >
            <Button
              icon="location arrow"
              content="Navigate"
              className="rounded-full bg-red-100 text-red-500 font-normal ltr:mr-4 rtl:ml-4"
            />
            <CopyToClipboard text="Here is text" onCopy={() => handleOnCopy()}>
              <div className="bg-red-100 p-2 rounded-full cursor-pointer">
                <IoCopyOutline size={22} className="text-red-500" />
              </div>
            </CopyToClipboard>

            <div className="bg-red-100 p-2 rounded-full cursor-pointer ltr:ml-4 rtl:mr-4">
              <IoShareSocial size={22} className="text-red-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-7 flex items-center justify-between">
        <Button
          content="Mark as Car Arrived"
          icon="check"
          className="bg-transparent ring-2 ring-mainBgColor-hover text-mainBgColor-hover font-normal"
        />
        <Button
          content="Cancel"
          className="bg-transparent font-normal text-gray-400"
        />
      </div>

      <div className="my-7">
        <div className="bg-blue-50 rounded-md flex justify-center items-center p-3">
          <FaCarSide
            size={22}
            className="text-mainBgColor-hover ltr:mr-3 rtl:ml-3"
          />
          <p className="text-mainBgColor-hover">
            Waiting the car owner to deliver the car
          </p>
        </div>
      </div>
    </div>
  )
}

export default RequestInformationSection
