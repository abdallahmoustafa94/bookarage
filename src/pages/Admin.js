import {useState} from 'react'
import {Menu, Image, Grid, Segment} from 'semantic-ui-react'
import Auth from '../config/auth'
import logo from '../assets/images/logo.svg'
import RegistrationApprovals from '../components/AdminComponents/RegistrationApprovals'

const Admin = () => {
  const [activeMenu, setActiveMenu] = useState('registrationApproval')
  const [activeDetails, setActiveDetails] = useState(false)
  const [state, setState] = useState({
    registrationApproval: [],
    dashboard: [],
  })

  return (
    <div>
      <div className="bg-gray-100 h-full">
        <div className="bg-white flex w-full lg:px-12 py-2 items-center ">
          <div className="flex justify-start w-1/2">
            <Image src={logo} size="small" />
          </div>
          <div className="flex justify-end w-1/2">
            <p>Craig Vargas</p>
          </div>
        </div>
        <div className="flex w-full items-start ">
          <div className="flex flex-col w-1/4 h-full">
            <Menu vertical className=" admin-menu py-8 ">
              <Menu.Item
                active={activeMenu === 'dashboard'}
                onClick={() => setActiveMenu('dashboard')}
                className="flex justify-center"
              >
                <p
                  className={`  font-normal  ${
                    activeMenu === 'dashboard'
                      ? 'bg-primaryRedColor-default text-white rounded-full py-2 px-4'
                      : 'text-labelColor'
                  } `}
                >
                  Dashboard
                </p>
              </Menu.Item>
              <Menu.Item
                active={activeMenu === 'registrationApproval'}
                onClick={() => setActiveMenu('registrationApproval')}
                className="flex justify-center"
              >
                <p
                  className={`  font-normal ${
                    activeMenu === 'registrationApproval'
                      ? 'bg-primaryRedColor-default text-white rounded-full py-2 px-4'
                      : 'text-labelColor'
                  }`}
                >
                  Registration Approvals
                </p>
              </Menu.Item>
              <Menu.Item
                active={activeMenu === 'menuItem'}
                onClick={() => setActiveMenu('menuItem')}
                className="flex justify-center"
              >
                <p
                  className={`  font-normal ${
                    activeMenu === 'menuItem'
                      ? 'bg-primaryRedColor-default text-white rounded-full py-2 px-4'
                      : 'text-labelColor'
                  } mb-1`}
                >
                  Menu Item
                </p>
              </Menu.Item>
              <Menu.Item
                active={activeMenu === 'menuItem'}
                onClick={() => setActiveMenu('menuItem')}
                className="flex justify-center"
              >
                <p
                  className={`  font-normal ${
                    activeMenu === 'menuItem'
                      ? 'bg-primaryRedColor-default text-white rounded-full py-2 px-4'
                      : 'text-labelColor'
                  } mb-1`}
                >
                  Menu Item
                </p>
              </Menu.Item>
              <Menu.Item
                active={activeMenu === 'menuItem'}
                onClick={() => setActiveMenu('menuItem')}
                className="flex justify-center"
              >
                <p
                  className={`  font-normal ${
                    activeMenu === 'menuItem'
                      ? 'bg-primaryRedColor-default text-white rounded-full py-2 px-4'
                      : 'text-labelColor'
                  } mb-1`}
                >
                  Menu Item
                </p>
              </Menu.Item>
            </Menu>
          </div>

          <div className="flex  w-3/4 lg:px-8 py-8 mx-auto flex-grow">
            {activeMenu === 'registrationApproval' && <RegistrationApprovals />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
