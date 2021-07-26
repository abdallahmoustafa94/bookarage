import {useState} from 'react'
import {Button, Image, Grid, Rating} from 'semantic-ui-react'
import {GiAutoRepair} from 'react-icons/gi'
import {RiArrowRightSLine} from 'react-icons/ri'
import {BsWrench} from 'react-icons/bs'
import {FaCarSide, FaCheckCircle} from 'react-icons/fa'

const CarReady = () => {
  return (
    <div className="my-8 py-5">
      <p className="xs:px-4 md:px-4">14 Total Requests</p>
      <div className="bg-white p-4  rounded-lg">
        <div className="flex items-center">
          <GiAutoRepair className="-mt-4 text-xl" />
          <p className="flex w-1/3 justify-start xs:text-xs">Finished</p>
          <p className="flex w-1/3 justify-center xs:text-xs">ID:351</p>
          <Button
            content="Full Request Details"
            className="bg-transparent flex justify-end w-1/3 font-normal text-gray-800 xs:text-xs"
          />
          <RiArrowRightSLine className="text-xl -ml-6" />
        </div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="lg:flex">
                <Grid.Column width={6}>
                  <Image
                    className="rounded-lg my-8"
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                </Grid.Column>

                <Grid.Column width={10} className="ml-4">
                  <div className="mb-2">
                    <p className=" font-semibold ">Honda-civic 2005 (black)</p>
                  </div>
                  <div className=" flex items-start">
                    <div className="mr-20">
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
                  <div className="mr-12 my-4">
                    <p className="text-gray-500 text-sm">Plate Number</p>
                    <p>555 099</p>
                  </div>
                  <div className="flex">
                    <div className="flex items-center my-4 justify-start">
                      <Image
                        circular
                        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                        size="mini"
                      />
                      <p className="ml-2">
                        Alex Lawson <br />
                        (585) 5519-96
                      </p>
                    </div>
                    <div className="flex ml-8 justify-center">
                      <Button
                        icon="envelope open outline"
                        className=" bg-transparent text-xl"
                      />
                      <Button
                        icon="users"
                        className=" rounded  bg-transparent text-xl"
                      />
                    </div>
                  </div>
                </Grid.Column>
              </div>

              <div className=" flex items-start"></div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="flex items-center my-4 justify-start ">
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                />
                <p className="ml-2 font-semibold text-gray-500 font-lg">
                  Assigned Mechanic <br />
                  <Rating icon="star" defaultRating={4} maxRating={5} />
                </p>
              </div>
              <div>
                <p className="font-semibold">Total Cost</p>
                <p className=" font-medium text-blue-900 text-xl mb-0">
                  420 AED
                </p>
                <div className="flex justify-start items-center -ml-6">
                  <Button
                    content="View Invoice"
                    className="bg-transparent  font-normal text-gray-500 mr-0"
                  />
                  <RiArrowRightSLine className="text-xl -ml-6 text-gray-500" />
                </div>
              </div>
              <div></div>
            </Grid.Column>
            <Grid.Column width={16}>
              <div className="w-full py-6">
                <div className="flex">
                  <div className="w-1/5">
                    <div className="relative mb-2">
                      <span className="text-center text-white w-full">
                        <FaCheckCircle
                          size={17}
                          className="w-10 h-10 mx-auto bg-blue-600 rounded-full text-lg text-white flex items-center border "
                        />
                      </span>
                    </div>

                    <div className="text-xs text-center md:text-base text-blue-600">
                      Diagnosis Car
                    </div>
                  </div>

                  <div className="w-1/5">
                    <div className="relative mb-2">
                      <div className="absolute flex align-center items-center align-middle content-center">
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 ">
                          <div className="w-0 bg-green-300 py-1 rounded"></div>
                        </div>
                      </div>

                      <div>
                        <span className="text-center text-white w-full">
                          <FaCheckCircle
                            size={17}
                            className="w-10 h-10 mx-auto bg-blue-600 rounded-full text-lg text-white flex items-center"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-blue-600">
                      Owner Approval
                    </div>
                  </div>

                  <div className="w-1/5">
                    <div className="relative mb-2">
                      <div className="absolute flex align-center items-center align-middle content-center">
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                          <div className="w-0 bg-green-300 py-1 rounded"></div>
                        </div>
                      </div>

                      <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-gray-600 w-full">
                          <span className="text-center text-white w-full">
                            <FaCheckCircle
                              size={17}
                              className="w-10 h-10 mx-auto bg-blue-600 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-blue-600">
                      Work in Process
                    </div>
                  </div>

                  <div className="w-1/5">
                    <div className="relative mb-2">
                      <div className="absolute flex align-center items-center align-middle content-center">
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                          <div className="w-0 bg-green-300 py-1 rounded"></div>
                        </div>
                      </div>

                      <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-gray-600 w-full">
                          <span className="text-center text-white w-full">
                            <FaCheckCircle
                              size={17}
                              className="w-10 h-10 mx-auto bg-red-600 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-red-600">
                      Car Ready
                    </div>
                  </div>

                  <div className="w-1/5">
                    <div className="relative mb-2">
                      <div className="absolute flex align-center items-center align-middle content-center">
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                          <div className="w-0 bg-green-300 py-1 rounded"></div>
                        </div>
                      </div>

                      <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-gray-600 w-full">
                          <span className="text-center text-white w-full">
                            <FaCheckCircle
                              size={17}
                              className="w-10 h-10 mx-auto bg-gray-500 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-gray-500">
                      Owner Received
                    </div>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <div className="bg-white p-4 my-8  rounded-lg">
        <div className="flex items-center">
          <GiAutoRepair className="-mt-4 text-xl" />
          <p className="flex w-1/3 justify-start xs:text-xs">
            Owner Received The Car
          </p>
          <p className="flex w-1/3 justify-center xs:text-xs">ID:351</p>
          <Button
            content="Full Request Details"
            className="bg-transparent flex justify-end w-1/3 font-normal text-gray-800 xs:text-xs"
          />
          <RiArrowRightSLine className="lg:text-xl lg:-ml-6" />
        </div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="lg:flex">
                <Grid.Column width={6}>
                  <Image
                    className="rounded-lg my-8"
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                </Grid.Column>

                <Grid.Column width={10} className="ml-4">
                  <div className="mb-2">
                    <p className=" font-semibold ">Honda-civic 2005 (black)</p>
                  </div>
                  <div className=" flex items-start">
                    <div className="mr-20">
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
                  <div className="mr-12 my-4">
                    <p className="text-gray-500 text-sm">Plate Number</p>
                    <p>555 099</p>
                  </div>
                  <div className="flex">
                    <div className="flex items-center my-4 justify-start">
                      <Image
                        circular
                        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                        size="mini"
                      />
                      <p className="ml-2">
                        Alex Lawson <br />
                        (585) 5519-96
                      </p>
                    </div>
                    <div className="flex ml-8 justify-center">
                      <Button
                        icon="envelope open outline"
                        className=" bg-transparent text-xl"
                      />
                      <Button
                        icon="users"
                        className=" rounded  bg-transparent text-xl"
                      />
                    </div>
                  </div>
                </Grid.Column>
              </div>

              <div className=" flex items-start"></div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="flex items-center my-4 justify-start ">
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                />
                <div className="flex xs:flex-col xs:justify-center items-center">
                  <div>
                    <p className="ml-2 font-semibold text-gray-500 font-lg">
                      Assigned Mechanic <br />
                      <Rating icon="star" defaultRating={4} maxRating={5} />
                    </p>
                  </div>
                  <div className="">
                    <p className="ml-2 font-semibold text-gray-500 font-lg ">
                      Rate & Review <br />
                      <p className=" my-2">Service Rate</p>
                      <Rating
                        icon="star"
                        defaultRating={4}
                        maxRating={5}
                        className="mb-0"
                      />
                    </p>
                    <div className="flex justify-start items-center -ml-6">
                      <Button
                        content="View Review"
                        className="bg-transparent lg:ml-32 lg:-my-8  font-normal text-gray-500 mr-0"
                      />
                      <RiArrowRightSLine className="text-xl -ml-6 text-gray-500" />
                    </div>
                    <p className="ml-2 font-semibold text-gray-500 font-lg">
                      Mechanic Rate <br />
                      <Rating icon="star" defaultRating={4} maxRating={5} />
                    </p>
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={16}>
              <div className="w-full py-6">
                <div className="flex">
                  <div className="w-1/5">
                    <div className="relative mb-2">
                      <span className="text-center text-white w-full">
                        <FaCheckCircle
                          size={17}
                          className="w-10 h-10 mx-auto bg-blue-500 rounded-full text-lg text-white flex items-center border "
                        />
                      </span>
                    </div>

                    <div className="text-xs text-center md:text-base text-blue-600">
                      Diagnosis Car
                    </div>
                  </div>

                  <div className="w-1/5">
                    <div className="relative mb-2">
                      <div className="absolute flex align-center items-center align-middle content-center">
                        <div className="w-full bg-blue-600 rounded items-center align-middle align-center flex-1 ">
                          <div className="w-0 bg-green-300 py-1 rounded"></div>
                        </div>
                      </div>

                      <div>
                        <span className="text-center text-white w-full">
                          <FaCheckCircle
                            size={17}
                            className="w-10 h-10 mx-auto bg-blue-600 rounded-full text-lg text-white flex items-center"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-blue-600">
                      Owner Approval
                    </div>
                  </div>

                  <div className="w-1/5">
                    <div className="relative mb-2">
                      <div className="absolute flex align-center items-center align-middle content-center">
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                          <div className="w-0 bg-green-300 py-1 rounded"></div>
                        </div>
                      </div>

                      <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-gray-600 w-full">
                          <span className="text-center text-white w-full">
                            <FaCheckCircle
                              size={17}
                              className="w-10 h-10 mx-auto bg-blue-600 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-blue-600">
                      Work in Process
                    </div>
                  </div>

                  <div className="w-1/5">
                    <div className="relative mb-2">
                      <div className="absolute flex align-center items-center align-middle content-center">
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                          <div className="w-0 bg-green-300 py-1 rounded"></div>
                        </div>
                      </div>

                      <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-gray-600 w-full">
                          <span className="text-center text-white w-full">
                            <FaCheckCircle
                              size={17}
                              className="w-10 h-10 mx-auto bg-blue-600 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-blue-600">
                      Car Ready
                    </div>
                  </div>

                  <div className="w-1/5">
                    <div className="relative mb-2">
                      <div className="absolute flex align-center items-center align-middle content-center">
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                          <div className="w-0 bg-green-300 py-1 rounded"></div>
                        </div>
                      </div>

                      <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-gray-600 w-full">
                          <span className="text-center text-white w-full">
                            <FaCheckCircle
                              size={17}
                              className="w-10 h-10 mx-auto bg-blue-600 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-blue-600">
                      Owner Received
                    </div>
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

export default CarReady
