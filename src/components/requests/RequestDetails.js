import {useHistory} from 'react-router'
import routes from '../../routes'
import {Button, Grid, Image, Progress} from 'semantic-ui-react'
import {RiArrowRightSLine} from 'react-icons/ri'
import {BsWrench} from 'react-icons/bs'
import {FaCarSide} from 'react-icons/fa'
import {AiOutlineCheckCircle, AiOutlineCopy} from 'react-icons/ai'
import {FaLocationArrow, FaShareAlt} from 'react-icons/fa'

const RequestDetails = () => {
  const history = useHistory()
  return (
    <div className="lg:px-12">
      <div className="flex w-full bg-white items-center xs:px-1 md:px-2 lg:px-6 py-2 xs:mx-auto md:mx-auto">
        <div className="flex justify-start w-1/2 items-center ">
          <Button
            content="Requests"
            className="bg-transparent md:text-sm xs:text-sm font-normal text-gray-800 "
            onClick={() => history.push(routes.requests)}
          />
          <RiArrowRightSLine className="lg:text-xl lg:-ml-6" />
          <p>New Request</p>
        </div>
        <div className="flex justify-end w-1/2">
          <p>Request ID:351</p>
        </div>
      </div>
      <div className="my-4 px-4 w-full">
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column width={10}>
              <div className="bg-white py-6 xs:px-4 md:px-4 lg:px-12">
                <p>Request Information</p>
                <div>
                  <p className="text-gray-500 mb-2">Request Services</p>
                  <div className="flex">
                    <BsWrench
                      size={17}
                      className="text-primaryRedColor-default mr-2"
                    />
                    <p className="text-gray-900">Electric Repair</p>
                  </div>
                </div>
                <p className="text-gray-500 my-4 mb-2">Requested Date & Time</p>
                <div className="flex items-center">
                  <p className="text-gray-900">Monday, 15 Oct, 2020 - 2020 </p>
                  <Button
                    content="Change"
                    className="text-primaryRedColor-default font-medium  bg-transparent -mt-4"
                  />
                </div>
                <div className="lg:mr-20">
                  <p className="text-gray-500 mb-2 ">Car Recovery</p>
                  <div className="flex ">
                    <FaCarSide size={17} className="mr-2" />
                    <p>Requested</p>
                    <AiOutlineCheckCircle
                      size={17}
                      className="text-white bg-green-400 ml-2 "
                    />
                  </div>
                </div>
                <div className="lg:flex w-full items-end">
                  <div className="lg:flex lg:justify-start lg:w-1/2">
                    <div>
                      <p className="text-gray-500 mb-2">Car Location</p>
                      <p className="">
                        Street 17C, Al Barshaal Barsha 2, Dubai{' '}
                      </p>
                    </div>
                  </div>
                  <div className="flex xs:justify-center xs:my-4 md:my-4 lg:justify-end lg:w-1/2">
                    <div className="flex items-center">
                      <div className="flex items-center bg-red-100 rounded-lg p-2">
                        <FaLocationArrow
                          size={15}
                          className="text-primaryRedColor-default mr-2"
                        />
                        <p className="text-primaryRedColor-default">Navigate</p>
                      </div>
                      <div className="bg-red-100 rounded-full ml-4  p-2">
                        <AiOutlineCopy
                          size={25}
                          className="text-primaryRedColor-default"
                        />
                      </div>
                      <div className="bg-red-100 rounded-full ml-4  p-2">
                        <FaShareAlt
                          size={25}
                          className="text-primaryRedColor-default"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:my-12">
                  <Button
                    content="Accept"
                    className="lg:py-4 lg:px-6 lg:ml-4 bg-primaryRedColor-default text-white font-medium xs:my-2"
                  />
                  <Button
                    content="Reject"
                    className=" lg:py-4 lg:px-6 lg:ml-4 bg-transparent border-solid border border-gray-300 text-gray-300 font-medium xs:my-2"
                  />
                </div>
              </div>
              <div className="bg-white py-6 px-12 my-6">
                <p>Maintenence History</p>
                <div className="lg:flex w-full">
                  <div className="lg:flex lg:justify-start lg:w-1/2">
                    <div>
                      <p className="text-gray-500">Maintenece Details</p>
                      <p>14 Oct 2020</p>
                      <p>Mechanical Repair</p>
                    </div>
                  </div>
                  <div className="lg:flex lg:justify-end lg:w-1/2">
                    <div>
                      <p className="text-gray-500">Service Provider</p>
                      <div className="flex w-full items-center rounded-full bg-gray-100 p-2">
                        <Image
                          src="https://react.semantic-ui.com/images/wireframe/image.png"
                          className="rounded-full mr-2 w-12 h-12"
                        />
                        <div>
                          <p className="mb-1">Auto Repair</p>
                          <p>Provider Details</p>
                        </div>
                        <Button
                          icon="envelope open outline"
                          className=" bg-transparent lg:text-xl"
                        />
                        <Button
                          icon="users"
                          className=" rounded  bg-transparent lg:text-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 xs:my-4">Maintenece Details</p>
                  <p className="bg-gray-100 rounded xs:text-sm p-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column className="ml-2" width={5}>
              <div className="bg-white p-4">
                <p>Car Information</p>

                <Image
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                  size="medium"
                />
                <p className="my-2 font-semibold">Honda-Civic 2005</p>
              </div>
              <p className="my-4">Maintenece Overview</p>
              <div className="bg-white p-4">
                <p>Car health</p>
                <Progress progress="value" value={65} warning />
                <div className="lg:flex w-full lg:items-start">
                  <p className="lg:w-1/2 lg:flex md:mb-1  lg:justify-start">
                    Regular Maintenece
                  </p>
                  <p className="lg:w-1/2 lg:flex font-semibold lg:justify-end">
                    22 March 2020
                  </p>
                </div>
                <div className="lg:flex w-full items-start md:my-2">
                  <p className="lg:w-1/2 lg:flex  lg:justify-start md:mb-1">
                    Battery
                  </p>
                  <p className="lg:w-1/2 lg:flex font-semibold lg:justify-end">
                    07 September 2020
                  </p>
                </div>
                <div className="lg:flex w-full items-start md:my-2">
                  <p className="lg:w-1/2 lg:flex  lg:justify-start md:mb-1">
                    Oil Change
                  </p>
                  <p className="lg:w-1/2 lg:flex font-semibold lg:justify-end">
                    29 April 2020
                  </p>
                </div>
                <div className="lg:flex w-full items-start md:my-2">
                  <p className="lg:w-1/2 lg:flex  lg:justify-start md:mb-1">
                    Brake Fluid
                  </p>
                  <p className="lg:w-1/2 lg:flex font-semibold lg:justify-end">
                    17 June 2020
                  </p>
                </div>
                <div className="lg:flex w-full items-start text-lg md:my-2">
                  <p className="lg:w-1/2 lg:flex  lg:justify-start md:mb-1">
                    Air Filter
                  </p>
                  <p className="lg:w-1/2 lg:flex font-semibold lg:justify-end">
                    06 November 2018
                  </p>
                </div>
              </div>
              <p className="my-4">Car Details</p>
              <div className="bg-white w-full p-6">
                <p className=" text-gray-500 mb-2">Insurance Date</p>
                <p>14 January 2022</p>
                <p className=" text-gray-500 mb-2">Car Color</p>
                <p>Black</p>
                <p className=" text-gray-500 mb-2">Plate Number</p>
                <p>555 099</p>
                <p className=" text-gray-500 mb-2">Mileage</p>
                <p>120,560 KM</p>
              </div>
              <p className="my-4">Car Owner</p>
              <div className="bg-white p-6">
                <div className="flex w-full items-center">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    className="rounded-full mr-2 w-12 h-12"
                  />
                  <div>
                    <p className="mb-1">Alex Lawson</p>
                    <p>(585)5519-96</p>
                  </div>
                </div>
                <div className="flex justify-center my-4">
                  <Button
                    content="Send Message"
                    className="bg-gray-100 bg-transparent text-gray-300 py-4 px-6 rounded-full"
                  />
                  <Button
                    content="Add To Group"
                    className="bg-gray-100 text-gray-300 p-4 px-6 rounded-full"
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

export default RequestDetails
