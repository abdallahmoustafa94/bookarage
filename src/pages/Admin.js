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
      <div className="bg-gray-100 ">
        <div className="bg-white flex w-full lg:px-12 py-2 items-center ">
          <div className="flex justify-start w-1/2">
            <Image src={logo} size="small" />
          </div>
          <div className="flex justify-end w-1/2">
            <p>Craig Vargas</p>
          </div>
        </div>
        <div>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <div>
                  <Menu className="flex flex-col admin-menu py-8 lg:h-screen">
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
              </Grid.Column>
              <Grid.Column width={13}>
                <div className="lg:px-8 py-8 mx-auto">
                  {activeMenu === 'registrationApproval' && (
                    <RegistrationApprovals />
                  )}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Admin
