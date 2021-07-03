import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal} from 'semantic-ui-react'
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar'
import ShopInfoStep from '../components/auth/RegisterSteps/shopInfoStep'
import LocationInformation from '../components/auth/RegisterSteps/LocationInformation'
import BrandsAndServices from '../components/auth/RegisterSteps/BrandsAndServices'
import WorkingHours from '../components/auth/RegisterSteps/WorkingHours'
import {useUser} from '../context/UserContext'
import useAsync from '../hooks/useAsync'
import {createNewShop} from '../services/ShopService'
import {useToasts} from 'react-toast-notifications'
import {useShop} from '../context/ShopContext'

const CreateShopModal = () => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const [step, setStep] = useState(1)
  const [stepTitle, setStepTitle] = useState({
    title: '',
    desc: '',
  })
  const [shop, setShop] = useShop()
  const [user, setUser] = useUser()
  const [state, setState] = useState({})
  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()

  useEffect(() => {
    if (showModal.modalName === 'createShop') {
      console.log('open')
      setOpen(true)
    } else {
      console.log('here')
      setOpen(false)
    }
  }, [showModal])

  const handleNextStep = values => {
    console.log(values)
    switch (values.type) {
      case 'step':
        setState({...state, ...values.value})
        setStep(prev => prev + 1)
        return
      case 'submit':
        console.log(state, values)
        const newShop = new FormData()

        newShop.append('nameEN', state.shopName)
        newShop.append('nameAR', state.shopName)
        newShop.append('country', values.value.country)
        newShop.append('city', values.value.city)
        newShop.append('address', values.value.shopAddress)
        newShop.append('description', state.shopDesc)
        newShop.append('logo', state.logo)
        newShop.append('coverPhoto', state.coverPhoto)
        newShop.append('hasRecovery', state.hasRecovery)
        newShop.append('shopType', JSON.parse(user).role)
        newShop.append('isAgent', state.isAgent)

        run(createNewShop(newShop))
          .then(({data}) => {
            console.log(data)
            addToast(data.message, {appearance: 'success'})
            setShowModal({modalName: '', data: null})
            setShop(JSON.stringify(data.data._id))
          })
          .catch(e => {
            console.log(e)
          })
    }
  }

  return (
    <Modal
      closeIcon
      open={open}
      onClose={() => setShowModal({modalName: '', data: null})}
    >
      <Modal.Content scrolling>
        <div className="bg-blue-50 p-5 flex justify-center items-center rounded-2xl">
          <CircularProgressbarWithChildren
            minValue={0}
            maxValue={2}
            strokeWidth={3}
            className="w-24"
            styles={buildStyles({
              backgroundColor: 'white',
              pathColor: '#f2421b',
              trailColor: 'transparent',
            })}
            value={step}
            background={true}
            counterClockwise={true}
          >
            <p className="text-3xl text-primaryRedColor-default font-light">
              <span className="font-medium">{step}</span>/2
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
          {step === 1 && (
            <ShopInfoStep
              nextStep={v => handleNextStep(v)}
              values={state}
              stepTitle={v => setStepTitle(v)}
              loading={isLoading}
            />
          )}
        </div>

        <div className="mt-6">
          {step === 2 && (
            <LocationInformation
              nextStep={v => handleNextStep(v)}
              values={state}
              stepTitle={v => setStepTitle(v)}
              loading={isLoading}
            />
          )}
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default CreateShopModal
