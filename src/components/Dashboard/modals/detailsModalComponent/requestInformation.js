import {FaCarSide, FaCheckCircle, FaTimesCircle} from 'react-icons/fa'
import {ImWrench} from 'react-icons/im'
import {IoCalendar, IoCopyOutline, IoShareSocial} from 'react-icons/io5'
import {FaTruckLoading} from 'react-icons/fa'
import {RiMapPinFill} from 'react-icons/ri'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Button, Form, Icon, Step} from 'semantic-ui-react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {useToasts} from 'react-toast-notifications'
import {Fragment, useState} from 'react'
import {useLanguage} from '../../../../context/languageContext'
import moment from 'moment'
import useMediaQuery from '../../../../hooks/use-media-query'
import {FaHandHoldingUsd} from 'react-icons/fa'
import '../../../../assets/css/step.scss'

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
            <div className="flex items-center mb-2" key={i}>
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
              {moment(requestInfo?.requestDetails?.requestDate).format('LLL')} ({' '}
              {moment(requestInfo?.requestDetails?.requestDate).format('dddd')}{' '}
              )
            </p>
          </div>
        </div>

        <div className="my-7">
          <p className="mb-2 text-gray-400 font-light">Car Recovery</p>
          {requestInfo?.requestDetails?.requestRecovery ? (
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
                {requestInfo?.requestDetails?.location}
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
          {[2].includes(requestInfo?.requestDetails?.requestStatus?.id) && (
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
          {[7].includes(requestInfo?.requestDetails?.requestStatus?.id) && (
            <Fragment>
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

              <div className="relative flex justify-end mt-2">
                <p className="mb-0 text-sm">
                  Finished date: 27 Nov 2020, 03:40 PM
                </p>
              </div>
            </Fragment>
          )}
        </div>

        {[1].includes(requestInfo?.requestDetails?.requestStatus?.id) && (
          <div className="my-7">
            <div className="bg-yellow-50 rounded-md flex justify-center items-center p-3">
              <FaCarSide
                size={22}
                className="text-yellow-600 ltr:mr-3 rtl:ml-3"
              />
              <p className="text-yellow-600">
                Waiting Confimation from provider
              </p>
            </div>
          </div>
        )}

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

        {requestInfo.requestDetails.requestStatus.id >= 4 && (
          <Fragment>
            <Step.Group size="mini" stackable="tablet" widths="4">
              <Step
                completed={
                  requestInfo.requestDetails.requestStatus.id > 4 ? true : false
                }
                active={
                  requestInfo.requestDetails.requestStatus.id === 4
                    ? true
                    : false
                }
                style={{
                  '--stepColor':
                    requestInfo.requestDetails.requestStatus.id === 4
                      ? '#f2421b'
                      : requestInfo.requestDetails.requestStatus.id > 4
                      ? '#244066'
                      : 'white',
                }}
              >
                <Icon
                  name="car"
                  className={
                    requestInfo.requestDetails.requestStatus.id >= 4
                      ? 'text-gray-100'
                      : ''
                  }
                />
                <Step.Content>
                  <Step.Title
                    className={
                      requestInfo.requestDetails.requestStatus.id >= 4
                        ? 'text-gray-100 font-medium'
                        : ''
                    }
                  >
                    Diagnose Car
                  </Step.Title>
                </Step.Content>
              </Step>

              <Step
                completed={
                  requestInfo.requestDetails.requestStatus.id > 7 ? true : false
                }
                active={
                  requestInfo.requestDetails.requestStatus.id === 7
                    ? true
                    : false
                }
                style={{
                  '--stepColor':
                    requestInfo.requestDetails.requestStatus.id === 7
                      ? '#f2421b'
                      : requestInfo.requestDetails.requestStatus.id > 7
                      ? '#244066'
                      : 'white',
                }}
              >
                <Icon
                  name="settings"
                  className={
                    requestInfo.requestDetails.requestStatus.id >= 7
                      ? 'text-gray-100'
                      : 'text-labelColor'
                  }
                />
                <Step.Content>
                  <Step.Title
                    className={
                      requestInfo.requestDetails.requestStatus.id === 7
                        ? 'text-white font-medium'
                        : 'text-labelColor font-medium'
                    }
                  >
                    Working in Progress
                  </Step.Title>
                </Step.Content>
              </Step>

              <Step
                completed={
                  requestInfo.requestDetails.requestStatus.id > 8 ? true : false
                }
                active={
                  requestInfo.requestDetails.requestStatus.id === 8
                    ? true
                    : false
                }
                style={{
                  '--stepColor':
                    requestInfo.requestDetails.requestStatus.id === 8
                      ? '#f2421b'
                      : requestInfo.requestDetails.requestStatus.id > 8
                      ? '#244066'
                      : 'white',
                }}
              >
                <Icon
                  name="checkmark"
                  className={
                    requestInfo.requestDetails.requestStatus.id >= 8
                      ? 'text-white'
                      : 'text-labelColor'
                  }
                />
                <Step.Content>
                  <Step.Title
                    className={
                      requestInfo.requestDetails.requestStatus.id >= 8
                        ? 'text-white font-medium'
                        : 'text-labelColor font-medium'
                    }
                  >
                    Car Ready
                  </Step.Title>
                </Step.Content>
              </Step>

              <Step
                completed={
                  requestInfo.requestDetails.requestStatus.id > 9 ? true : false
                }
                active={
                  requestInfo.requestDetails.requestStatus.id === 9
                    ? true
                    : false
                }
                style={{
                  '--stepColor':
                    requestInfo.requestDetails.requestStatus.id === 9
                      ? '#f2421b'
                      : requestInfo.requestDetails.requestStatus.id > 9
                      ? '#244066'
                      : 'white',
                }}
              >
                {requestInfo.requestDetails.requestStatus.id <= 9 ? (
                  <FaHandHoldingUsd
                    size={40}
                    className="text-labelColor mr-5"
                  />
                ) : (
                  <Icon
                    name="car"
                    className={
                      requestInfo.requestDetails.requestStatus.id >= 9
                        ? 'text-white'
                        : 'text-labelColor'
                    }
                  />
                )}
                <Step.Content>
                  <Step.Title
                    className={
                      requestInfo.requestDetails.requestStatus.id >= 9
                        ? 'text-white'
                        : 'text-labelColor font-medium'
                    }
                  >
                    Owner received
                  </Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>

            <div className="mt-5 flex items-center">
              <BsInfoCircleFill size={20} className="text-gray-400 mr-3" />
              <p className="text-labelColor">
                Technician is already working on this car
              </p>
            </div>
          </Fragment>
        )}
      </Form>
    </div>
  )
}

export default RequestInformationSection
