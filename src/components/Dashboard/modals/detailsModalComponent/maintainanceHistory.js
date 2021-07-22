import moment from 'moment'
import {ImPhone, ImWrench} from 'react-icons/im'
import {IoCalendar, IoMail} from 'react-icons/io5'
import {Image} from 'semantic-ui-react'
import SPimage from '../../../../assets/images/sample-logo.png'

const MaintainanceHistorySection = ({carDiganosisHistory}) => {
  return (
    <div className="mx-1 bg-white p-7 rounded-md text-lg mt-5">
      <div>
        <p className="mb-2">Maintainance History</p>
        <div
          className="bg-gradient-to-r  from-yellow-400 to-primaryRedColor-default rounded-full w-12"
          style={{content: ' ', height: '5px'}}
        ></div>
      </div>

      <div>
        {carDiganosisHistory?.map((h, i) => (
          <div className="ring-1 ring-gray-200 rounded-lg p-5 mt-6" key={i}>
            <div className="flex justify-between">
              <div className="w-1/2">
                <p className="text-labelColor font-light">
                  Maintainance Details
                </p>
                <div className="flex items-center mb-4 px-2">
                  <IoCalendar size={20} className="ltr:mr-3 rtl:ml-3" />
                  <p>
                    {moment(h?.data?.requestDetails?.requestDate).format('LL')}
                  </p>
                </div>
                <div className="flex items-center px-2">
                  <ImWrench size={20} className="ltr:mr-3 rtl:ml-3" />
                  <div>
                    {h?.data?.requestDetails?.services?.map((s, i) => (
                      <p key={i} className="mb-1">
                        {s?.nameEN}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <p className="text-labelColor font-light">Service Provider</p>
                <div className="flex items-center mb-4 px-2">
                  <Image
                    src={h?.data?.shop?.logo || SPimage}
                    className="ltr:mr-3 rtl:ml-3 w-16 h-16 ring-1 ring-gray-100 rounded-md"
                  />
                  <div>
                    <p className="mb-2">{h?.data?.shop?.nameEN}</p>
                    <div className="flex items-center">
                      <ImPhone
                        size={22}
                        className="text-labelColor mx-3 cursor-pointer"
                      />
                      <IoMail
                        size={22}
                        className="text-labelColor cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-labelColor font-light mb-2">
                Maintainance Details
              </p>
              <div className="bg-gray-50 rounded-md p-3">
                <p className="text-labelColor text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                  expedita quisquam impedit laborum, voluptate rem! Adipisci
                  eligendi exercitationem itaque, dicta, ab voluptatum
                  voluptates quas dolorum vel quidem omnis voluptatibus
                  sapiente.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MaintainanceHistorySection
