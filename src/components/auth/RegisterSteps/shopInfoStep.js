import {Formik} from 'formik'
import {useEffect} from 'react'
import {Form, Image} from 'semantic-ui-react'
import FormikControl from '../../formik/FormikControl'
import photoImage from '../../../assets/images/photo-ic.svg'

const ShopInfoStep = ({step, values, nextStep, loading, stepTitle}) => {
  useEffect(() => {
    stepTitle({title: 'Shop Information', desc: 'Shop logo, Description'})
  }, [])
  return (
    <div className="px-32">
      <Formik>
        {formik => (
          <Form>
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

            <Form.Group widths="equal">
              <Form.Field>
                <div className="flex ">
                  <div className="ring-1 ring-gray-100 rounded-md p-2">
                    <Image src={photoImage} className="w-10 h-10" />
                  </div>
                </div>
              </Form.Field>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ShopInfoStep
