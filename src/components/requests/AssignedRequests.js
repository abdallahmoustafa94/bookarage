import {GiAutoRepair} from 'react-icons/gi'
import {Button, Grid, Icon, Image} from 'semantic-ui-react'
import {RiArrowRightSLine, RiMailOpenLine} from 'react-icons/ri'
import {BsWrench} from 'react-icons/bs'
import {FaCarSide, FaUserFriends} from 'react-icons/fa'
import {AiOutlineCheckCircle, AiOutlineUsergroupAdd} from 'react-icons/ai'
import {useContext} from 'react'
import StateContext from '../../context/stateContext'
import {useEffect} from 'react'
import useAsync from '../../hooks/useAsync'

const AssignedRequests = () => {
  const {setShowModal} = useContext(StateContext)
  const {run, isLoading} = useAsync()

  useEffect(() => {}, [])
  return (
    <div className="my-8 py-5 text-labelColor">
      <p>14 Total Requests</p>
      <div className="bg-white lg:p-4  rounded-lg">
        <div className="flex items-center">
          <GiAutoRepair className="-mt-4 lg:text-xl" />
          <p className="flex w-1/3 justify-start">New Request</p>
          <p className="flex w-1/3 justify-center">ID:351</p>
          <Button
            content="Full Request Details"
            className="bg-transparent flex justify-end w-1/3 font-normal text-gray-800 "
          />
          <RiArrowRightSLine className="text-xl lg:-ml-6" />
        </div>

        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image
                className="rounded-lg my-8 w-60"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              />
            </Grid.Column>

            <Grid.Column width={13}>
              <div className="mb-2">
                <p className="font-semibold">Honda-civic 2005 (black)</p>
              </div>
              <div className=" flex items-start">
                <div className="lg:mr-20">
                  <p className="text-gray-400 text-sm">Request Services</p>
                  <div className="flex">
                    <BsWrench
                      size={17}
                      className="text-primaryRedColor-default mr-2"
                    />
                    <p>Electric Repair</p>
                  </div>
                </div>
                <div className="mr-12">
                  <p className="text-gray-400 text-sm">Plate Number</p>
                  <p>555 099</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Requested Date & Time</p>
                  <div className="flex">
                    <p className="">Monday, 15 Oct, 2020 - 2020 </p>
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
                  <div className="flex">
                    <FaCarSide size={17} className="mr-2" />
                    <p>Requested</p>
                    <AiOutlineCheckCircle
                      size={17}
                      className="text-green-500 ml-2"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Car Location</p>
                  <div className="flex">
                    <p className="">Street 17C, Al Barshaal Barsha 2, Dubai </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full ">
                <div className="flex items-center my-4 justify-start bg-blue-50 p-2 rounded-full">
                  <Image
                    circular
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    className="w-16 mr-2"
                  />
                  <div className="mx-2 text-center">
                    <p className="mb-1">Alex Lawson</p>
                    <p className="font-medium">(585) 5519-96</p>
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
                    content="Accept & Send Recovery"
                    className=" bg-primaryRedColor-default text-white py-4 rounded px-8 text-md"
                    onClick={() =>
                      setShowModal({modalName: 'sendRecovery', data: null})
                    }
                  />
                  <Button
                    content="Accept"
                    className="py-4 px-6 ml-4 bg-transparent text-primaryRedColor-default ring-1 ring-primaryRedColor-default font-medium text- ring-solid"
                  />
                  <Button
                    content="Reject"
                    className=" py-4 px-6 ml-4 bg-transparent border-solid border border-gray-400 text-gray-400 font-medium"
                  />
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}

export default AssignedRequests
