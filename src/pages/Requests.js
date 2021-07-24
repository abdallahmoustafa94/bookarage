import New from '../components/requests/New'
import Accepted from '../components/requests/Accepted'
import CarArrived from '../components/requests/CarArrived'
import Ongoing from '../components/requests/Ongoing'
import CarReady from '../components/requests/CarReady'
import {Tab} from 'semantic-ui-react'
import Auth from '../config/auth'
import AssignedRequests from '../components/requests/AssignedRequests'

const Requests = () => {
  const panes = [
    {
      ...(Auth.isTechnician() && {
        menuItem: 'Assigned Requests',
        render: () => <AssignedRequests />,
      }),
    },
    {
      ...(!Auth.isTechnician() && {
        menuItem: 'New',
        render: () => <New />,
      }),
    },
    {
      ...(!Auth.isTechnician() && {
        menuItem: 'Accepted',
        render: () => <Accepted />,
      }),
    },
    {
      ...(!Auth.isTechnician() && {
        menuItem: 'Car Arrived',
        render: () => <CarArrived />,
      }),
    },
    {
      ...(!Auth.isTechnician() && {
        menuItem: 'On Going',
        render: () => <Ongoing />,
      }),
    },
    {
      ...(!Auth.isTechnician() && {
        menuItem: 'Car Ready',
        render: () => <CarReady />,
      }),
    },
  ]

  return (
    <div className="md:px-24 xs:px-8  ">
      <Tab menu={{text: true, className: 'wrapped'}} panes={panes} />
    </div>
  )
}

export default Requests
