import {useEffect, useState} from 'react'
import {useToasts} from 'react-toast-notifications'
import AppointmentTable from '../components/Dashboard/appointmentTable'
import CarArrivedTable from '../components/Dashboard/carArrivedTable'
import AssignTechModal from '../components/Dashboard/modals/assignTech.modal'
import RequestTabs from '../components/requests/requestTabs'
import WorkInProgressTable from '../components/Dashboard/workInProgressTable'
import EstimatedSent from '../components/Dashboard/EstimatedRent'
import CarReady from '../components/Dashboard/CarReady'
import Invoices from '../components/Dashboard/Invoices'
import Auth from '../config/auth'
import {useShop} from '../context/ShopContext'
import {useUser} from '../context/UserContext'
import useAsync from '../hooks/useAsync'
import {myRequests, updateRequest} from '../services/RequestService'

const DashboardPage = () => {
  const [activeMenu, setActiveMenu] = useState('appointment')
  const {run, isLoading} = useAsync()
  const [user, setUser] = useUser()
  const parsedUser = JSON.parse(user)
  const [shop, setShop] = useShop()
  const [updateRequests, setUpdateRequests] = useState(false)
  const {addToast} = useToasts()
  const [state, setState] = useState({
    appointment: [],
    carArrived: [],
    inProgress: [],
    estimatedSent: [],
    estimatedApproved: [],
    invoiceCreated: [],
    carReady: [],
  })

  useEffect(() => {
    if (!Auth.getShopId() === 0) return
    run(myRequests(Auth.getShopId()))
      .then(({data}) => {
        console.log(data)
        let requestTypes = {
          appointment: [],
          carArrived: [],
          estimatedSent: [],
          inProgress: [],
          carReady: [],
          invoicePaid: [],
        }
        data.data?.map(r => {
          if (r.requestType === 'ServiceRequest') {
            if ([1, 2].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.appointment.push(r)
            } else if ([3, 4].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.carArrived.push(r)
            } else if ([7].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.inProgress.push(r)
            } else if ([5].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.estimatedSent.push(r)
            } else if ([6, 8, 9].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.carReady.push(r)
            } else if ([10].includes(r.requestDetails.requestStatus.id)) {
              requestTypes.invoicePaid.push(r)
            }
          }
        })
        setState(requestTypes)
        console.log(state.appointment)
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
  }, [updateRequests, shop])

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
    <section className=" rounded-lg">
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

        {activeMenu === 'estimatedSent' && (
          <EstimatedSent requests={state.estimatedSent} loading={isLoading} />
        )}
        {activeMenu === 'carReady' && (
          <CarReady requests={state.carReady} loading={isLoading} />
        )}
        {activeMenu === 'invoiceCreated' && (
          <Invoices requests={state.invoiceCreated} loading={isLoading} />
        )}
      </div>
    </section>
  )
}

export default DashboardPage
