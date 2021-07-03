import {Header, Icon, Form, Button, Image} from 'semantic-ui-react'
import {IoArrowBack} from 'react-icons/io5'
import {Formik} from 'formik'
import FormikControl from '../../formik/FormikControl'
import verifyImage from '../../../assets/images/verifyMobile.svg'
import useMediaQuery from '../../../hooks/use-media-query'

const VerifyOTP = ({handleBack, nextStep, values, loading}) => {
  const isSmall = useMediaQuery('(max-width: 992px)')

  const handleOnSubmit = values => {
    console.log(values)
    nextStep({type: 'step', value: values})
  }
  return (
    <div>
      <div className="flex items-center w-full">
        <div
          className="flex justify-start cursor-pointer"
          onClick={() => handleBack(true)}
        >
          <IoArrowBack
            size={30}
            className="text-labelColor text-lg text-left"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <Header
            as="h3"
            className=" text-labelColor text-center font-semibold m-0"
          >
            Create New Account
          </Header>
        </div>
      </div>
      <div>
        <div>
          <Image src={verifyImage} className="m-auto w-60 h-60" />
        </div>
        <p className={`${isSmall ? 'px-5' : 'px-20'} text-center mt-2`}>
          Please enter the recieved activation code on your phone
        </p>
      </div>

      <div className={`${isSmall ? 'px-5' : 'px-20'}`}>
        <Formik
          initialValues={{code: values?.code || ''}}
          onSubmit={handleOnSubmit}
        >
          {formik => (
            <Form onSubmit={formik.submitForm}>
              <Form.Field className="text-center py-5">
                <FormikControl name="code" control="verifyCode" />

                <div className="mt-5 text-center">
                  <p className="font-semibold text-mainBgColor-hover mb-1">
                    {values?.phoneNumber}
                  </p>
                  <p
                    className="text-primaryRedColor-default cursor-pointer text-base"
                    onClick={() => handleBack(true)}
                  >
                    Wrong Phone Number ?
                  </p>
                </div>
              </Form.Field>

              <div className="my-10 text-center">
                <Button
                  content="Continue"
                  disabled={formik.values.code?.length === 6 ? false : true}
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

export default VerifyOTP
