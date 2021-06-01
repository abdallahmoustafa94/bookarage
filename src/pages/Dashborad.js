import {useEffect, useState} from 'react'
import {useToasts} from 'react-toast-notifications'
import AppointmentTable from '../components/Dashboard/appointmentTable'
import CarArrivedTable from '../components/Dashboard/carArrivedTable'
import AssignTechModal from '../components/Dashboard/modals/assignTech.modal'
import RequestTabs from '../components/Dashboard/requestTabs'
import WorkInProgressTable from '../components/Dashboard/workInProgressTable'
import Auth from '../config/auth'
import {useUser} from '../context/UserContext'
import useAsync from '../hooks/useAsync'
import {myRequests, updateRequest} from '../services/RequestService'

const DashboardPage = () => {
  const [activeMenu, setActiveMenu] = useState('appointment')
  const {run, isLoading} = useAsync()
  const [user, setUser] = useUser()
  const parsedUser = JSON.parse(user)
  const [updateRequests, setUpdateRequests] = useState(false)
  const {addToast} = useToasts()
  const [state, setState] = useState({
    appointment: [],
    carArrived: [],
    inProgress: [],
    estimatedSent: [],
    estimatedApproved: [],
    invoiceCreated: [],
  })

  useEffect(() => {
    if (!parsedUser?.shopId) return
    run(myRequests(parsedUser.shopId))
      .then(({data}) => {
        console.log(data)
        let requestTypes = {
          appointment: [],
          carArrived: [],
          inProgress: [],
          estimatedSent: [],
          estimatedApproved: [],
          invoiceCreated: [],
        }
        data.data?.map(r => {
          if (r.requestType === 'ServiceRequest') {
            if ([1, 2].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.appointment.push(r)
            } else if ([3].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.carArrived.push(r)
            } else if ([4].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.inProgress.push(r)
            } else if ([5].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.estimatedSent.push(r)
            } else if ([6].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.estimatedApproved.push(r)
            } else if ([7].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.invoiceCreated.push(r)
            }
          }
        })
        setState(requestTypes)
        // setState({
        //   ...state,
        //   appointment: data.data.appointments,
        //   carArrived: data.data.carArrived,
        //   inProgress: data.data.workInProgress,
        //   estimatedSent: data.data.estimatedSent,
        //   estimatedApproved: data.data.estimatedApproved,
        //   invoiceCreated: data.data.invoiceCreated,
        // })
      })
      .catch(e => {
        console.log(e)
      })
  }, [updateRequests, user])

  const handleUpdateRequest = status => {
    run(updateRequest({requestId: status.id, requestStatus: status.statusId}))
      .then(({data}) => {
        addToast(data.message, {appearance: 'success'})
        setUpdateRequests(prev => !prev)
      })
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <section className="bg-white rounded-lg">
      <AssignTechModal isUpdated={value => setUpdateRequests(prev => !prev)} />
      <RequestTabs
        activeMenu={activeMenu}
        setActiveMenu={value => setActiveMenu(value)}
      />
      <div className="p-10 relative">
        {activeMenu === 'appointment' && (
          <AppointmentTable
            requests={state.appointment}
            loading={isLoading}
            updateRequest={value => handleUpdateRequest(value)}
          />
        )}
        {activeMenu === 'carArrived' && (
          <CarArrivedTable requests={state.carArrived} loading={isLoading} />
        )}

        {activeMenu === 'inProgress' && (
          <WorkInProgressTable
            requests={state.inProgress}
            loading={isLoading}
          />
        )}
      </div>
    </section>
  )
}

export default DashboardPage
