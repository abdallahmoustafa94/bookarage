import {Formik} from 'formik'
import {IoArrowBack} from 'react-icons/io5'

import {useEffect,useState} from 'react'
import {Form, Image, Button, Header, Modal,Label,Select} from 'semantic-ui-react'
import FormikControl from '../../formik/FormikControl'
import photoImage from '../../../assets/images/photo-ic.svg'
import uploadImage from '../../../assets/images/upload.ico'

import '../../../assets/css/shopinfostep.css'

const BrandsAndServices = ({handleBack,step, values, nextStep, loading, stepTitle}) => {
    const [modal1, setmodal1] = useState(false)
    const [modal2, setmodal2] = useState(false)


  useEffect(() => {
    stepTitle({title: 'Legal Information', desc: 'Vat number, Trading license'})
  }, [])

  const handleOnSubmit = values => {
    console.log(values)
    nextStep({type: 'step', value: values})
  }

  const BrandsOptions = [{
      key:'Honda', value:'Honda', text:'Honda'
  }]

  return (
      
    <div className="px-32">
       
      <Formik   initialValues={{
            vatNumber: values.vatNumber || '',
            
          }}
          onSubmit={handleOnSubmit}>
        {formik => (
          <Form loading={loading} onSubmit={formik.submitForm}>

<div class="grid grid-cols-2 gap-4">
  <div >
      <p>Brands Services For</p>
  </div>
  <div style={{textAlign:'right'}}>
  <Modal
      onClose={() => setmodal1(false)}
      onOpen={() => setmodal1(true)}
      open={modal1}
      trigger={<p className="add">+ Add Brand</p>}
    >

<div className="px-32 text-center">
    <p className="brands-title text-bold">Add Brands</p>
    <span>Brands that you provide services for</span>
    
<Form.Field>
              <Label className="font-bold text-base mt-4 text-primary brands-selection">Select Brand</Label>
              <Select className="brands-options" placeholder='Select your country' options={BrandsOptions} />
        
            </Form.Field>
</div>
     
      <Modal.Actions>
          <div className="brands-buttons"> 
          <Button
          content="Add"
          className="btn-primary"
          onClick={() => setmodal1(false)}
        />
        <Button color='transparent' onClick={() => setmodal1(false)}>
          Cancel
        </Button>
        
          </div>
     
      </Modal.Actions>
    </Modal>
  </div>
  <div >Providing Services</div>
  <div style={{textAlign:'right'}}>
  <Modal
      onClose={() => setmodal2(false)}
      onOpen={() => setmodal2(true)}
      open={modal2}
      trigger={<p className="add">+ Add Service</p>}
    >


      <Modal.Actions>
      <div className="brands-buttons"> 
          <Button
          content="Add"
          className="btn-primary"
          onClick={() => setmodal2(false)}
        />
        <Button color='transparent' onClick={() => setmodal2(false)}>
          Cancel
        </Button>
        
          </div>
      </Modal.Actions>
    </Modal>
  </div>
</div>
          
      
            
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

export default BrandsAndServices


