import {Formik} from 'formik'
import {useEffect, useState} from 'react'
import {Form, Image, Button, Select, Label} from 'semantic-ui-react'
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector'

import FormikControl from '../formik/FormikControl'
// import '../../../assets/css/shopinfostep.css'

const ShopLocation = ({step, values, nextStep, loading, stepTitle}) => {
  const [country, setCountry] = useState({
    country: '',
    setCountry: '',
  })
  const [region, setRegion] = useState({
    region: '',
    setRegion: '',
  })
  
  
  const [inputs,addInputs]=useState([])
  const [vatInput,addVatInput] = useState([])
  const [count,setCount]=useState(1)
  const [isAgent,setIsAgent] = useState(false)
  const [hasRecovery,setHasRecovery] = useState(false)

  const handleOnSubmit = values => {
    console.log(values)
    nextStep({type: 'step', value: values})
  }

  const selectCountry = val => {
    setCountry({...country, setCountry: val})
  }

  const selectRegion = val => {
    setRegion({...region, setRegion: val})
  }

  const appendInput = (e) => {
    e.preventDefault()

    addInputs([...inputs,''])
}

const appendVatInput = (e) => {
  e.preventDefault()

  addVatInput([...vatInput,''])
}

const handleAddInput = (e,id) => {

  e.preventDefault()
  inputs = e.target.value
  addInputs(inputs)
  
}

const handleAddVatInput = (e,id) => {

  e.preventDefault()
  inputs = e.target.value
  addVatInput(vatInput)
  
}

function handleRemove(id) {
  const newInputs = inputs.filter((item) => item.id !== id);

  addInputs(newInputs);
  setCount(count+1)
}

function handleRemoveVat(id) {
  const newInputs = vatInput.filter((item) => item.id !== id);

  addVatInput(newInputs);
}

const handleOnChangeIsAgent = (checked) => {
  setIsAgent(checked)
}

const handleOnChangeHasRecovery = (checked) => {
  setHasRecovery(checked)
}

  return (
    <div>
      <Formik
        // initialValues={{
        //   country: values.country || '',
        //   region: values.region || '',
        //   shopAddress: values.shopAddress,
        // }}
        onSubmit={handleOnSubmit}
      >
        {formik => (
          <Form loading={loading} onSubmit={formik.submitForm} className="w-2/4">
             <p className="font-medium text-gray-700">Contact And Location</p>
            <div className="flex w-full">
          <p className="mb-0 w-1/2">Phone Numbers</p>
          <div className="flex justify-end w-1/2">
            <Button
              content="add Number"
              icon="plus"
              className="bg-transparent font-normal text-primaryRedColor-default"
              onClick={ (e) => appendInput(e) }
            />
            </div>
            
            
            </div>
            {inputs.map((input) => {
                            return <> 

            <div className="flex w-full">
              <div className="w-1/2 flex">
              <Form.Field key={count}>
               
               <FormikControl
                 name="phoneNumber"
                 control="input"
                 value={input}
                 onChange ={(e)=>this.handleAddInput(e)}
                 
               />
             </Form.Field>
             
              </div>
            <div className="flex justify-end w-1/2">
            <Button
              
              icon="delete"
              className="bg-transparent font-normal text-primaryRedColor-default w-1/3"
              onClick={ () => handleRemove(input.id) }
            />
            </div>
           
            </div>
           
            </>
            })}

<div className="flex w-full">
          <p className="mb-0 w-1/2">Vat</p>
          <div className="flex justify-end w-1/2">
            <Button
              content="Add Vat"
              icon="plus"
              className="bg-transparent font-normal text-primaryRedColor-default"
              onClick={ (e) => appendVatInput(e) }
            />
            </div>
            
            
            </div>
            {vatInput.map((vat,i) => {
                            return <> 

            <div className="flex w-full">
              <div className="w-1/2 flex">
              <Form.Field key={i}>
               
               <FormikControl
                 name="phoneNumber"
                 control="input"
                 value={vat}
                 onChange ={(e)=>this.handleAddVatInput(e)}
                 
               />
             </Form.Field>
             
              </div>
            <div className="flex justify-end w-1/2">
            <Button
              
              icon="delete"
              className="bg-transparent font-normal text-primaryRedColor-default w-1/3"
              onClick={ () => handleRemoveVat(vat.id) }
            />
            </div>
           
            </div>
           
            </>
            })}

            

            
            <Form.Field>
              <label className="text-labelColor text-base font-normal">
                Country
              </label>
              <CountryDropdown
                name="selectedCountry"
                value={country.setCountry}
                onChange={val => selectCountry(val)}
              />
            </Form.Field>
            <Form.Field>
              <label className="text-base font-normal text-labelColor">
                City
              </label>
              <RegionDropdown
                name="selectedRegion"
                country={country.setCountry}
                value={region.setRegion}
                onChange={val => selectRegion(val)}
              />
            </Form.Field>
            <Form.Field>
              <FormikControl
                name="shopAddress"
                control="input"
                label="Shop Address"
              />
            </Form.Field>
            <Form.Field>
              <FormikControl
                name="isAgent"
                label="My shop is able to sell spare parts."
                control="checkbox"
                onChange={handleOnChangeIsAgent}
              />
            </Form.Field>

            <Form.Field>
              <FormikControl
                name="hasRecovery"
                label="My shop has recovery service for cars."
                control="checkbox"
                onChange={handleOnChangeHasRecovery}
              />
            </Form.Field>
            <div className="my-10 text-center flex justify-start">
              
          <Button
            content="Save"
            className="btn-primary"
            onClick={handleOnSubmit}
          />
        </div>

        
           
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ShopLocation
