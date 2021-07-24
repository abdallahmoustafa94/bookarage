import {GiAutoRepair} from 'react-icons/gi'
import {Button, Grid, Icon, Image} from 'semantic-ui-react'
import {RiArrowRightSLine, RiMailOpenLine} from 'react-icons/ri'
import {BsWrench} from 'react-icons/bs'
import {FaCarSide, FaRegTimesCircle} from 'react-icons/fa'
import {AiOutlineCheckCircle, AiOutlineUsergroupAdd} from 'react-icons/ai'
import {Fragment, useContext} from 'react'
import StateContext from '../../context/stateContext'
import {useEffect} from 'react'
import useAsync from '../../hooks/useAsync'
import {getMyAssignedRequests} from '../../services/RequestService'
import {useState} from 'react'
import {useLanguage} from '../../context/languageContext'
import moment from 'moment'
import CreateDiagnosis from '../../shared/createDiagnosisModal'

const AssignedRequests = () => {
  const [lang] = useLanguage()
  const {setShowModal} = useContext(StateContext)
  const {run, isLoading} = useAsync()
  const [assignedRequests, setAssignedRequests] = useState([])

  useEffect(() => {
    run(getMyAssignedRequests())
      .then(({data}) => {
        console.log(data)
        setAssignedRequests(data.data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])
  return (
    <div className="my-8 py-5 text-labelColor">
      <CreateDiagnosis />
      <p>{assignedRequests?.length} Total Requests</p>

      {assignedRequests?.map((rs, i) => (
        <div className="bg-white p-4  rounded-lg" key={i}>
          <div className="flex items-center">
            <GiAutoRepair className="-mt-4 text-xl" />
            <p className="flex w-1/3 justify-start">New Request</p>
            <p className="flex w-1/3 justify-center">
              ID: RES-{rs?._id?.substr(rs?._id?.length - 3)}
            </p>
            <Button
              content="Full Request Details"
              className="bg-transparent flex justify-end w-1/3 font-normal text-gray-800 "
            />
            <RiArrowRightSLine className="text-xl -ml-6" />
          </div>

          <Grid doubling columns={2}>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image
                  className="rounded-lg my-8 w-60"
                  src={
                    rs?.requestDetails?.car?.carPhotos?.[0] ||
                    'https://react.semantic-ui.com/images/wireframe/image.png'
                  }
                />
              </Grid.Column>

              <Grid.Column width={13}>
                <div className="mb-2">
                  <p className="font-semibold">
                    {rs?.requestDetails?.car?.carMake}-
                    {rs?.requestDetails?.car?.carModel}{' '}
                    {rs?.requestDetails?.car?.carYear} (
                    {rs?.requestDetails?.car?.carColor})
                  </p>
                </div>
                <div className=" flex items-start">
                  <div className="mr-20">
                    <p className="text-gray-400 text-sm">Request Services</p>
                    {rs?.requestDetails?.services?.map((rss, j) => (
                      <div className="flex" key={j}>
                        <BsWrench
                          size={17}
                          className="text-primaryRedColor-default mr-2"
                        />
                        <p>{rss?.['name' + lang.toUpperCase()]}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mr-12">
                    <p className="text-gray-400 text-sm">Plate Number</p>
                    <p>{rs?.requestDetails?.car?.plateNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      Requested Date & Time
                    </p>
                    <div className="flex">
                      <p className="">
                        {moment(rs?.requestDetails?.requestDate).format('LLLL')}
                      </p>
                      <Button
                        content="Change"
                        className="text-primaryRedColor-default font-medium bg-transparent -mt-4"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex items-start">
                  <div className="mr-20">
                    <p className="text-gray-400 text-sm">Car Recovery</p>
                    {rs?.requestDetails?.requestRecovery ? (
                      <div className="flex">
                        <FaCarSide size={17} className="mr-2" />
                        <p>Requested</p>
                        <AiOutlineCheckCircle
                          size={17}
                          className="text-green-500 ml-2"
                        />
                      </div>
                    ) : (
                      <div className="flex">
                        <FaCarSide size={17} className="mr-2" />
                        <p>Not Requested</p>
                        <FaRegTimesCircle
                          size={17}
                          className="text-primaryRedColor-default ml-2"
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Car Location</p>
                    <div className="flex">
                      <p className="w-3/4">{rs?.requestDetails?.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full ">
                  <div className="flex items-center my-4 justify-start bg-blue-50 p-2 rounded-full">
                    <Image
                      circular
                      src={
                        rs?.user?.avatar ||
                        'https://react.semantic-ui.com/images/wireframe/square-image.png'
                      }
                      className="w-16 mr-2"
                    />
                    <div className="mx-2 text-center">
                      <p className="mb-1">
                        {rs?.user?.['name' + lang.toUpperCase()]}
                      </p>
                      <p className="font-medium">{rs?.user?.phoneNumber}</p>
                    </div>
                    <div className="flex justify-center ml-7">
                      <div className="ring-1 ring-gray-400 p-2 bg-white rounded-full mr-5 cursor-pointer">
                        <RiMailOpenLine size={22} className="mx-auto" />
                      </div>
                      <div className="ring-1 ring-gray-400 p-2 bg-white rounded-full cursor-pointer">
                        <AiOutlineUsergroupAdd size={22} className="mx-auto" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end ml-40">
                    <Button
                      content={
                        rs?.requestDetails?.diagnosis
                          ? 'Edit Diagnosis'
                          : 'Create Diagnosis'
                      }
                      className=" bg-primaryRedColor-default text-white py-4 rounded px-8 text-md"
                      onClick={() =>
                        setShowModal({
                          modalName: rs?.requestDetails?.diagnosis
                            ? 'editDiagnosis'
                            : 'createDiagnosis',
                          data: rs,
                        })
                      }
                    />
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      ))}
    </div>
  )
}

export default AssignedRequests
