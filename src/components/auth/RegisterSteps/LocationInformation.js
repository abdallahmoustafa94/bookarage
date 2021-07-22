import {Formik} from 'formik'
import {useEffect} from 'react'
import {Form, Button} from 'semantic-ui-react'
import FormikControl from '../../formik/FormikControl'
import useMediaQuery from '../../../hooks/use-media-query'
import {keys} from '../../../config/keys'

const LocationInformation = ({step, values, nextStep, loading, stepTitle}) => {
  const isSmall = useMediaQuery('(max-width: 992px)')

  useEffect(() => {
    stepTitle({
      title: 'Location Information',
      desc: 'Country, City, and location on map',
    })
  }, [])

  const handleOnSubmit = formikValues => {
    // console.log(values)

    const registerContent = JSON.parse(localStorage.getItem('registerDetails'))
    localStorage.setItem(
      'registerDetails',
      JSON.stringify({...registerContent, ...formikValues}),
    )
    let stepType = ''
    if (
      ![keys.ROLES.serviceProvider, keys.ROLES.sparePart].includes(
        JSON.parse(localStorage.getItem('role')),
      )
    ) {
      if (window.location.pathname.startsWith('/auth')) {
        stepType = 'stepToHrs'
      } else {
        stepType = 'submitShop'
      }
    } else {
      if (window.location.pathname.startsWith('/auth')) {
        stepType = 'shopStep'
      } else {
        stepType = 'submitShop'
      }
    }
    nextStep({
      type: stepType,
      value: formikValues,
    })
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
              <FormikControl name="country" label="Country" control="country" />
              {/* <label className="text-labelColor text-base font-normal">
                Country
              </label>
              <CountryDropdown
                name="country"
                value={country.setCountry}
                onChange={val => selectCountry(val)}
              /> */}
            </Form.Field>
            <Form.Field>
              <FormikControl
                name="city"
                country={formik.values.country}
                label="City"
                control="city"
              />
              {/* <label className="text-base font-normal text-labelColor">
                City
              </label>
              <RegionDropdown
                name="city"
                country={country.setCountry}
                value={city.setCity}
                onChange={val => selectCity(val)}
              /> */}
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
