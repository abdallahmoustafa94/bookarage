import {useState, useContext} from 'react'
import {Button, Image, Grid} from 'semantic-ui-react'
import {GiAutoRepair} from 'react-icons/gi'
import {RiArrowRightSLine} from 'react-icons/ri'
import {BsWrench} from 'react-icons/bs'
import {FaCarSide} from 'react-icons/fa'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import StateContext from '../../context/stateContext'

const CarArrived = () => {
  const {setShowModal} = useContext(StateContext)

  return (
    <div className="my-8 py-8 lg:px-24">
      <p className="xs:px-4 md:px-4">14 Total Requests</p>
      <div className="bg-white p-4 w-full  lrounded-lg">
        <div className="flex items-center">
          <GiAutoRepair className="lg:-mt-4 lg:text-xl" />
          <p className="flex w-1/3 justify-start xs:text-sm">Car Arrived</p>
          <p className="flex w-1/3 justify-center xs:text-sm">ID:351</p>
          <Button
            content="Full Request Details"
            className="bg-transparent flex justify-end xs:text-sm   w-1/3 font-normal text-gray-800 "
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
                  <p className="text-gray-500 text-sm">Plate Number</p>
                  <p>555 099</p>
                </div>
              </div>
              <div className=" lg:flex items-start my-4 ">
                <div className="lg:mr-20">
                  <p className="text-gray-500 text-sm">Car Received</p>
                  <div>
                    <p className="font-semibold">1 hour ago</p>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:items-center w-full">
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
                <div className="flex ml-8 xs:ml-20 xs:-mt-12 md:-mt-12  justify-center">
                  <Button
                    icon="envelope open outline"
                    className=" bg-transparent lg:text-xl"
                  />
                  <Button
                    icon="users"
                    className=" rounded  bg-transparent lg:text-xl"
                  />
                </div>
                <div className="flex lg:justify-end xs:justify-center md:justify-center lg:ml-80">
                  <Button
                    content="Assign To Mechanic"
                    className=" bg-primaryRedColor-default text-white lg:py-4 rounded lg:px-14 text-sm"
                    onClick={() =>
                      setShowModal({modalName: 'assignMechanic', data: null})
                    }
                  />

                  <Button
                    content="Cancel"
                    className=" lg:py-2 lg:px-2 lg:ml-4 bg-transparent border-gray-300 text-gray-400 border-2"
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

export default CarArrived
