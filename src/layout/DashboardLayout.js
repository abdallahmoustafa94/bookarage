import { useEffect, useState } from 'react'
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router'
import { Dimmer, Dropdown, Image, Loader, Menu, Sidebar } from 'semantic-ui-react'
import { useLanguage } from '../context/languageContext'
import {
  RiNotification3Line,
  RiQrScan2Line,
  RiPercentLine,
  RiDashboardLine,
  RiWallet3Line,
  RiUserSettingsLine,
  RiBarChartHorizontalLine,
  RiUser5Line,
  RiCloseCircleLine,
} from 'react-icons/ri'
import { BsWrench } from 'react-icons/bs'
import { GiFiles } from 'react-icons/gi'
import { BsPeopleCircle } from 'react-icons/bs'
import useAsync from '../hooks/useAsync'
import { useUser } from '../context/UserContext'
import { Link, NavLink } from 'react-router-dom'
import routes, { myAccount } from '../routes'
import logo from '../assets/images/logo.svg'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import DashboardPage from '../pages/Dashborad'
import Myaccount from '../pages/Myaccount'
import Management from '../pages/Management'
import notifyImage from '../assets/images/sample.jpeg'
import { logout } from '../services/AuthServices'
import { useToasts } from 'react-toast-notifications'
import Auth from '../config/auth'
import DetailsModal from '../components/Dashboard/modals/details.modal'
import useMediaQuery from '../hooks/use-media-query'
import { capitalize } from '../utils/capitalize-text'
import { getMyShops } from '../services/ShopService'
import { useShop } from '../context/ShopContext'

const sidebarNav = [
  {
    icon: RiDashboardLine,
    label: 'dashboard',
    link: routes.dashboard,
  },
  {
    icon: BsWrench,
    label: 'requests',
    link: routes.requests,
  },
  {
    icon: GiFiles,
    label: 'inquiries',
    link: routes.inquiries,
  },
  {
    icon: RiPercentLine,
    label: 'offers',
    link: routes.offers,
  },
  {
    icon: IoChatboxEllipsesOutline,
    label: 'messages',
    link: routes.messages,
  },
  {
    icon: RiWallet3Line,
    label: 'wallet',
    link: routes.wallet,
  },
  {
    icon: RiUserSettingsLine,
    label: 'management',
    link: routes.management,
  },
  {
    icon: RiUser5Line,
    label: 'myAccount',
    link: routes.myAccount,
  },
]

const DashboardLayout = () => {
  const { run, isLoading } = useAsync()
  const [lang, setLang] = useLanguage()
  const { addToast } = useToasts()
  const [userData, setUserData] = useState()
  const [showNotification, setShowNotification] = useState(false)
  const [user, setUser] = useUser()
  const [shop, setShop] = useShop()
  const parsedUser = JSON.parse(user)
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  const isSmall = useMediaQuery('(max-width: 992px)')
  const [shops, setShops] = useState([])
  const [selectedShop, setSelectedShop] = useState(JSON.parse(shop) || '')

  const history = useHistory()

  useEffect(() => {
    run(getMyShops())
      .then(({ data }) => {
        console.log(data)
        let shopArr = []
        if (data.data?.length > 0) {
          data.data.map((s, i) => {
            shopArr.push({
              key: i,
              text: s['name' + lang.toUpperCase()],
              value: s._id,
            })
          })
        } else {
          shopArr.push({
            key: 0,
            text: 'No Branches',
            value: 0,
            disabled: true,
          })
        }
        console.log(JSON.parse(shop))

        if (JSON.parse(shop) === 0) {
          setSelectedShop(shopArr[0].value)
          setShop(JSON.stringify(shopArr[0].value))
        }

        setShops(shopArr)
      })
      .catch(e => {
        console.log(e)
      })
  }, [shop])

  useEffect(() => {
    if (!user) {
      history.push('/auth/login')
      return
    }
    // if (JSON.parse(shop) ===)
    // const shopId = shops[0]?.value
    // console.log(shopId)
    // setShop(JSON.stringify(shopId))
    setUserData(parsedUser)
    document.body.classList.add('bg-gray-100')

    return () => {
      document.body.classList.remove('bg-gray-100')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const handleSelectedShop = id => {
    setSelectedShop(id)
    setShop(JSON.stringify(id))
  }

  const handleOnClickLogout = () => {
    run(logout())
      .then(({ data }) => {
        addToast(data.message, { appearance: 'success' })
        Auth.logout()
        setShop(JSON.stringify(0))
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
              addToast(error.message, { appearance: 'error' })
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
      <nav className="lg:px-20 px-5 py-4">
        <ul className="flex items-center justify-items-center">
          <li
            className="ltr:mr-10 rtl:ml-10 block lg:hidden"
            onClick={() => setVisible(prev => !prev)}
          >
            <RiBarChartHorizontalLine size={30} className="text-labelColor" />
          </li>
          <li className="w-24">
            <Image src={logo} />
          </li>
          <li className="ltr:ml-auto rtl:mr-auto hidden lg:block">
            <Dropdown
              className=" mx-8 flex items-center border-blue-700 text-labelColor"
              selection
              options={shops}
              defaultValue={selectedShop}
              onChange={(e, { value }) => handleSelectedShop(value)}
            />
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
                style={{ height: 'auto', maxHeight: '400px' }}
              >
                <ul>
                  <li className="bg-blue-100 p-3 border-b-2">
                    <div className="flex items-center">
                      <Image
                        src={notifyImage}
                        className="rounded-full w-20 h-20"
                      />
                      <div className="ltr:ml-5 rtl:mr-5" style={{ width: '80%' }}>
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
                      className={`${userData?.avatar ? 'visible' : 'hidden'
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

      <Sidebar
        as={Menu}
        direction={isSmall ? 'left' : 'top'}
        icon="labeled"
        id="nav-menu"
        animation="overlay"
        inverted
        vertical={isSmall ? true : false}
        widths={8}
        visible={isSmall ? visible : true}
        className={`bg-mainBgColor-default w-full ${!isSmall && 'desktop-menu'
          }`}
        width="thin"
      >
        <div
          className="lg:hidden text-gray-300 mt-6 mb-10"
          onClick={() => setVisible(prev => !prev)}
        >
          <RiCloseCircleLine size="24" className="mx-auto" />
        </div>
        {sidebarNav.map((s, i) => (
          <NavLink to={s.link} key={i}>
            <Menu.Item
              active={Array.isArray(pathname.match(s.label, 'i'))}
              className={`${isSmall ? 'w-full' : 'w-auto'}`}
            >
              <div className="flex items-center justify-center px-10">
                <s.icon size={22} className="text-xl ltr:mr-3 rtl:ml-3" />
                <p className="text-lg">{capitalize(s.label)}</p>
              </div>
            </Menu.Item>
          </NavLink>
        ))}
      </Sidebar>
      <div className="p-10">
        <Switch>
          <Route exact path={routes.dashboard} component={DashboardPage} />
          <Route exact path={routes.myAccount} component={Myaccount} />
          <Route exact path={routes.management} component={Management} />
          <Redirect to={routes.dashboard} />
        </Switch>
      </div>
    </div>
  )
}

export default DashboardLayout
