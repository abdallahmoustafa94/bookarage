import {Formik} from 'formik'
import {Fragment, useEffect, useState} from 'react'
import {Form, Image, Button} from 'semantic-ui-react'
import FormikControl from '../../formik/FormikControl'
import photoImage from '../../../assets/images/photo-ic.svg'
import useMediaQuery from '../../../hooks/use-media-query'
import Auth from '../../../config/auth'

const ShopInfoStep = ({step, values, nextStep, loading, stepTitle}) => {
  const isSmall = useMediaQuery('(max-width: 992px)')
  const [state, setState] = useState({
    logo: '',
    selectedlogo: '',
    selectedcoverPhoto: '',
    coverPhoto: '',
  })

  useEffect(() => {
    stepTitle({title: 'Shop Information', desc: 'Shop logo, Description'})
  }, [])

  const handleOnChangeImage = (type, e) => {
    // console.log(type, e.target.files[0])
    if (e.target.files || e.target.files[0]) {
      let reader = new FileReader()
      reader.onload = event => {
        setState({
          ...state,
          ['selected' + type]: event.target.result,
          [type]: e.target.files[0],
        })
      }
      reader.readAsDataURL(e.target.files[0])
    }
    console.log(e.target.files[0], type)
    setState({...state, [type]: e.target.files[0]})
  }

  const handleOnSubmit = values => {
    console.log(state)
    const shopInfo = {...values, ...state}
    const registerContent = JSON.parse(localStorage.getItem('registerDetails'))
    localStorage.setItem(
      'registerDetails',
      JSON.stringify({...registerContent, ...shopInfo}),
    )
    nextStep({type: 'shopStep', value: shopInfo})
  }

  return (
    <div className={isSmall ? 'px-5' : 'px-32'}>
      <Formik
        initialValues={{
          shopName: values.shopName || '',
          shopDesc: values.shopDesc || '',
          isAgent: values.isAgent || false,
          hasRecovery: values.hasRecovery || false,
        }}
        onSubmit={handleOnSubmit}
      >
        {formik => (
          <Form loading={loading} onSubmit={formik.submitForm}>
            <Form.Field>
              <FormikControl
                name="shopName"
                control="input"
                label="Shop Name"
              />
            </Form.Field>

            <Form.Field>
              <FormikControl
                name="shopDesc"
                control="textarea"
                label="Shop Description"
              />
            </Form.Field>

            {Auth.isServiceProvider() && (
              <Fragment>
                <Form.Field>
                  <FormikControl
                    name="isAgent"
                    label="My shop is able to sell spare parts."
                    checked={formik.values.isAgent}
                    control="checkbox"
                  />
                </Form.Field>

                <Form.Field>
                  <FormikControl
                    name="hasRecovery"
                    label="My shop has recovery service for cars."
                    control="checkbox"
                  />
                </Form.Field>
              </Fragment>
            )}

            <hr className="my-4" />

            <Form.Group widths="equal">
              <Form.Field>
                <div className="mb-3">
                  <Image
                    src={state.selectedlogo || photoImage}
                    className="rounded-full w-20 h-20 object-cover"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Logo
                  </label>
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm col-span-6 sm:col-span-3">
                      <label
                        htmlFor="logo-upload"
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
                            id="logo-upload"
                            name="logo-upload"
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={e => handleOnChangeImage('logo', e)}
                            onClick={e => {
                              e.target.value = null
                            }}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </Form.Field>
              <Form.Field>
                <div className="mb-3">
                  <Image
                    src={state.selectedcoverPhoto || photoImage}
                    className={`rounded-lg w-52 h-20 ${
                      state.selectedcoverPhoto
                        ? 'object-cover'
                        : 'object-contain'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cover
                  </label>
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm col-span-6 sm:col-span-3">
                      <label
                        htmlFor="coverPhoto-upload"
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
                            id="coverPhoto-upload"
                            name="coverPhoto-upload"
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={e => handleOnChangeImage('coverPhoto', e)}
                            onClick={e => {
                              e.target.value = null
                            }}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </Form.Field>
            </Form.Group>
            <small className="mt-2 text-gray-500">
              File details size maximum 2mb extension .jpg.png
            </small>
            <div className="my-10 text-center">
              <Button
                content="Continue"
                type="submit"
                className="btn-primary"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ShopInfoStep
