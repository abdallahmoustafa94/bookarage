import {Fragment, useEffect, useState} from 'react'
import RoleSelectionStep from '../../components/auth/RegisterSteps/roleSelection'
import PersonalInfoStep from '../../components/auth/RegisterSteps/personalInfo'
import LocationInformation from '../../components/auth/RegisterSteps/LocationInformation'
import LegalInformation from '../../components/auth/RegisterSteps/LegalInformation'
import BrandsAndServices from '../../components/auth/RegisterSteps/BrandsAndServices'
import WorkingHours from '../../components/auth/RegisterSteps/WorkingHours'
import PhoneStep from '../../components/auth/RegisterSteps/phoneStep'
import VerifyOTP from '../../components/auth/RegisterSteps/verifyOTP'
import SuccessAccount from '../../components/auth/RegisterSteps/successAccount'
import LoginPage from '../auth/Login'
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ShopInfoStep from '../../components/auth/RegisterSteps/shopInfoStep'
import AddBrandModal from '../../shared/addBrandModal'
import AddServiceModal from '../../shared/addServiceModal'
import DeleteServiceModal from '../../shared/deleteServiceModal'
import useAsync from '../../hooks/useAsync'
import {
  signup,
  verifyAndSendOTP,
  verifyOTPCode,
} from '../../services/AuthServices'
import Auth from '../../config/auth'
import {useToasts} from 'react-toast-notifications'
import {useUser} from '../../context/UserContext'

const RegisterPage = () => {
  const [step, setStep] = useState(1)
  const [user, setUser] = useUser()
  const [state, setState] = useState({
    role: '',
    nameEN: '',
    email: '',
    password: '',
    referralCode: '',
    phoneNumber: '',
    code: '',
    VATNumber: '',
    licenseFile: '',
  })
  const [stepTitle, setStepTitle] = useState({
    title: '',
    desc: '',
  })

  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()

  useEffect(() => {
    if (!Auth.isSignupAuth()) return
    setStep(7)
  }, [])

  const handleNextStep = value => {
    switch (value.type) {
      case 'step':
        console.log(value.value)
        if (value.value !== null) {
          setState({...state, ...value.value})
        }
        // Object.keys(value.value).map((v, i) => {
        //   console.log(v, Object.values(value.value)[i])
        //   setState({...state, [v]: Object.values(value.value)[i]})
        // })
        setStep(prev => prev + 1)
        return
      case 'sendOTP':
        setState({...state, phoneNumber: value.value.phoneNumber})
        setStep(prev => prev + 1)
        return
      case 'submit':
        // setState({...state, code: value.value.code})
        // setStep(prev => prev + 1)
        const newUser = new FormData()

        newUser.append('nameEN', state.nameEN)
        newUser.append('nameAR', state.nameEN)
        newUser.append('email', state.email)
        newUser.append('password', state.password)
        newUser.append('phoneNumber', state.phoneNumber)
        newUser.append('referralCode', state.referralCode)
        newUser.append('role', JSON.parse(localStorage.getItem('role')))
        newUser.append('isApproved', false)
        newUser.append('country', 'Egypt')
        newUser.append('city', 'Alexandria')
        newUser.append('VATNumber', value.value.VATNumber)
        newUser.append('licenseFile', value.value.licenseFile)

        run(signup(newUser))
          .then(({data}) => {
            console.log(data)
            setUser(
              JSON.stringify({
                nameEN: data.data.nameEN,
                nameAR: data.data.nameAR,
                role: data.data.role,
                avatar: data.data?.avatar,
                _id: data.data._id,
              }),
            )
            Auth.setSignupToken(data.data.token)
            setStep(6)
          })
          .catch(e => {
            console.log(e)
            e &&
              e.errors?.map(err => addToast(err.message, {appearance: 'error'}))
          })
        return
      case 'submitShop':
        console.log(state)
        return
      default:
        return state
    }

    // run(verifyAndSendOTP(state))
    // .then(({data}) => {
    //   console.log(data)
    //   setState(
    //     JSON.stringify({

    //       ...state ,phoneNumber: data.data.phoneNumber
    //     }),
    //   )
    //     console.log(state)
    // })
    // .catch(e => {
    //   console.log(e)
    //   e && e.errors?.map(err => addToast(err.message, {appearance: 'error'}))
    // })

    // run(verifyOTPCode(state))
    // .then(({data}) => {
    //   console.log(data)
    //   setState(
    //     JSON.stringify({

    //       ...state ,phoneNumber: data.data.phoneNumber,code:data.data.code
    //     }),
    //   )
    //     console.log(state)
    // })
    // .catch(e => {
    //   console.log(e)
    //   e && e.errors?.map(err => addToast(err.message, {appearance: 'error'}))
    // })
  }
  return (
    <div className={step === 1 ? 'px-20 py-10' : 'py-10'}>
      <AddBrandModal />
      <AddServiceModal />
      <DeleteServiceModal />
      {step === 1 && <RoleSelectionStep nextStep={v => handleNextStep(v)} />}
      {step === 2 && (
        <PersonalInfoStep
          handleBack={v => setStep(prev => prev - 1)}
          nextStep={v => handleNextStep(v)}
          values={state}
        />
      )}
      {step === 3 && (
        <PhoneStep
          handleBack={v => setStep(prev => prev - 1)}
          nextStep={v => handleNextStep(v)}
          values={state}
        />
      )}
      {step === 4 && (
        <VerifyOTP
          handleBack={v => setStep(prev => prev - 1)}
          values={state}
          nextStep={v => handleNextStep(v)}
        />
      )}
      <div className="mt-6">
        {step === 5 && (
          <LegalInformation
            nextStep={v => handleNextStep(v)}
            values={state}
            stepTitle={v => setStepTitle(v)}
            loading={isLoading}
          />
        )}
      </div>

      {step === 6 && <SuccessAccount nextStep={v => handleNextStep(v)} />}

      {step > 6 && (
        <Fragment>
          <div className="bg-blue-50 p-5 flex justify-center items-center rounded-2xl">
            <CircularProgressbarWithChildren
              minValue={0}
              maxValue={4}
              strokeWidth={3}
              className="w-24"
              styles={buildStyles({
                backgroundColor: 'white',
                pathColor: '#f2421b',
                trailColor: 'transparent',
              })}
              value={step - 6}
              background={true}
              counterClockwise={true}
            >
              <p className="text-3xl text-primaryRedColor-default font-light">
                <span className="font-medium">{step - 6}</span>/4
              </p>
            </CircularProgressbarWithChildren>

            <div className="text-center">
              <p className="font-semibold text-labelColor text-xl ltr:ml-7 rtl:mr-7 mb-1">
                {stepTitle.title}
              </p>
              <p className="font-normal text-gray-400 text-base ltr:ml-7 rtl:mr-7">
                {stepTitle.desc}
              </p>
            </div>
          </div>

          <div className="mt-6">
            {step === 7 && (
              <ShopInfoStep
                nextStep={v => handleNextStep(v)}
                values={state}
                stepTitle={v => setStepTitle(v)}
              />
            )}
          </div>
          <div className="mt-6">
            {step === 8 && (
              <LocationInformation
                nextStep={v => handleNextStep(v)}
                values={state}
                stepTitle={v => setStepTitle(v)}
              />
            )}
          </div>

          {/* TODO: Remove legal license from this step */}

          <div className="mt-6">
            {step === 9 && (
              <BrandsAndServices
                nextStep={v => handleNextStep(v)}
                values={state}
                stepTitle={v => setStepTitle(v)}
              />
            )}
          </div>
          <div className="mt-6">
            {step === 10 && (
              <WorkingHours
                nextStep={v => handleNextStep(v)}
                values={state}
                stepTitle={v => setStepTitle(v)}
              />
            )}
          </div>
          <div className="mt-6">
            {step === 11 && (
              <LoginPage
                nextStep={v => handleNextStep(v)}
                values={state}
                stepTitle={null}
              />
            )}
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default RegisterPage
