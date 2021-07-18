import {useState, useContext} from 'react'
import {Button, Image, Grid, Rating} from 'semantic-ui-react'
import {GiAutoRepair} from 'react-icons/gi'
import {RiArrowRightSLine} from 'react-icons/ri'
import {BsWrench} from 'react-icons/bs'
import {FaCarSide, FaCheckCircle} from 'react-icons/fa'
import StateContext from '../../context/stateContext'

const Ongoing = () => {
  const {setShowModal} = useContext(StateContext)
  return (
    <div className="my-8 py-8 px-24">
      <p>14 Total Requests</p>
      <div className="bg-white p-4  rounded-lg">
        <div className="flex items-center">
          <GiAutoRepair className="-mt-4 text-xl" />
          <p className="flex w-1/3 justify-start">
            Ongoing (Waiting For Diagnosis Report )
          </p>
          <p className="flex w-1/3 justify-center">ID:351</p>
          <Button
            content="Full Request Details"
            className="bg-transparent flex justify-end w-1/3 font-normal text-gray-800 "
          />
          <RiArrowRightSLine className="text-xl -ml-6" />
        </div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="flex">
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
                    <div className="flex justify-center ml-8 justify-center">
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
                <Button
                  content="Change"
                  className="text-red-600 font-medium  bg-transparent -mt-4 "
                />
              </div>
              <div className="flex justify-end mt-32">
                <Button
                  content="Cancel"
                  className=" py-2 px-2 ml-4 bg-transparent border-gray-300 text-gray-400 border"
                />
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
                          className="w-10 h-10 mx-auto bg-red-500 rounded-full text-lg text-white flex items-center border "
                        />
                      </span>
                    </div>

                    <div className="text-xs text-center md:text-base text-red-600">
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
                            className="w-10 h-10 mx-auto bg-gray-500 rounded-full text-lg text-white flex items-center"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-gray-500">
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
                              className="w-10 h-10 mx-auto bg-gray-500 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-gray-500">
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
                              className="w-10 h-10 mx-auto bg-gray-500 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-gray-500">
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
          <p className="flex w-1/3 justify-start">
            Ongoing (Waiting For Diagnosis Report )
          </p>
          <p className="flex w-1/3 justify-center">ID:351</p>
          <Button
            content="Full Request Details"
            className="bg-transparent flex justify-end w-1/3 font-normal text-gray-800 "
          />
          <RiArrowRightSLine className="text-xl -ml-6" />
        </div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="flex">
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
                    <div className="flex justify-center ml-8 justify-center">
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
                <Button
                  content="Change"
                  className="text-red-600 font-medium  bg-transparent -mt-4 "
                />
              </div>
              <div className="flex justify-end mt-32">
                <Button
                  content="Add Diagnosis Details"
                  className=" py-4 px-12 ml-4 bg-red-600 text-white   border-2"
                  onClick={() =>
                    setShowModal({modalName: 'addDiagnosis', data: null})
                  }
                />
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
                          className="w-10 h-10 mx-auto bg-red-500 rounded-full text-lg text-white flex items-center border "
                        />
                      </span>
                    </div>

                    <div className="text-xs text-center md:text-base text-red-600">
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
                            className="w-10 h-10 mx-auto bg-gray-500 rounded-full text-lg text-white flex items-center"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-gray-500">
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
                              className="w-10 h-10 mx-auto bg-gray-500 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-gray-500">
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
                              className="w-10 h-10 mx-auto bg-gray-500 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-gray-500">
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
          <p className="flex w-1/3 justify-start">
            Ongoing (Waiting Owner Approval )
          </p>
          <p className="flex w-1/3 justify-center">ID:351</p>
          <Button
            content="Full Request Details"
            className="bg-transparent flex justify-end w-1/3 font-normal text-gray-800 "
          />
          <RiArrowRightSLine className="text-xl -ml-6" />
        </div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="flex">
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
                    <div className="flex justify-center ml-8 justify-center">
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
                <Button
                  content="Change"
                  className="text-red-600 font-medium  bg-transparent -mt-4 "
                />
              </div>
              <div className="flex justify-end mt-32">
                <Button
                  content="Edit Diagnosis Details"
                  className=" py-4 px-12 ml-4 bg-transparent text-red-600 border-solid border-1 border-red-600"
                  onClick={() =>
                    setShowModal({modalName: 'addDiagnosis', data: null})
                  }
                />
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
                            className="w-10 h-10 mx-auto bg-red-600 rounded-full text-lg text-white flex items-center"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-red-500">
                      Waiting Owner Approval
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
                              className="w-10 h-10 mx-auto bg-gray-500 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-gray-500">
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
          <p className="flex w-1/3 justify-start">Ongoing</p>
          <p className="flex w-1/3 justify-center">ID:351</p>
          <Button
            content="Full Request Details"
            className="bg-transparent flex justify-end w-1/3 font-normal text-gray-800 "
          />
          <RiArrowRightSLine className="text-xl -ml-6" />
        </div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="flex">
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
                    <div className="flex justify-center ml-8 justify-center">
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
                <Button
                  content="Change"
                  className="text-red-600 font-medium  bg-transparent -mt-4 "
                />
              </div>
              <div className="flex justify-end mt-32">
                <Button
                  content="View And Edit Diagnosis Details"
                  className=" py-4 px-12 ml-4 bg-transparent text-red-600 border-solid border-1 border-red-600"
                  onClick={() =>
                    setShowModal({modalName: 'addDiagnosis', data: null})
                  }
                />
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
                            className="w-10 h-10 mx-auto bg-yellow-300 rounded-full text-lg text-white flex items-center"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-blue-600">
                      Owner didn't Approval All
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
                              className="w-10 h-10 mx-auto bg-gray-500 rounded-full text-lg text-white flex items-center"
                            />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-center md:text-base text-gray-500">
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
    </div>
  )
}

export default Ongoing
