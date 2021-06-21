import {Formik} from 'formik'
import {useEffect, useState} from 'react'
import {Form, Image, Button, Select, Label} from 'semantic-ui-react'
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector'

import FormikControl from '../../formik/FormikControl'
import photoImage from '../../../assets/images/photo-ic.svg'
// import '../../../assets/css/shopinfostep.css'

const LocationInformation = ({step, values, nextStep, loading, stepTitle}) => {
  const [country, setCountry] = useState({
    country: '',
    setCountry: '',
  })
  const [region, setRegion] = useState({
    region: '',
    setRegion: '',
  })
  useEffect(() => {
    stepTitle({
      title: 'Location Information',
      desc: 'Country, City, and location on map',
    })
  }, [])

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
    <div className="px-32">
      <Formik
        initialValues={{
          country: values.country || '',
          region: values.region || '',
          shopAddress: values.shopAddress,
        }}
        onSubmit={handleOnSubmit}
      >
        {formik => (
          <Form loading={loading} onSubmit={formik.submitForm}>
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

export default LocationInformation
