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
    <div className="my-8 py-8 px-24">
      <p>14 Total Requests</p>
      <div className="bg-white p-4  rounded-lg">
        <div className="flex items-center">
          <GiAutoRepair className="-mt-4 text-xl" />
          <p className="flex w-1/3 justify-start">Car Arrived</p>
          <p className="flex w-1/3 justify-center">ID:351</p>
          <Button
            content="Full Request Details"
            className="bg-transparent flex justify-end w-1/3 font-normal text-gray-800 "
          />
          <RiArrowRightSLine className="text-xl -ml-6" />
        </div>

        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image
                className="rounded-lg my-8"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                size="large"
              />
            </Grid.Column>

            <Grid.Column width={13}>
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
                <div className="mr-12">
                  <p className="text-gray-500 text-sm">Plate Number</p>
                  <p>555 099</p>
                </div>
              </div>
              <div className=" flex items-start my-4 ">
                <div className="mr-20">
                  <p className="text-gray-500 text-sm">Car Received</p>
                  <div className="flex ">
                    <p className="font-semibold">1 hour ago</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full">
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
                <div className="flex justify-end ml-80">
                  <Button
                    content="Assign To Mechanic"
                    className=" bg-red-600 text-white py-4 rounded px-14 text-sm"
                    onClick={() =>
                      setShowModal({modalName: 'assignMechanic', data: null})
                    }
                  />

                  <Button
                    content="Cancel"
                    className=" py-2 px-2 ml-4 bg-transparent border-gray-300 text-gray-400 border-2"
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