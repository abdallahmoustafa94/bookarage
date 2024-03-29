import {useState, useContext} from 'react'
import {Button, Image, Grid} from 'semantic-ui-react'
import {GiAutoRepair} from 'react-icons/gi'
import {RiArrowRightSLine} from 'react-icons/ri'
import {BsWrench} from 'react-icons/bs'
import {FaCarSide} from 'react-icons/fa'
import StateContext from '../../context/stateContext'
import routes from '../../routes'
import {useHistory} from 'react-router-dom'

const Accepted = () => {
  const history = useHistory()

  const {setShowModal} = useContext(StateContext)

  return (
    <div className="my-8 py-5">
      <p className="xs:px-4 md:px-4">14 Total Requests</p>
      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center">
          <GiAutoRepair className="lg:-mt-4 lg:text-xl" />
          <p className="flex w-1/3 justify-start xs:text-sm">
            Request Accepted
          </p>
          <p className="flex w-1/3 justify-center xs:text-sm">ID:351</p>
          <Button
            content="Full Request Details"
            className="bg-transparent flex justify-end w-1/3 font-normal text-gray-800 xs:text-sm"
            onClick={() => history.push(routes.requestsDetails)}
          />
          <RiArrowRightSLine className="lg:text-xl lg:-ml-6" />
        </div>

        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image
                className="rounded-lg my-8"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="medium"
              />
            </Grid.Column>

            <Grid.Column width={13}>
              <div className="mb-2">
                <p className="font-semibold">Honda-civic 2005 (black)</p>
              </div>
              <div className="lg:flex lg:items-start">
                <div className="lg:mr-20">
                  <p className="text-gray-500 text-sm">Request Services</p>
                  <div className="flex">
                    <BsWrench
                      size={17}
                      className="text-primaryRedColor-default mr-2"
                    />
                    <p>Electric Repair</p>
                  </div>
                </div>
                <div className="lg:mr-12">
                  <p className="text-gray-500 text-sm">Plate Number</p>
                  <p>555 099</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Requested Date & Time</p>
                  <div className="flex">
                    <p className="">Monday, 15 Oct, 2020 - 2020 </p>
                    <Button
                      content="Change"
                      className="text-primaryRedColor-default font-medium  bg-transparent -mt-4 "
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start">
                <div className="lg:mr-20">
                  <p className="text-gray-500 text-sm">Car Recovery</p>
                  <div className="flex ">
                    <FaCarSide size={17} className="mr-2" />
                    <p>Requested</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Car Location</p>
                  <div>
                    <p>Street 17C, Al Barshaal Barsha 2, Dubai </p>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:items-center w-full">
                <div className="flex items-center my-4 lg:w-1/3 justify-start bg-gray-100 rounded-full p-4">
                  <Image
                    circular
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    size="mini"
                  />
                  <p className="ml-2">
                    Alex Lawson <br />
                    (585) 5519-96
                  </p>
                  <Button
                    icon="envelope open outline"
                    className=" bg-transparent lg:text-xl"
                  />
                  <Button
                    icon="users"
                    className=" rounded  bg-transparent lg:text-xl"
                  />
                </div>
                <div className="flex xs:flex-col lg:ml-40 justify-center ">
                  <Button
                    icon="truck"
                    content="Send Recovery"
                    className="bg-primaryRedColor-default text-white py-4 rounded  px-8 text-sm xs:block "
                    onClick={() =>
                      setShowModal({modalName: 'sendRecovery', data: null})
                    }
                  />
                  <Button
                    icon="checkmark"
                    content="Mark Car Arrived"
                    className="lg:py-2 lg:px-2 lg:ml-4 bg-transparent border-solid border border-mainBgColor-default font-medium text-mainBgColor-default xs:my-2 lg:ml-4"
                  />
                  <Button
                    content="Reject"
                    className="lg:py-2 lg:px-2 ml-4 bg-transparent border-gray-300 text-gray-400 border-2 xs:my-2"
                  />
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <div className="bg-white p-4  rounded-lg my-8">
        <div className="flex items-center">
          <GiAutoRepair className="lg:-mt-4 lg:text-xl" />
          <p className="flex w-1/3 justify-start">Request Accepted</p>
          <p className="flex w-1/3 justify-center">ID:351</p>
          <Button
            content="Full Request Details"
            className="bg-transparent flex justify-end w-1/3 font-normal xs:text-sm text-labelColor "
            onClick={() => history.push(routes.requestsDetails)}
          />
          <RiArrowRightSLine className="lg:text-xl lg:-ml-6" />
        </div>

        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={3} className="w-full">
              <Image
                className="rounded-lg my-8 "
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="medium"
              />
            </Grid.Column>

            <Grid.Column width={13}>
              <div className="mb-2">
                <p className="font-semibold">Honda-civic 2005 (black)</p>
              </div>
              <div className=" lg:flex items-start">
                <div className="lg:mr-20">
                  <p className="text-gray-500 text-sm">Request Services</p>
                  <div className="flex">
                    <BsWrench
                      size={17}
                      className="text-primaryRedColor-default mr-2"
                    />
                    <p>Electric Repair</p>
                  </div>
                </div>
                <div className="lg:mr-12">
                  <p className="text-gray-500 text-sm">Plate Number</p>
                  <p>555 099</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Requested Date & Time</p>
                  <div className="flex">
                    <p className="">Monday, 15 Oct, 2020 - 2020 </p>
                    <Button
                      content="Change"
                      className="text-primaryRedColor-default font-medium bg-transparent lg:-mt-4 "
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start">
                <div>
                  <p className="text-gray-500 text-sm">Car Location</p>
                  <div>
                    <p className="">Street 17C, Al Barshaal Barsha 2, Dubai </p>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-center w-full">
                <div className="flex items-center my-4 justify-start bg-gray-100 rounded-full p-4">
                  <Image
                    circular
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    size="mini"
                  />
                  <p className="ml-2">
                    Alex Lawson <br />
                    (585) 5519-96
                  </p>
                  <Button
                    icon="envelope open outline"
                    className=" bg-transparent lg:text-xl"
                  />
                  <Button
                    icon="users"
                    className=" rounded  bg-transparent lg:text-xl"
                  />
                </div>
                <div className="flex lg:justify-end xs:justify-center lg:ml-60">
                  <Button
                    icon="checkmark"
                    content="Mark Car Arrived"
                    className="lg:py-4 lg:px-8 ml-4 bg-transparent border-solid border border-mainBgColor-default font-medium text-mainBgColor-default"
                  />
                  <Button
                    content="Reject"
                    className="lg:py-2 lg:px-8 ml-4 bg-transparent border-gray-300 text-gray-400 border-2"
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

export default Accepted
