import {useState} from 'react'
import {Menu, Button} from 'semantic-ui-react'
import AddDiagnosis from './requestsModals/AddDiagnosis'
import AssignMechanic from './requestsModals/AssignMechanic'
import SendRecovery from './requestsModals/SendRecovery'

const RequestsLayout = ({activeMenu, setActiveMenu}) => {
  return (
    <div>
      <SendRecovery />
      <AssignMechanic />
      <AddDiagnosis />
      <div className="flex ">
        <div className=" w-1/2 text-gray-700 flex justify-center">
          <Button
            content="New"
            className={`${
              activeMenu === 'new'
                ? 'bg-primaryRedColor-default text-white rounded py-4 px-8 mt-4 '
                : 'bg-transparent text-gray-500 rounded-full py-4 px-2 mt-4 mr-4'
            } font-normal`}
            active={activeMenu === 'new'}
            onClick={() => setActiveMenu('new')}
          ></Button>

          <Button
            content="accepted "
            className={`${
              activeMenu === 'accepted'
                ? 'bg-primaryRedColor-default text-white rounded py-4 px-8 mt-4'
                : 'bg-transparent text-gray-500 rounded-full py-4 px-2 mt-4 mr-4'
            } font-normal`}
            active={activeMenu === 'accepted'}
            onClick={() => setActiveMenu('accepted')}
          ></Button>

          <Button
            content="Car Arrived"
            className={`${
              activeMenu === 'carArrived'
                ? 'bg-primaryRedColor-default text-white rounded py-4 px-8 mt-4'
                : 'bg-transparent text-gray-500 rounded-full py-4 px-2 mt-4 mr-4'
            } font-normal`}
            active={activeMenu === 'carArrived'}
            onClick={() => setActiveMenu('carArrived')}
          ></Button>

          <Button
            content="On Going"
            className={`${
              activeMenu === 'onGoing'
                ? 'bg-primaryRedColor-default text-white rounded py-4 px-8 mt-4'
                : 'bg-transparent text-gray-500 rounded-full py-4 px-2 mt-4 mr-4'
            } font-normal`}
            active={activeMenu === 'onGoing'}
            onClick={() => setActiveMenu('onGoing')}
          ></Button>
          <Button
            content="Car Ready"
            className={`${
              activeMenu === 'carReady'
                ? 'bg-primaryRedColor-default text-white rounded py-4 px-8 mt-4'
                : 'bg-transparent text-gray-500 rounded-full py-4 px-2 mt-4 '
            } font-normal`}
            active={activeMenu === 'carReady'}
            onClick={() => setActiveMenu('carReady')}
          ></Button>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default RequestsLayout
