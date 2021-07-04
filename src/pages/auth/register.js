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
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ShopInfoStep from '../../components/auth/RegisterSteps/shopInfoStep'
import AddBrandModal from '../../shared/addBrandModal'
import AddServiceModal from '../../shared/addServiceModal'
import DeleteServiceModal from '../../shared/deleteServiceModal'
import useAsync from '../../hooks/useAsync'
import {signup} from '../../services/AuthServices'
import Auth from '../../config/auth'
import {useToasts} from 'react-toast-notifications'
import {useUser} from '../../context/UserContext'
import {createNewShop} from '../../services/ShopService'
import routes from '../../routes'
import {useHistory} from 'react-router-dom'
import useMediaQuery from '../../hooks/use-media-query'
import StayTunedStep from '../../components/auth/RegisterSteps/StayTunedStep'
import {keys} from '../../config/keys'

const RegisterPage = () => {
  const [step, setStep] = useState(1)
  const [shopStep, setShopStep] = useState(1)
  const [shopSteps, setShopSteps] = useState([0, 4])
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
    services: [],
    brands: [],
  })
  const history = useHistory()
  const [stepTitle, setStepTitle] = useState({
    title: '',
    desc: '',
  })
  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()
  const isSmall = useMediaQuery('(max-width: 992px)')

  useEffect(() => {
    if (!Auth.isSignupAuth()) return
    if (
      ![keys.ROLES.serviceProvider, keys.ROLES.sparePart].includes(
        JSON.parse(localStorage.getItem('role')),
      )
    ) {
      setShopSteps([0, 3])
    }
    setStep(7)
  }, [])

  const handleNextStep = value => {
    switch (value.type) {
      case 'step':
        // console.log(value.value)
        if (value.value !== null) {
          setState({...state, ...value.value})
        }
        // Object.keys(value.value).map((v, i) => {
        //   console.log(v, Object.values(value.value)[i])
        //   setState({...state, [v]: Object.values(value.value)[i]})
        // })
        setStep(prev => prev + 1)
        return
      case 'shopStep':
        if (value.value !== null) {
          setState({...state, ...value.value})
        }
        setShopStep(prev => prev + 1)
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
            // console.log(data)
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
            if (
              ![keys.ROLES.serviceProvider, keys.ROLES.sparePart].includes(
                JSON.parse(localStorage.getItem('role')),
              )
            ) {
              setShopSteps([0, 3])
            }
            setStep(6)
          })
          .catch(e => {
            console.log(e)
            e &&
              e.errors?.map(err => addToast(err.message, {appearance: 'error'}))
          })
        return
      case 'submitShop':
        // console.log(state, value.value)
        const setupShopContent = JSON.parse(
          localStorage.getItem('registerDetails'),
        )
        const newShop = new FormData()
        newShop.append('nameEN', setupShopContent?.shopName)
        newShop.append('nameAR', setupShopContent?.shopName)
        newShop.append('country', setupShopContent?.country)
        newShop.append('city', setupShopContent?.city)
        newShop.append('address', setupShopContent?.shopAddress)
        newShop.append('description', setupShopContent?.shopDesc)
        newShop.append('logo', state?.logo)
        newShop.append('coverPhoto', state?.coverPhoto)
        if (Auth.isServiceProvider()) {
          state.services.map((s, i) => {
            // console.log(Number(s?.serviceId.split('-')[0]))
            newShop.append(
              'services[' + i + '][serviceId]',
              Number(s?.serviceId.split('-')[0]),
            )
            newShop.append('services[' + i + '][cost]', s?.cost)
            newShop.append('services[' + i + '][details]', s?.details)
            newShop.append('services[' + i + '][isAvailable]', s?.isAvailable)
          })
          newShop.append('hasRecovery', setupShopContent?.hasRecovery)
          newShop.append('isAgent', setupShopContent?.isAgent)
        }
        newShop.append('shopType', JSON.parse(user).role)
        if (Auth.isServiceProvider() || Auth.isSparePart()) {
          state?.brands.map((b, i) => {
            newShop.append('brands[' + i + '][name]', b)
          })
        }
        setupShopContent?.workingHrs?.map((wh, i) => {
          if (wh.isOpened) {
            newShop.append('workingHrs[' + i + '][day]', wh?.day)
            newShop.append('workingHrs[' + i + '][startTime]', wh?.startTime)
            newShop.append('workingHrs[' + i + '][endTime]', wh?.endTime)
            newShop.append('workingHrs[' + i + '][isOpened]', wh?.isOpened)
          }
        })

        run(createNewShop(newShop))
          .then(({data}) => {
            console.log(data.data)
            addToast(data.message, {appearance: 'success'})
            localStorage.removeItem('registerDetails')
            Auth.logout()
            setStep(11)
          })
          .catch(e => {
            console.log(e)
          })
        return
      case 'stepToHrs':
        if (value.value !== null) {
          setState({...state, ...value.value})
        }
        setShopStep(prev => prev + 1)
        setStep(10)
      default:
        return state
    }
  }

  const handleService = v => {
    let serviceArr = [...state.services]
    const index = serviceArr.findIndex(o => o.serviceId === v.serviceId)

    if (index === -1) {
      serviceArr = [...serviceArr, v]
    } else {
      serviceArr.splice(index, 1)
      serviceArr = [...serviceArr, v]
    }

    setState({...state, services: serviceArr})
  }

  const handleDeleteService = i => {
    let serviceArr = [...state.services]
    serviceArr.splice(i, 1)
    setState({...state, services: serviceArr})
  }

  const handleDeleteBrand = i => {
    let brandsArr = [...state.brands]
    brandsArr.splice(i, 1)
    setState({...state, brands: brandsArr})
  }
  return (
    <div
      className={`
        ${step === 1 ? (isSmall ? 'px-5 py-10' : 'px-20 py-10') : 'py-10'}`}
    >
      <AddBrandModal
        brandValues={v => setState({...state, brands: v.brands})}
      />
      <AddServiceModal serviceValues={v => handleService(v)} />
      <DeleteServiceModal deletedService={handleDeleteService} />
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

      {step > 6 && step < 12 ? (
        <Fragment>
          <div className="bg-blue-50 p-5 flex justify-center items-center rounded-2xl">
            <CircularProgressbarWithChildren
              minValue={shopSteps[0]}
              maxValue={shopSteps[1]}
              strokeWidth={3}
              className="w-24"
              styles={buildStyles({
                backgroundColor: 'white',
                pathColor: '#f2421b',
                trailColor: 'transparent',
              })}
              value={shopStep}
              background={true}
              counterClockwise={true}
            >
              <p className="text-3xl text-primaryRedColor-default font-light">
                <span className="font-medium">{shopStep}</span>/{shopSteps[1]}
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
            {step === 9 && shopSteps[1] !== 3 ? (
              <BrandsAndServices
                nextStep={v => handleNextStep(v)}
                values={state}
                stepTitle={v => setStepTitle(v)}
                loading={isLoading}
                deletedBrand={v => handleDeleteBrand(v)}
              />
            ) : null}
          </div>
          <div className="mt-6">
            {step === 10 && (
              <WorkingHours
                nextStep={v => handleNextStep(v)}
                values={state}
                stepTitle={v => setStepTitle(v)}
                loading={isLoading}
              />
            )}
          </div>
        </Fragment>
      ) : null}
      <div className="mt-6">
        {step === 11 && <StayTunedStep nextStep={v => handleNextStep(v)} />}
      </div>
    </div>
  )
}

export default RegisterPage
