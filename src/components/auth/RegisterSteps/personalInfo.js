import {useState} from 'react'
import {Header, Icon, Form, Button} from 'semantic-ui-react'
import {IoArrowBack} from 'react-icons/io5'
import {Formik} from 'formik'
import FormikControl from '../../formik/FormikControl'
import * as Yup from 'yup'
import useAsync from '../../../hooks/useAsync'
import {useToasts} from 'react-toast-notifications'
import useMediaQuery from '../../../hooks/use-media-query'

const PersonalInfoStep = ({handleBack, nextStep, values, loading}) => {
  // const {addToast} = useToasts()
  const isSmall = useMediaQuery('(max-width: 992px)')

  const personalSchema = Yup.object({
    nameEN: Yup.string().required('Empty name'),
    email: Yup.string()
      .required('Empty email address')
      .email('Invalid Email Address'),
    password: Yup.string().required('Empty Password'),
    confirmPassword: Yup.string()
      .required('Enter confirm Password')
      .oneOf([Yup.ref('password'), null], 'Password is not match'),
  })
  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()

  const [state, setState] = useState({
    nameEN: values.nameEN || '',
    email: values.email || '',
    password: values.password || '',
    confirmPassword: values.confirmPassword || '',
    referralCode: values.referralCode || '',
  })

  const handleOnSubmit = values => {
    console.log(values)
    // run(signup(state))
    //   .then(({data}) => {
    //     console.log(data)
    //     setState(
    //       JSON.stringify({
    //         nameEN: data.data.nameEN,
    //         email: data.data.email,
    //         password: data.data.password,
    //         confirmPassword: data.data.confirmPassword,
    //         referralCode: data.data.referralCode,
    //       }),
    //     )
    //     nextStep({type: 'step', value: values})

    //   })
    //   .catch(e => {
    //     console.log(e)
    //     e && e.errors?.map(err => addToast(err.message, {appearance: 'error'}))
    //   })
    nextStep({type: 'step', value: values})
  }
  return (
    <div>
      <div className="flex items-center">
        <div
          className="flex justify-start cursor-pointer"
          onClick={() => handleBack(true)}
        >
          <IoArrowBack
            size={30}
            className="text-labelColor text-lg text-left"
          />
        </div>
        <div className="flex justify-center w-full">
          <Header as="h3" className=" text-labelColor font-semibold m-0">
            Create New Account
          </Header>
        </div>
      </div>
      <div className={isSmall ? 'my-16 px-5' : 'my-16 px-40'}>
        <Formik
          validationSchema={personalSchema}
          initialValues={state}
          onSubmit={handleOnSubmit}
        >
          {formik => (
            <Form loading={loading} onSubmit={formik.submitForm}>
              <Form.Field required>
                <FormikControl
                  name="nameEN"
                  label="Full Name"
                  control="input"
                />
              </Form.Field>

              <Form.Field required>
                <FormikControl
                  name="email"
                  label="Email Address"
                  control="input"
                />
              </Form.Field>

              <Form.Field required>
                <FormikControl
                  name="password"
                  label="Password"
                  type="password"
                  control="input"
                />
              </Form.Field>

              <Form.Field required>
                <FormikControl
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  control="input"
                />
              </Form.Field>

              <Form.Field>
                <FormikControl
                  name="referralCode"
                  label="Referral Code"
                  control="input"
                />
              </Form.Field>

              <div className="mt-10 text-center">
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
    </div>
  )
}

export default PersonalInfoStep
