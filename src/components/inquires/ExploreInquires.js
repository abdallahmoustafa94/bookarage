import {Button, Image, Grid} from 'semantic-ui-react'
import {GiAutoRepair} from 'react-icons/gi'
import {RiArrowRightSLine} from 'react-icons/ri'
import {BsWrench} from 'react-icons/bs'
import {FaCarSide} from 'react-icons/fa'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import routes from '../../routes'
import {IoNewspaperOutline} from 'react-icons/io5'
const ExploreInquires = () => {
  return (
    <div className="my-8 py-5 ">
      <p className="xs:px-4 md:px-4">14 Total Inquires Related To You</p>
      <div className="bg-white p-4 w-full rounded-lg">
        <div className="flex items-center">
          <IoNewspaperOutline className="lg:-mt-4 lg:text-xl" />
          <p className="flex w-1/3 justify-start xs:text-sm">New Inquiry</p>
          <p className="flex w-1/3 justify-center xs:text-sm">ID:351</p>
          <p className="flex w-1/3 justify-end xs:text-sm">5 Hours Ago</p>
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
                <p className=" font-semibold ">Honda-civic 2005 (black)</p>
              </div>
              <div className=" lg:flex lg:items-start">
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
                  <p className="text-gray-500 text-sm">Badget Range</p>
                  <p>
                    <span className="text-gray-500">From</span> 100 AED
                    <span className="text-gray-500">To</span> 200 AED
                  </p>
                </div>
                <div className="lg:mr-20">
                  <p className="text-gray-500 text-sm">Car Recovery</p>
                  <div className="flex ">
                    <FaCarSide size={17} className="mr-2" />
                    <p>Requested</p>
                    <AiOutlineCheckCircle
                      size={17}
                      className="text-white bg-green-400 ml-2 "
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Requested Date & Time</p>
                <div className="flex">
                  <p className="">Monday, 15 Oct, 2020 - 2020 </p>
                  <Button
                    content="Change"
                    className="text-primaryRedColor-default font-medium  bg-transparent lg:-mt-4"
                  />
                </div>
              </div>
              <div className="lg:flex lg:items-center w-full ">
                <div className="flex items-center my-4 justify-start bg-gray-100 rounded-full p-4 lg:w-1/2">
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

                <div className="lg:flex lg:justify-end lg:ml-40 text-center lg:w-1/2">
                  <div className="flex flex-col lg:flex-row">
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
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="bg-white p-4 w-full rounded-lg my-8">
        <div className="flex items-center">
          <IoNewspaperOutline className="lg:-mt-4 lg:text-xl" />
          <p className="flex w-1/3 justify-start xs:text-sm">New Inquiry</p>
          <p className="flex w-1/3 justify-center xs:text-sm">ID:351</p>
          <p className="flex w-1/3 justify-end xs:text-sm">5 Hours Ago</p>
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
              <div className="mb-2 flex ">
                <p className=" font-semibold w-1/2">Honda-civic 2005 (black)</p>
                <div className=" w-1/2 ">
                  <p className="font-semibold ">Requested Parts</p>
                  <div className="flex   justify-start    ">
                    <Image
                      src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                      size="mini"
                    />
                    <div>
                      <p className="ml-2 font-sm mb-0">Oil Filter</p>
                      <p className="ml-2 font-sm text-gray-500">QTY 1 </p>
                    </div>
                  </div>
                  <div className="flex   justify-start   my-2 ">
                    <Image
                      src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                      size="mini"
                    />
                    <div>
                      <p className="ml-2 font-sm mb-0 ">Left Mirror</p>
                      <p className="ml-2 font-sm text-gray-500">QTY 1 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:flex lg:items-start lg:-mt-28">
                <div className="lg:mr-20 ">
                  <p className="text-gray-500 text-sm">Request Services</p>
                  <div className="flex">
                    <BsWrench
                      size={17}
                      className="text-primaryRedColor-default mr-2"
                    />
                    <p>Electric Repair</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Requested Date & Time</p>
                <div className="flex">
                  <p className="">Monday, 15 Oct, 2020 - 2020 </p>
                  <Button
                    content="Change"
                    className="text-primaryRedColor-default font-medium  bg-transparent lg:-mt-4"
                  />
                </div>
              </div>
              <div className="lg:flex lg:items-center w-full ">
                <div className="flex items-center my-4 justify-start bg-gray-100 rounded-full p-4 lg:w-1/2">
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

                <div className="lg:flex lg:justify-end lg:ml-40 text-center lg:w-1/2">
                  <div className="flex flex-col lg:flex-row">
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
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}

export default ExploreInquires
