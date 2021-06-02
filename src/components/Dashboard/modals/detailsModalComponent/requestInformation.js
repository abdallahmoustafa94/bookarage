import {FaCarSide, FaCheckCircle, FaTimesCircle} from 'react-icons/fa'
import {ImWrench} from 'react-icons/im'
import {IoCalendar, IoCopyOutline, IoShareSocial} from 'react-icons/io5'
import {FaTruckLoading} from 'react-icons/fa'
import {RiMapPinFill} from 'react-icons/ri'

import {Button, Form} from 'semantic-ui-react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {useToasts} from 'react-toast-notifications'
import {Fragment, useState} from 'react'
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
    <div className="mx-1 bg-white p-7 rounded-md text-lg">
      <div>
        <p className="mb-2">Request Information</p>
        <div
          className="bg-gradient-to-r  from-yellow-400 to-primaryRedColor-default rounded-full w-12"
          style={{content: ' ', height: '5px'}}
        ></div>
      </div>
      <Form>
        <div className="my-7">
          <p className="mb-2 text-gray-400 font-light">Required Services</p>
          {requestInfo.requestDetails.services?.map((service, i) => (
            <div className="flex items-center" key={i}>
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
                size={18}
                className="ltr:ml-2 rtl:mr-2 text-green-400"
              />
            </div>
          ) : (
            <div className="flex items-center">
              <FaTruckLoading size={21} className="ltr:mr-3 rtl:ml-3" />
              <p className="m-0">Not Requested</p>
              <FaTimesCircle
                size={18}
                className="ltr:ml-2 rtl:mr-2 text-red-400"
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
              <CopyToClipboard
                text="Here is text"
                onCopy={() => handleOnCopy()}
              >
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

        <div className="mt-7 flex items-center justify-between">
          {[2].includes(requestInfo.requestDetails.requestStatus.id) && (
            <Fragment>
              <Button
                content="Mark as Car Arrived"
                icon="check"
                className="bg-transparent ring-2 ring-mainBgColor-hover text-mainBgColor-hover font-normal"
              />
              <Button
                content="Cancel"
                className="bg-transparent font-normal text-gray-400"
              />
            </Fragment>
          )}
          <Button
            content="View And Edit Diagnosis"
            className="bg-transparent ring-2 ring-primaryRedColor-default text-primaryRedColor-default font-normal"
          />

          <div>
            <div className="p-3 border-dashed rounded-2xl border-2 border-gray-300">
              <p className="mb-1 text-labelColor">Estimated time</p>
              <p className="text-center text-primaryRedColor-default font-medium text-xl">
                3 Days
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-end mt-2">
          <p className="mb-0 text-sm">Finished date: 27 Nov 2020, 03:40 PM</p>
        </div>

        {[2].includes(requestInfo.requestDetails.requestStatus.id) && (
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
        )}
      </Form>
    </div>
  )
}

export default RequestInformationSection
