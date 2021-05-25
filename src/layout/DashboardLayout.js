import {useEffect, useState} from 'react'
import {Redirect, Route, Switch, useHistory, useLocation} from 'react-router'
import {Dimmer, Dropdown, Icon, Image, Loader, Menu} from 'semantic-ui-react'
import {useLanguage} from '../context/languageContext'
import {
  RiMenu2Line,
  RiNotification3Line,
  RiQrScan2Line,
  RiPercentLine,
  RiDashboardLine,
  RiWallet3Line,
  RiUserSettingsLine,
  RiUser5Line,
} from 'react-icons/ri'
import {GiWallet} from 'react-icons/gi'
import {BsPeopleCircle} from 'react-icons/bs'
import useAsync from '../hooks/useAsync'
import {useUser} from '../context/UserContext'
import {Link} from 'react-router-dom'
import routes from '../routes'
import logo from '../assets/images/logo.svg'
import {IoChatboxEllipsesOutline} from 'react-icons/io5'
import DashboardPage from '../pages/Dashborad'
import notifyImage from '../assets/images/sample.jpeg'
import {logout} from '../services/AuthServices'
import {useToasts} from 'react-toast-notifications'
import Auth from '../config/auth'
import DetailsModal from '../components/Dashboard/modals/details.modal'

const DashboardLayout = () => {
  const {run, isLoading} = useAsync()
  const [lang, setLang] = useLanguage()
  const {addToast} = useToasts()
  const [userData, setUserData] = useState()
  const [showNotification, setShowNotification] = useState(false)
  const [user, setUser] = useUser()
  const parsedUser = JSON.parse(user)
  const {pathname} = useLocation()

  const history = useHistory()

  useEffect(() => {
    if (!user) {
      history.push('/auth/login')
      return
    }
    setUserData(parsedUser)
    document.body.classList.add('bg-gray-100')
    return () => {
      document.body.classList.remove('bg-gray-100')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const handleItemClick = item => {
    history.push(routes[item])
  }

  const handleOnClickLogout = () => {
    run(logout())
      .then(({data}) => {
        addToast(data.message, {appearance: 'success'})
        Auth.logout()
        history.push(routes.login)
      })
      .catch(e => {
        console.log(e)
        if (e === undefined) return
        if (e.errors || e.errors.length > 0) {
          console.log(e)
          e.errors.map(error => {
            if (
              error.field === 'notAuthorized' ||
              error.field === 'authToken' ||
              error.field === 'token'
            ) {
              Auth.logout()
              // localStorage.removeItem('user')
              history.push('/auth/login')
              return null
            }
            if (error.field === 'permissionDenied') {
              addToast(error.message, {appearance: 'error'})
              history.push('/requests')
              return null
            }
            return null
          })
        }
      })
  }

  return (
    <div>
      <Dimmer active={isLoading}>
        <Loader inverted />
      </Dimmer>

      <DetailsModal />
      <nav className="px-20 py-4">
        <ul className="flex items-center justify-items-center">
          <li>
            <Image src={logo} />
          </li>
          <li className="ltr:ml-auto rtl:mr-auto">
            {/* <Dropdown
              className="mx-8 flex items-center border-blue-700 text-labelColor"
              selection
              options={[
                {key: 'ar', value: 'ar', text: 'عربي'},
                {key: 'en', value: 'en', text: 'English'},
              ]}
              value={lang}
              onChange={(e, {value}) => setLang(value)}
            /> */}
          </li>
          <li className="mx-8 cursor-pointer">
            <RiQrScan2Line size="24" className="text-labelColor" />
          </li>
          <li
            className="mx-8 cursor-pointer relative"
            onClick={() => setShowNotification(prev => !prev)}
          >
            <RiNotification3Line size="24" className="text-labelColor" />
            <div className="absolute bg-primaryRedColor-default flex justify-center items-center text-white font-medium rounded-full w-full p-1 -top-3 ltr:left-3 rtl:right-3">
              <p className="m-0 text-xs">3</p>
            </div>
          </li>

          {showNotification && (
            <li className="absolute top-24 w-1/4 ltr:right-0 z-10 rtl:left-0">
              <div
                className="bg-white -mt-1 overflow-y-auto rounded-lg border-2 border-gray-200"
                style={{height: 'auto', maxHeight: '400px'}}
              >
                <ul>
                  <li className="bg-blue-100 p-3 border-b-2">
                    <div className="flex items-center">
                      <Image
                        src={notifyImage}
                        className="rounded-full w-20 h-20"
                      />
                      <div className="ltr:ml-5 rtl:mr-5" style={{width: '80%'}}>
                        <div className="flex justify-between w-full">
                          <p className="font-semibold text-lg mb-1">
                            Welcome Yehia
                          </p>
                          <p>4 min ago</p>
                        </div>

                        <p className="text-labelColor">Welcome to Bookrage</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          )}

          <li className="mx-8 lg:block hidden">
            <Dropdown
              direction="left"
              trigger={
                <div className="flex flex-row items-center">
                  {userData?.avatar ? (
                    <Image
                      src={userData?.avatar}
                      alt="avatar"
                      className={`${
                        userData?.avatar ? 'visible' : 'hidden'
                      } w-12 h-12 rounded-full mx-auto`}
                    />
                  ) : (
                    <BsPeopleCircle
                      size="32"
                      // className={`mx-auto`}
                    />
                  )}
                  <div>
                    {userData?.['name' + lang.toUpperCase()] && (
                      <>
                        <p className="mx-3 mb-0 text-labelColor font-medium">
                          {userData['name' + lang.toUpperCase()]}
                        </p>
                        <p className="mx-3 text-labelColor">Owner</p>
                      </>
                    )}
                  </div>
                </div>
              }
              className="flex items-center"
            >
              <Dropdown.Menu className="mt-2 w-40 ">
                <Link to={routes.profile}>
                  <Dropdown.Item className="text-labelColor hover:bg-gray-100 transition-colors duration-300 text-center py-2">
                    Profile
                  </Dropdown.Item>
                </Link>
                <Dropdown.Item
                  className="text-labelColor hover:text-black transition-colors duration-300 text-center"
                  onClick={handleOnClickLogout}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>

      <Menu
        inverted
        className="bg-mainBgColor-default mt-0 text-lg rounded-none"
        id="nav-menu"
        widths={8}
      >
        <Menu.Item
          active={pathname.includes('dashboard')}
          onClick={() => handleItemClick('dashboard')}
        >
          <RiDashboardLine size={22} className="text-xl ltr:mr-3 rtl:ml-3" />
          <p>Dashboard</p>
        </Menu.Item>
        <Menu.Item
          active={pathname.includes('requests')}
          onClick={() => handleItemClick('requests')}
        >
          <Icon name="wrench" className="text-xl -mt-2 ltr:mr-3 rtl:ml-3" />
          <p>Requests</p>
        </Menu.Item>

        <Menu.Item
          active={pathname.includes('requests')}
          onClick={() => handleItemClick('requests')}
        >
          <Icon
            name="file alternate outline"
            className="text-xl -mt-2 ltr:mr-3 rtl:ml-3"
          />
          <p>Inquiries</p>
        </Menu.Item>
        <Menu.Item
          active={pathname.includes('offers')}
          onClick={() => handleItemClick('offers')}
        >
          <RiPercentLine size={22} className="text-xl ltr:mr-3 rtl:ml-3" />
          <p>Offers</p>
        </Menu.Item>
        <Menu.Item
          active={pathname.includes('messages')}
          onClick={() => handleItemClick('messages')}
        >
          <IoChatboxEllipsesOutline
            size={22}
            className="text-xl ltr:mr-3 rtl:ml-3"
          />
          <p>Messages</p>
        </Menu.Item>

        <Menu.Item
          active={pathname.includes('messages')}
          onClick={() => handleItemClick('messages')}
        >
          <div className="flex items-center">
            <RiWallet3Line size={22} className="text-xl ltr:mr-3 rtl:ml-3" />
            <p>Wallet</p>
          </div>
        </Menu.Item>

        <Menu.Item
          active={pathname.includes('messages')}
          onClick={() => handleItemClick('messages')}
        >
          <RiUserSettingsLine size={22} className="text-xl ltr:mr-3 rtl:ml-3" />
          <p>Management</p>
        </Menu.Item>

        <Menu.Item
          active={pathname.includes('messages')}
          onClick={() => handleItemClick('messages')}
        >
          <RiUser5Line size={22} className="text-xl ltr:mr-3 rtl:ml-3" />
          <p>My Account</p>
        </Menu.Item>
      </Menu>

      <div className="p-10">
        <Switch>
          <Route exact path={routes.dashboard} component={DashboardPage} />
          <Redirect to={routes.dashboard} />
        </Switch>
      </div>
    </div>
  )
}

export default DashboardLayout
