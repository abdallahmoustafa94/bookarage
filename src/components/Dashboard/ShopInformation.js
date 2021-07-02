import {Formik} from 'formik'
import {useContext, useEffect, useState} from 'react'
import {Form, Image, Button, TextArea} from 'semantic-ui-react'
import FormikControl from '../formik/FormikControl'
import photoImage from '../../assets/images/photo-ic.svg'

const ShopInformation = ({loading, shopInfo}) => {
  // const handleOnSubmit = values => {
  //   console.log(values)
  //   nextStep({type: 'step', value: values})
  // }

  return (
    <div>
      <Form loading={loading} className="w-2/4">
        <Form.Group widths="equal" className="flex">
          <Form.Field>
            <div>
              <Image src={shopInfo?.logo} className="w-32 h-32 rounded-full" />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-medium text-gray-700">
                Logo
              </label>
              <div className="space-y-1 text-center">
                <div className="flex text-sm col-span-6 sm:col-span-3">
                  <label
                    for="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium file-upload"
                  >
                    <Image src={photoImage} className="w-10 h-10 shop-logo" />
                    <span className="secondary-text-color">Select logo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </Form.Field>
          <Form.Field>
            <div>
              <Image
                src={shopInfo?.coverPhoto || photoImage}
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-medium text-gray-700">
                Cover
              </label>
              <div className="space-y-1 text-center">
                <div className="flex text-sm col-span-6 sm:col-span-3">
                  <label
                    for="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium file-upload"
                  >
                    <Image src={photoImage} className="w-300 h-10 shop-logo" />
                    <span className="secondary-text-color">Select cover</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </Form.Field>
        </Form.Group>
        <p className="mt-2 text-sm text-gray-500">
          File details size maximum 2mb extension .jpg.png
        </p>
        <Form.Field>
          <Form.Input label="Shop Name" />
        </Form.Field>

        <Form.Field>
          <TextArea rows={3} label="Shop Description"></TextArea>
        </Form.Field>
      </Form>
    </div>
  )
}

export default ShopInformation
