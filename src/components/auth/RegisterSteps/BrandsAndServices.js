import {useContext, useEffect, useState} from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {MdModeEdit} from 'react-icons/md'
import {Button, Form} from 'semantic-ui-react'
import {BsWrench} from 'react-icons/bs'

// import '../../../assets/css/shopinfostep.css'
import StateContext from '../../../context/stateContext'

const BrandsAndServices = ({
  values,
  nextStep,
  stepTitle,
  deletedBrand,
  loading,
}) => {
  const {setShowModal} = useContext(StateContext)

  useEffect(() => {
    stepTitle({
      title: 'Brands And Services',
      desc: 'Add brands and services you provide',
    })
  }, [])

  const handleOnSubmit = () => {
    nextStep({type: 'step', value: values})
  }

  return (
    <div className="px-8">
      <Form loading={loading}>
        <div className="my-20">
          <div className="flex items-center w-full">
            <p className="mb-0 w-1/2">Brands Services For</p>
            <div className="flex justify-end w-1/2">
              <Button
                content="add Brand"
                icon="plus"
                className="bg-transparent font-normal text-primaryRedColor-default"
                onClick={() =>
                  setShowModal({modalName: 'registerBrand', data: null})
                }
              />
            </div>
          </div>
          <div className="space-y-1 text-center  ">
            <div className="flex text-sm col-span-6 sm:col-span-3 	">
              {values?.brands?.map((b, i) => (
                <div className="rounded-full bg-gray-100 py-1 px-2  flex">
                  <span className="primary-text-color  rtl:ml-3 ltr:mr-3 ">
                    {b}
                  </span>
                  <RiDeleteBin6Line
                    size={16}
                    className="text-primaryRedColor-default cursor-pointer"
                    onClick={() => deletedBrand(i)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center w-full py-4">
            <p className="mb-0 w-1/2">Providing Services</p>
            <div className="flex justify-end w-1/2">
              <Button
                content="add Service"
                icon="plus"
                className="bg-transparent font-normal text-primaryRedColor-default"
                onClick={() =>
                  setShowModal({modalName: 'registerService', data: null})
                }
              />
            </div>
          </div>
          {values?.services?.map((s, i) => (
            <div className="border border-grey-300 w-full p-2 mb-3">
              <div className="flex items-center ">
                <div className="flex items-center mb-0 w-1/2">
                  <BsWrench
                    size={17}
                    className="text-primaryRedColor-default ltr:mr-3 rtl:ml-3"
                  />
                  <span className="primary-text-color  rtl:mr-3 ">
                    {/[^-]*$/.exec(s?.serviceId)[0]}
                  </span>
                </div>
                <div className=" flex justify-end    w-full mr-4 ">
                  <span className=" bg-red-50 px-6 py-2 rounded-full">
                    {s?.isAvailable ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>
              <p className="p-2 text-sm text-gray-500	">{s?.details}</p>
              <div className="flex items-center">
                <div className="flex mb-0 w-1/2 ">
                  <span className="text-blue-900	text-sm primary-text-color  ">
                    Start from {s?.cost} AED
                  </span>
                </div>
                <div className="p-0 justify-end flex w-1/2 mr-6">
                  <MdModeEdit size={16} className="text-gray-400 mr-1" />
                  <Button
                    className="text-gray-400 text-base bg-transparent font-normal p-0"
                    content="edit"
                    onClick={() =>
                      setShowModal({modalName: 'registerService', data: s})
                    }
                  />
                </div>
                <div className="p-0 justify-end flex  w-1/6">
                  <RiDeleteBin6Line size={16} className="text-gray-400 mr-1" />
                  <Button
                    className="text-gray-400 text-base bg-transparent font-normal p-0"
                    content="delete"
                    onClick={() =>
                      setShowModal({
                        modalName: 'removeService',
                        data: {index: i},
                      })
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-10 text-center">
          <Button
            content="Continue"
            onClick={handleOnSubmit}
            className="btn-primary"
          />
          <Button
            className="btn-declined mx-5"
            onClick={() => nextStep({type: 'submitShop', value: null})}
          >
            Setup Later
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default BrandsAndServices
