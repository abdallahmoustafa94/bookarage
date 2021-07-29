import {useEffect} from 'react'
import Nav from './Nav'
import {Image, Button, Grid, Form, Input, Icon} from 'semantic-ui-react'
import car from '../../assets/images/landingPage/landing.png'
import mob from '../../assets/images/landingPage/Img.png'
import android from '../../assets/images/landingPage/badge1.svg'
import ios from '../../assets/images/landingPage/badge2.svg'
import oil from '../../assets/images/landingPage/ico4.svg'
import tire from '../../assets/images/landingPage/ico4.svg'
import body from '../../assets/images/landingPage/ico1.svg'
import battery from '../../assets/images/landingPage/ico6.svg'
import washing from '../../assets/images/landingPage/ico2.png'
import electric from '../../assets/images/landingPage/ico8.svg'
import mechanical from '../../assets/images/landingPage/ico3.svg'
import polishing from '../../assets/images/landingPage/ico5.svg'
import recovery from '../../assets/images/landingPage/ico9.svg'
import about from '../../assets/images/landingPage/about.png'
import {Formik} from 'formik'
import FormikControl from '../../components/formik/FormikControl'
import contact from '../../assets/images/landingPage/Contact.svg'
import logo from '../../assets/images/logo.svg'
import {Link, animateScroll as scroll} from 'react-scroll'

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // })
  return (
    <div className="bg-gray-100 w-full">
      <Nav />
      <div id="home" className="lg:flex w-full my-32 items-center">
        <div className="flex sm:w-full lg:w-1/2 justify-center">
          <div>
            <h1 className="lg:text-7xl md:text-7xl text-gray-600">
              FULL Range <br /> OF{' '}
              <span className="text-primaryRedColor-default	">Services</span>
            </h1>
            <p className="text-gray-600 text-2xl font-semibold	">
              For Your Car at one Place
            </p>
            <p className="leading-6	lg:text-lg	text-gray-500">
              Enjoy 30% discount and get notified
              <br /> when our application is ready!
            </p>
            <Button
              className="bg-primaryRedColor-default text-white py-3 px-12 rounded-lg"
              content="Subscribe"
            />
          </div>
        </div>
        <div className="flex sm:w-full lg:w-1/2 justify-end">
          <Image src={car} size="big" />
        </div>
      </div>
      {/* <div id="home-section" className="flex w-full my-32 items-center bg-blue-900 py-8">
        <div className="flex w-1/2 justify-center">
                <div>
                <p className="text-gray-200 text-4xl font-semibold	">Enjoy 30% DISCOUNT</p>
                <p className=" text-lg	text-gray-200">On Your First Service When We Launch Our App</p>
                <Button className="bg-red-600 text-white py-3 px-12 rounded-lg	" content="Get Discount" />
                <div className="flex">
                <Image className="mx-2" src={android} size='tiny' />
                <Image src={ios} size='tiny' />


                </div>
                </div>
               
            </div>
            <div className="flex w-1/2 justify-end ">
            <Image className="-translate-y-16" src={mob} size='medium' />
            </div>
        </div> */}

      <div className="-my-12">
        <div>
          <p className="text-2xl text-center font-semibold text-gray-700">
            We Have A Huge Variety Of Services
          </p>
        </div>

        {/* min-width 768px */}
        <div className="md:block  md:container md:mx-auto xs:hidden sm:hidden lg:hidden xl:hidden">
          <div className="md:flex  md:w-full p-8">
            <div className=" md:w-1/2 mr-4 md:bg-white ">
              <div>
                <Image src={oil} className="landing-icons mx-auto my-6" />
                <p className="my-6 text-center">Oil And Filter</p>
              </div>
            </div>
            <div className=" md:bg-white md:w-1/2 ">
              <div>
                <Image src={tire} className="landing-icons mx-auto my-6" />
                <p className="my-6 text-center">Tire Change & Repair</p>
              </div>
            </div>
          </div>
          <div className="md:flex  md:w-full p-8">
            <div className=" md:w-1/2 mr-4 md:bg-white ">
              <div>
                <Image src={body} className="landing-icons mx-auto my-6" />
                <p className="my-6 text-center">Body Repair</p>
              </div>
            </div>
            <div className=" md:bg-white md:w-1/2 ">
              <div>
                <Image src={battery} className="landing-icons mx-auto my-6" />
                <p className="my-6 text-center">Battery</p>
              </div>
            </div>
          </div>
          <div className="md:flex  md:w-full p-8">
            <div className=" md:w-1/2 mr-4 md:bg-white ">
              <div>
                <Image src={washing} className="landing-icons mx-auto my-6" />
                <p className="my-6 text-center">Washing</p>
              </div>
            </div>
            <div className=" md:bg-white md:w-1/2 ">
              <div>
                <Image src={electric} className="landing-icons mx-auto my-6" />
                <p className="my-6 text-center">Electric</p>
              </div>
            </div>
          </div>
          <div className="md:flex  md:w-full p-8">
            <div className=" md:w-1/2 mr-4 md:bg-white ">
              <div>
                <Image
                  src={mechanical}
                  className="landing-icons mx-auto my-6"
                />
                <p className="my-6 text-center">Mechanical</p>
              </div>
            </div>
            <div className=" md:bg-white md:w-1/2 ">
              <div>
                <Image src={polishing} className="landing-icons mx-auto my-6" />
                <p className="my-6 text-center">Polishing</p>
              </div>
            </div>
          </div>
          <div className="md:flex  md:w-full p-8">
            <div className=" md:w-1/2 mr-4 md:bg-white ">
              <div>
                <Image src={recovery} className="landing-icons mx-auto my-6" />
                <p className="my-6 text-center">Car Recovery</p>
              </div>
            </div>
            <div className=" md:bg-white md:w-1/2 ">
              <div className="">
                <p className="my-6 rounded-full h-24 w-24 flex items-center justify-center text-lg text-white bg-primaryRedColor-default text-center mx-auto p-6">
                  And A lot More
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex md:hidden lg:items-center  lg:container mx-auto my-8">
          <div
            id="services"
            className="flex justify-center sm:mb-4 xs:mb-4 md:2/5 lg:w-1/5 bg-white mx-8 lg:h-50 xs:w-1/2 sm:w-1/2 sm:mx-auto   xs:mx-auto lg:mx-4 "
          >
            <div className="p-6">
              <Image src={oil} className="landing-icons" />
              <p className="my-6">Oil And Filter</p>
            </div>
          </div>
          <div className="flex justify-center sm:mb-4 xs:mb-4 md:2/5 lg:w-1/5 bg-white mx-8 lg:h-50 xs:w-1/2 sm:w-1/2 sm:mx-auto xs:mx-auto lg:mx-4">
            <div className="p-6">
              <Image src={tire} className="landing-icons mx-auto" />
              <p className="my-6 text-center">Tire Change & Repair</p>
            </div>
          </div>
          <div className="flex justify-center sm:mb-4 xs:mb-4 md:2/5 lg:w-1/5 bg-white mx-8 lg:h-50 xs:w-1/2 xs:mx-auto sm:w-1/2 sm:mx-auto p-6 lg:mx-4">
            <div className="">
              <Image src={body} className="landing-icons mx-auto" />
              <p className="my-6">Body Repair</p>
            </div>
          </div>
          <div className="flex justify-center sm:mb-4 xs:mb-4 lg:w-1/5 bg-white mx-8 lg:h-50 xs:w-1/2 xs:mx-auto sm:w-1/2 sm:mx-auto p-6 lg:mx-4 lg:mx-4">
            <div>
              <Image src={battery} className="landing-icons mx-auto" />
              <p className="my-6 text-center">Battery</p>
            </div>
          </div>
          <div className="flex justify-center sm:mb-4 xs:mb-4 lg:w-1/5 bg-white mx-8 lg:h-50 xs:w-1/2 xs:mx-auto sm:w-1/2 sm:mx-auto p-6 lg:mx-4">
            <div>
              <Image src={washing} className="landing-icons mx-auto" />
              <p className="my-6 text-center">Washing</p>
            </div>
          </div>
        </div>
        <div className="md:hidden lg:flex lg:items-center lg:container mx-auto my-8 ">
          <div className="flex justify-center sm:mb-4 xs:mb-4 lg:w-1/5 bg-white mx-8 lg:h-50 xs:w-1/2 xs:mx-auto sm:w-1/2 sm:mx-auto p-6 lg:mx-4">
            <div>
              <Image src={electric} className="landing-icons mx-auto" />
              <p className="my-6 text-center">Electric</p>
            </div>
          </div>
          <div className="flex justify-center sm:mb-4 xs:mb-4 lg:w-1/5 bg-white mx-8 lg:h-50 xs:w-1/2 xs:mx-auto sm:w-1/2 sm:mx-auto p-6 lg:mx-4">
            <div>
              <Image src={mechanical} className="landing-icons mx-auto" />
              <p className="my-6 text-center">Mechanical</p>
            </div>
          </div>
          <div className="flex justify-center sm:mb-4 xs:mb-4 lg:w-1/5 bg-white mx-8 lg:h-50 xs:w-1/2 xs:mx-auto sm:w-1/2 sm:mx-auto p-6 lg:mx-4 ">
            <div>
              <Image src={polishing} className="landing-icons mx-auto" />
              <p className="my-6 text-center">Polishing</p>
            </div>
          </div>
          <div className="flex justify-center sm:mb-4 xs:mb-4 lg:w-1/5 bg-white mx-8 lg:h-50 xs:w-1/2 xs:mx-auto sm:w-1/2 sm:mx-auto p-6 lg:mx-4 ">
            <div>
              <Image src={recovery} className="landing-icons mx-auto" />
              <p className="my-6 text-center">Car Recovery</p>
            </div>
          </div>
          <div className="flex justify-center sm:mb-4 xs:mb-4 lg:w-1/5 bg-white mx-8 lg:h-50 xs:w-1/2 xs:mx-auto sm:w-1/2 sm:mx-auto lg:mx-4 p-8">
            <div>
              <p className="my-6 rounded-full h-24 w-24 flex items-center justify-center text-lg text-white bg-primaryRedColor-default text-center ">
                And A lot <br /> More
              </p>
            </div>
          </div>
        </div>
        <div
          id="discount-section"
          className="md:flex my-8 items-center mx-auto w-full"
        >
          <div className="md:flex  md:w-1/2 xs:W-full sm:w-full justify-center">
            <div className="md:ml-6">
              <p className="md:text-5xl xs:text-3xl sm:text-3xl text-gray-700 font-semibold leading-12 xs:text-center sm:text-center">
                Enjoy 30% Discount <br />
                And Get Notified!
              </p>

              <p className="leading-6	text-lg	text-gray-500 xs:text-center sm:text-center">
                Fill This Form And You Will Received A Promo Code <br /> With
                30% Discount When Our Application is Ready
              </p>
              <Formik>
                {formik => (
                  <Form>
                    <Form.Field>
                      <FormikControl
                        name="fullName"
                        placeholder="Full Name"
                        control="input"
                      />
                    </Form.Field>

                    <Form.Field>
                      <FormikControl
                        name="email"
                        placeholder="Email Address"
                        control="input"
                      />
                    </Form.Field>

                    <Form.Field>
                      <FormikControl
                        name="phoneNumber"
                        control="phone"
                        placeholder="Phone Number"
                      />
                    </Form.Field>

                    <div className="mt-10 text-center">
                      <Button
                        content="Send"
                        className="bg-primaryRedColor-default text-white md:w-full xs:w-1/2 sm:w-1/2"
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="flex w-1/2 justify-end xs:hidden">
            <Image src={mob} size="big" />
          </div>
        </div>
      </div>

      <div className="lg:flex w-full my-32 items-start">
        <div className="lg:flex lg:w-1/2 justify-end my-8 ">
          <Image src={about} size="big" className="md:mx-auto" />
        </div>
        <div id="about" className="lg:flex lg:w-1/2 justify-start lg:mr-20  ">
          <div>
            <p className="md:text-center  text-4xl text-gray-600 font-bold xs:text-center sm:text-center">
              About Bookrage
            </p>
            <p className="leading-12 md:px-20 	lg:text-2xl	text-gray-600 lg:pr-20 xs:text-center sm:text-center">
              Bookarage Is A Platform To Connect Car Owners & Users With Service
              Providers Through Mobile Application. Bookarage Main Goals Is
              Organize, Facilitate And Control The Quality Of Car Services In
              Garages And Service Centers.
            </p>
          </div>
        </div>
      </div>
      <div id="contact-section" className="lg:w-full xs:mx-auto sm:mx-auto">
        <div className="lg:w-1/3 md:w-1/2 my-8 mx-auto text-center">
          <div id="contact">
            <p className="text-3xl  text-gray-700 font-semibold leading-12 ">
              We Are Happy To Hear From You!
            </p>

            <p className="leading-6	text-lg	text-gray-500">
              Kindly Contact us Through Phone or Send Us Message
            </p>
            <Formik>
              {formik => (
                <Form>
                  <Form.Field>
                    <FormikControl
                      name="fullName"
                      placeholder="Full Name"
                      control="input"
                    />
                  </Form.Field>

                  <Form.Field>
                    <FormikControl
                      name="email"
                      placeholder="Email Address"
                      control="input"
                    />
                  </Form.Field>

                  <Form.Field>
                    <FormikControl
                      name="phoneNumber"
                      control="phone"
                      placeholder="Phone Number"
                    />
                  </Form.Field>

                  <div className="mt-10 text-center">
                    <Button
                      content="Send"
                      className="bg-primaryRedColor-default text-white lg:w-full md:w-full xs:w-1/2 sm:w-1/2"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className=" w-full footer p-8 ">
        <div className=" lg:flex lg:container lg:mx-auto xs:mx-auto md:text-center xs:text-center">
          <div className="lg:flex lg:mx-6 lg:w-1/6">
            <div>
              <Image
                src={logo}
                size="small"
                className="xs:mx-auto md:mx-auto"
              />
              <p className="text-white">We Care For Your Car</p>
              <div className="flex items-center justify-center">
                <Image className="mx-2" src={android} size="tiny" />
                <Image src={ios} size="tiny" />
              </div>
            </div>
          </div>
          <div className="lg:flex lg:mx-6 lg:w-1/6">
            <div className="text-white xs:py-4 lg:py-0 sm:py-4">
              <Link
                className="my-4 text-white mb-8 cursor-pointer"
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {' '}
                <p>Home</p>
              </Link>
              <Link
                className="my-4 text-white mb-8 cursor-pointer"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {' '}
                <p>Services</p>
              </Link>
            </div>
          </div>
          <div className="lg:flex lg:w-1/6 lg:mx-6">
            <div className="text-white">
              <Link
                className="my-4 text-white mb-8 cursor-pointer"
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {' '}
                <p>About</p>
              </Link>
              <Link
                className="my-4 text-white mb-8 cursor-pointer"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {' '}
                <p>Contact</p>
              </Link>
            </div>
          </div>
          <div className=" lg:flex lg:w-1/6 lg:mx-6">
            <div className="text-white ">
              <p className="lg:mb-0">Terms And Condition</p>
              <p className="lg:mb-0">Privacy Policy</p>
            </div>
          </div>
          <div className="lg:w-2/6">
            <div className="text-white">
              <p>Subscribe To Newsletter</p>
              <div className=" flex justify-start items-center md:justify-center">
                <Input
                  type="text"
                  placeholder="Email Address"
                  className="xs:w-2/3 md:w-1/4 md:flex "
                />
                <Button
                  content="Subscribe"
                  className="bg-primaryRedColor-default text-white py-4 xs:w-1/3 md:w-1/4 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom w-full p-4">
        <p className="text-center text-white font-normal">
          Bookarage, All Rights Reserved 2021
        </p>
      </div>
    </div>
  )
}

export default Home
