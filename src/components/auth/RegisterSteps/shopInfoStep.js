import {Formik} from 'formik'
import {useEffect} from 'react'
import {Form, Image, Button} from 'semantic-ui-react'
import FormikControl from '../../formik/FormikControl'
import photoImage from '../../../assets/images/photo-ic.svg'
import '../../../assets/css/shopinfostep.css'

const ShopInfoStep = ({step, values, nextStep, loading, stepTitle}) => {
  useEffect(() => {
    stepTitle({title: 'Shop Information', desc: 'Shop logo, Description'})
  }, [])

  const handleOnSubmit = values => {
    console.log(values)
    nextStep({type: 'step', value: values})
  }

  return (
    <div className="px-32">
      <Formik   initialValues={{
            shopName: values.shopName || '',
            shopDesc: values.shopDesc || '',
            
          }}
          onSubmit={handleOnSubmit}>
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

            <Form.Group className="flex">
              <Form.Field>
                
              <div>
              <label className="block text-sm font-medium text-gray-700">
                Logo
              </label>
                <div className="space-y-1 text-center">
                
                  <div className="flex text-sm col-span-6 sm:col-span-3">
                    <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium file-upload">
                      
                      <Image src={photoImage} className="w-10 h-10 shop-logo" />
                      <span className="secondary-text-color">Select logo</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                 
                </div>
            </div>
            </Form.Field>
            <Form.Field  className="flex-1">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cover
              </label>
                <div className="space-y-1 text-center">
                
                  <div className="flex text-sm col-span-6 sm:col-span-3">
                    <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium file-upload">
                      
                      <Image src={photoImage} className="w-300 h-10 shop-logo" />
                      <span className="secondary-text-color">Select cover</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
              
                </div>
            </div>
              
              </Form.Field>
              
            </Form.Group>
            <p class="mt-2 text-sm text-gray-500">
                File details size maximum 2mb extension .jpg.png
              </p>  
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


