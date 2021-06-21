import {Formik} from 'formik'
import {useEffect} from 'react'
import {Form, Image, Button} from 'semantic-ui-react'
import FormikControl from '../../formik/FormikControl'
import photoImage from '../../../assets/images/photo-ic.svg'
import uploadImage from '../../../assets/images/upload.ico'

import '../../../assets/css/shopinfostep.css'

const LegalInformation = ({step, values, nextStep, loading, stepTitle}) => {
  useEffect(() => {
    stepTitle({title: 'Legal Information', desc: 'Vat number, Trading license'})
  }, [])

  const handleOnSubmit = values => {
    console.log(values)
    nextStep({type: 'step', value: values})
  }

  return (
    <div className="px-32">
      <Formik   initialValues={{
            vatNumber: values.vatNumber || '',
            
          }}
          onSubmit={handleOnSubmit}>
        {formik => (
          <Form loading={loading} onSubmit={formik.submitForm}>
            <Form.Field>
              <FormikControl
                name="vatNumber"
                control="input"
                label="vat number"
                placeholder="Write your vat number"
              />
            </Form.Field>

              <Form.Field>
                
              <div>
             <p className="text-gray-600">Trading License</p>
             <p className="mt-2 text-sm text-gray-500">
                File details size maximum 2mb extension .jpg.png
              </p>  
                <div className="space-y-1 text-center">
                
                  <div className="flex text-sm col-span-6 sm:col-span-3">
                    <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium file-upload">
                      
                      <Image src={uploadImage} className="w-10 h-10 shop-logo" />
                      <span className="secondary-text-color">Upload License</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                 
                </div>
            </div>
            </Form.Field>
            
              
            
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

export default LegalInformation


