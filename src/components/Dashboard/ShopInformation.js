import {Formik} from 'formik'
import {useContext, useEffect, useState} from 'react'
import {Form, Image, Button} from 'semantic-ui-react'
import FormikControl from '../formik/FormikControl'
import photoImage from '../../assets/images/photo-ic.svg'

const ShopInformation = ({step, values, nextStep, loading, stepTitle}) => {
  const [state,setState] = useState({
    selectedLogo : null,
    isLogoPicked : false,
    selectedCover : null,
    isCoverPicked : false
  })
  const handleOnSubmit = values => {
    console.log(values)
    nextStep({type: 'step', value: values})
  }

  const logoHandler = event => {
    setState({ ...state,selectedLogo: event.target.files[0], isLogoPicked:true })
  }

  const coverHandler = event => {
    setState({ ...state ,selectedCover: event.target.files[0],isCoverPicked:true})
  }

  return (
    <div>
      <Formik
        // initialValues={{
        //   shopName: values.shopName || '',
        //   shopDesc: values.shopDesc || '',
        // }}
        onSubmit={handleOnSubmit}
      >
        {formik => (
          <Form
            loading={loading}
            onSubmit={formik.submitForm}
            className="w-2/4"
          >
            <Form.Group widths="equal" className="flex">
              <Form.Field>
                <div>{/* <Image src={} /> */}</div>
                <div className="mt-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Logo
                  </label>
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm col-span-6 sm:col-span-3">
                      <label
                        for="logo-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium file-upload"
                      >
                        <Image
                          src={photoImage}
                          className="w-10 h-10 shop-logo"
                        />
                        <span className="secondary-text-color">
                          Select logo
                        </span>
                        <input
                          onChange={logoHandler}
                          id="logo-upload"
                          name="logo"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                     
                    </div>
                   
                  </div>
                </div>
                {state.isLogoPicked ? (
                    <div>
                      <p> {state.selectedLogo.name}</p>
                    </div>
                  ) : (
                    null
                  )}
              </Form.Field>
              <Form.Field>
                <div className="mt-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Cover
                  </label>
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm col-span-6 sm:col-span-3">
                      <label
                        for="cover-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium file-upload"
                      >
                        <Image
                          src={photoImage}
                          className="w-300 h-10 shop-logo"
                        />
                        <span className="secondary-text-color">
                          Select cover
                        </span>
                        <input
                        onChange={coverHandler}
                          id="cover-upload"
                          name="cover"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                     
                    </div>
                    
                  </div>
                </div>
                {state.isCoverPicked ? (
                    <div>
                      <p> {state.selectedCover.name}</p>
                    </div>
                  ) : (
                   null
                  )}
              </Form.Field>
            </Form.Group>
            <p className="mt-2 text-sm text-gray-500">
              File details size maximum 2mb extension .jpg.png
            </p>
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
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ShopInformation
