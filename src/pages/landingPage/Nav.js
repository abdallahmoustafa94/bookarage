import {useState, useEffect} from 'react'
import {Menu, Image, Sidebar, Button} from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg'
import {Link, animateScroll as scroll} from 'react-scroll'
import {useHistory} from 'react-router'
import useMediaQuery from '../../hooks/use-media-query'

const Nav = () => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push('/auth/login')
  }

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <nav
        className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 sticky top-0 z-50"
        id="landing-nav"
      >
        <div className="w-full  lg:px-20 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="cursor-pointer"
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Image src={logo} size="small" />
            </Link>
            <Button
              className="text-pink cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              icon="bars"
              onClick={() => setNavbarOpen(!navbarOpen)}
            ></Button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="my-4 text-gray-600"
                  to="services"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Menu.Item name="Services" className="cursor-pointer mr-8" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="my-4 text-gray-600"
                  to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Menu.Item name="About us" className="cursor-pointer mr-8" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="my-4 text-gray-600"
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Menu.Item
                    name="Contact us"
                    className="cursor-pointer mr-8"
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Menu.Item
                  name="Become A Provider"
                  className="cursor-pointer lg:bg-primaryRedColor-default lg:text-white lg:px-6 md:rounded-lg  md:py-2 xs:text-gray-600 sm:text-gray-600 "
                  onClick={handleOnClick}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
