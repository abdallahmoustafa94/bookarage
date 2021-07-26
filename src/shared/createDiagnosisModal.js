import {Formik} from 'formik'
import {useEffect} from 'react'
import {useContext, useState} from 'react'
import {Button, Form, Modal} from 'semantic-ui-react'
import FormikControl from '../components/formik/FormikControl'
import DiagnosisFormStep from '../components/requests/requestsModals/diagnosisForm'
import MaintenanceCheckStep from '../components/requests/requestsModals/MaintenanceCheck'
import StateContext from '../context/stateContext'
import useMediaQuery from '../hooks/use-media-query'

const CreateDiagnosis = ({updateRequests}) => {
  const {showModal, setShowModal} = useContext(StateContext)
  const [open, setOpen] = useState(false)
  const isSmall = useMediaQuery('(max-width: 992px)')
  const [step, setStep] = useState('overview')

  useEffect(() => {
    if (showModal.modalName === 'createDiagnosis') {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [showModal])
  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeOnDimmerClick={false}
      closeIcon
      className="main-font"
      open={open}
    >
      <Modal.Content scrolling>
        <div className={isSmall ? 'px-5' : 'px-32'}>
          <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Create Diagnosis
          </p>
          <p className="text-center text-labelColor text-base font-normal">
            Diagnose car for maintenance and required parts
          </p>
        </div>
        {step === 'overview' && (
          <MaintenanceCheckStep
            carValue={showModal?.data}
            nextStep={v => setStep(v)}
          />
        )}

        {step === 'diagnosis' && (
          <DiagnosisFormStep
            serviceData={showModal?.data}
            updateRequests={v => updateRequests(v)}
          />
        )}
      </Modal.Content>
    </Modal>
  )
}

export default CreateDiagnosis
