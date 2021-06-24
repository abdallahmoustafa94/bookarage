import {Fragment, useState} from 'react'
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

const RegisterPage = () => {
  const [step, setStep] = useState(1)
  const [state, setState] = useState({
    role: '',
    nameEN: '',
    email: '',
    password: '',
    referralCode: '',
    phoneNumber: '',
    code: '',
  })
  const [stepTitle, setStepTitle] = useState({
    title: '',
    desc: '',
  })

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
        setState({...state, code: value.value.code})
        setStep(prev => prev + 1)
    }
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
      {/* TODO: Add legal license step in this line */}

      {step === 5 && <SuccessAccount nextStep={v => handleNextStep(v)} />}

      {step > 5 && (
        <Fragment>
          <div className="bg-blue-50 p-5 flex justify-center items-center rounded-2xl">
            <CircularProgressbarWithChildren
              minValue={0}
              maxValue={5}
              strokeWidth={3}
              className="w-24"
              styles={buildStyles({
                backgroundColor: 'white',
                pathColor: '#f2421b',
                trailColor: 'transparent',
              })}
              value={step - 5}
              background={true}
              counterClockwise={true}
            >
              <p className="text-3xl text-primaryRedColor-default font-light">
                <span className="font-medium">{step - 5}</span>/5
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
            {step === 6 && (
              <ShopInfoStep
                nextStep={v => handleNextStep(v)}
                values={state}
                stepTitle={v => setStepTitle(v)}
              />
            )}
          </div>
          <div className="mt-6">
            {step === 7 && (
              <LocationInformation
                nextStep={v => handleNextStep(v)}
                values={state}
                stepTitle={v => setStepTitle(v)}
              />
            )}
          </div>

          {/* TODO: Remove legal license from this step */}

          <div className="mt-6">
            {step === 8 && (
              <LegalInformation
                nextStep={v => handleNextStep(v)}
                values={state}
                stepTitle={v => setStepTitle(v)}
              />
            )}
          </div>
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
