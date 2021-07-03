import {Formik} from 'formik'
import {useEffect, useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector'

import FormikControl from '../../formik/FormikControl'
import useMediaQuery from '../../../hooks/use-media-query'

const LocationInformation = ({step, values, nextStep, loading, stepTitle}) => {
  const isSmall = useMediaQuery('(max-width: 992px)')

  const [country, setCountry] = useState({
    country: '',
    setCountry: '',
  })
  const [city, setCity] = useState({
    city: '',
    setCity: '',
  })
  useEffect(() => {
    stepTitle({
      title: 'Location Information',
      desc: 'Country, City, and location on map',
    })
  }, [])

  const handleOnSubmit = values => {
    console.log(values)
    const locationInfo = {
      ...values,
      country: country.setCountry,
      city: city.setCity,
    }
    nextStep({
      type: window.location.pathname.startsWith('/auth') ? 'step' : 'submit',
      value: locationInfo,
    })
  }

  const selectCountry = val => {
    setCountry({...country, setCountry: val})
  }

  const selectCity = val => {
    setCity({...city, setCity: val})
  }

  return (
    <div className={isSmall ? 'px-5' : 'px-32'}>
      <Formik
        initialValues={{
          country: values.country || '',
          city: values.city || '',
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
                name="country"
                value={country.setCountry}
                onChange={val => selectCountry(val)}
              />
            </Form.Field>
            <Form.Field>
              <label className="text-base font-normal text-labelColor">
                City
              </label>
              <RegionDropdown
                name="city"
                country={country.setCountry}
                value={city.setCity}
                onChange={val => selectCity(val)}
              />
            </Form.Field>
            <Form.Field>
              <FormikControl
                name="shopAddress"
                control="input"
                label="Shop Address"
              />
              <small className="text-red-600">
                Google maps will be imported very soon, Please pick your
                location from{' '}
                <a href="https://www.google.com/maps/" target="_blank">
                  google maps
                </a>{' '}
                site then paste your address here.
              </small>
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
