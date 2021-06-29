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
              
            />
            </div>
            
            
            </div>
            <Form.Field>
              <FormikControl
                name="phoneNumber"
                control="input"
              />
            </Form.Field>

            
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
           
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ShopLocation
