import {useState} from 'react'
import RequestsLayout from '../components/requests/RequestsLayout'
import New from '../components/requests/New'
import Accepted from '../components/requests/Accepted'
import CarArrived from '../components/requests/CarArrived'
import Ongoing from '../components/requests/Ongoing'
import CarReady from '../components/requests/CarReady'

const Requests = () => {
  const [activeMenu, setActiveMenu] = useState('new')
  return (
    <div>
      <RequestsLayout
        activeMenu={activeMenu}
        setActiveMenu={value => setActiveMenu(value)}
      />

      {activeMenu === 'new' && <New />}

      {activeMenu === 'accepted' && <Accepted />}

      {activeMenu === 'carArrived' && <CarArrived />}

      {activeMenu === 'onGoing' && <Ongoing />}

      {activeMenu === 'carReady' && <CarReady />}
    </div>
  )
}

export default Requests
