import {Formik} from 'formik'
import {IoArrowBack} from 'react-icons/io5'

import {useContext, useEffect, useState} from 'react'
import {
  Form,
  Image,
  Button,
  Header,
  Modal,
  Label,
  Select,
} from 'semantic-ui-react'

import FormikControl from '../../formik/FormikControl'
import photoImage from '../../../assets/images/photo-ic.svg'
import uploadImage from '../../../assets/images/upload.ico'

// import '../../../assets/css/shopinfostep.css'
import StateContext from '../../../context/stateContext'

const BrandsAndServices = ({
  handleBack,
  step,
  values,
  nextStep,
  loading,
  stepTitle,
}) => {
  const {setShowModal} = useContext(StateContext)

  useEffect(() => {
    stepTitle({title: 'Legal Information', desc: 'Vat number, Trading license'})
  }, [])

  const handleOnSubmit = () => {
    nextStep({type: 'step', value: values})
  }

  return (
    <div className="px-32">
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
        <div className="flex items-center w-full">
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
      </div>

      <div className="my-10 text-center">
        <Button
          content="Continue"
          onClick={handleOnSubmit}
          className="btn-primary"
        />
      </div>
    </div>
  )
}

export default BrandsAndServices
