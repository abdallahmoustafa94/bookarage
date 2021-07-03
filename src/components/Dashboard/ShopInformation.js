import {Formik} from 'formik'
import {useContext, useEffect, useState} from 'react'
import {Form, Image, Button, TextArea} from 'semantic-ui-react'
import FormikControl from '../formik/FormikControl'
import photoImage from '../../assets/images/photo-ic.svg'

const ShopInformation = ({loading, shopInfo, setValues}) => {
  const [state, setState] = useState({
    shopName: shopInfo?.nameEN || '',
    desc: shopInfo?.decription || '',
    phoneNumber: shopInfo?.phoneNumber || [],
    logo: shopInfo?.logo || '',
    coverPhoto: shopInfo?.coverPhoto || '',
  })
  // const handleOnSubmit = values => {
  //   console.log(values)
  //   nextStep({type: 'step', value: values})
  // }

  return (
    <div>
      <Formik initialValues={{state}}>
        {formik => (
          <Form className="w-2/4">
            <Form.Group widths="equal" className="flex">
              <Form.Field>
                <div className="mt-5">
                  <label className="block text-lg font-medium text-gray-700">
                    Logo
                  </label>
                  <div className="my-3">
                    <Image
                      src={shopInfo?.logo || photoImage}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm col-span-6 sm:col-span-3">
                      <label
                        for="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium file-upload"
                      >
                        <div className="flex items-center">
                          <Image
                            src={photoImage}
                            className="w-10 h-10 shop-logo"
                          />
                          <span className="secondary-text-color">
                            Select logo
                          </span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </Form.Field>
              <Form.Field>
                <div className="mt-5">
                  <label className="block text-lg font-medium text-gray-700">
                    Cover
                  </label>
                  <div className="my-3">
                    <Image
                      src={shopInfo?.coverPhoto || photoImage}
                      className="w-52 h-20 rounded-xl object-contain"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm col-span-6 sm:col-span-3">
                      <label
                        for="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium file-upload"
                      >
                        <div className="flex items-center">
                          <Image
                            src={photoImage}
                            className="w-300 h-10 shop-logo"
                          />
                          <span className="secondary-text-color">
                            Select cover
                          </span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </Form.Field>
            </Form.Group>
            <p className="mt-2 text-sm text-gray-500">
              File details size maximum 2mb extension .jpg.png
            </p>

            <hr className="my-4" />
            <Form.Field>
              <Form.Input
                label={
                  <label className="text-labelColor font-medium">
                    Shop Name
                  </label>
                }
                onChange={(e, {value}) => setState({...state, shopName: value})}
              />
            </Form.Field>

            <Form.Field>
              <label className="text-labelColor font-medium">
                Shop Description
              </label>
              <TextArea
                rows={3}
                onChange={(e, {value}) => setState({...state})}
              ></TextArea>
            </Form.Field>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ShopInformation
