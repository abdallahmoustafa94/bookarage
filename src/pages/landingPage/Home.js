import Nav from './Nav'
import {  Image,Button,Grid,Form,Input,Icon } from 'semantic-ui-react'
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
import { Formik } from 'formik'
import FormikControl from '../../components/formik/FormikControl'
import contact from '../../assets/images/landingPage/Contact.svg'
import logo from '../../assets/images/logo.svg'
import { Link, animateScroll as scroll } from "react-scroll";






const Home = () => {
    return(
        <div className="bg-gray-100">
            <Nav />
        <div id="home" className="md:flex w-full my-32 items-center">
            
            <div className="flex sm:w-full md:w-1/2 justify-center">
                <div>
                <h1 className="text-7xl text-gray-600">FULL Range <br /> OF <span className="text-red-600	">Services</span></h1>
                <p className="text-gray-600 text-2xl font-semibold	">For Your Car at one Place</p>
                <p className="leading-6	text-lg	text-gray-500">Enjoy 30% discount and get notified<br /> when our application is ready!</p>
                <Button className="bg-red-600 text-white py-3 px-12 rounded-lg	" content="Subscribe" />
                </div>
               
            </div>
            <div className="flex sm:w-full md:w-1/2 justify-end">
            <Image src={car} size='big' />
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
                <p className="text-2xl text-center font-semibold text-gray-700">We Have A Huge Variety Of Services</p>
            </div>
        <div className="md:flex md:items-center md:container mx-auto my-8">
            
        <div id="services" className="flex justify-center sm:mb-4 xs:mb-4 md:w-1/5 bg-white mx-8 md:h-50 xs:w-1/2  xs:mx-auto ">
            <div className="p-6">
            <Image src={oil}  className="landing-icons"/>
            <p className="my-6">Oil And Filter</p>
            </div>
        </div>
        <div className="flex justify-center sm:mb-4 xs:mb-4 md:w-1/5 bg-white mx-8 md:h-50 xs:w-1/2  xs:mx-auto ">
            <div className="p-6">
            <Image src={tire}  className="landing-icons"/>
            <p className="my-6">Tire Change & Repair</p>
            </div>
        </div>
        <div className="flex justify-center sm:mb-4 xs:mb-4 md:w-1/5 bg-white mx-8 md:h-50 xs:w-1/2 xs:mx-auto  p-6">
            <div className="">
            <Image src={body}  className="landing-icons"/>
            <p className="my-6">Body Repair</p>
            </div>
        </div>
        <div className="flex justify-center sm:mb-4 xs:mb-4 md:w-1/5 bg-white mx-8 md:h-50 xs:w-1/2  xs:mx-auto  p-6">
            <div>
            <Image src={battery} className="landing-icons" />
            <p className="my-6">Battery</p>
            </div>
        </div>
        <div className="flex justify-center sm:mb-4 xs:mb-4 md:w-1/5 bg-white mx-8 md:h-50 xs:w-1/2  xs:mx-auto  p-6">
            <div>
            <Image src={washing} className="landing-icons" />
            <p className="my-6">Washing</p>
            </div>
        </div>
      
        </div>
        <div className="md:flex md:items-center md:container mx-auto my-8 ">
            
        <div className="flex justify-center sm:mb-4 xs:mb-4 md:w-1/5 bg-white mx-8 md:h-50 xs:w-1/2 xs:mx-auto  p-6">
            <div>
            <Image src={electric} className="landing-icons" />
            <p className="my-6">Electric</p>
            </div>
        </div>
        <div className="flex justify-center sm:mb-4 xs:mb-4 md:w-1/5 bg-white mx-8 md:h-50 xs:w-1/2  xs:mx-auto  p-6">
            <div>
            <Image src={mechanical} className="landing-icons" />
            <p className="my-6">Mechanical</p>
            </div>
        </div>
        <div className="flex justify-center sm:mb-4 xs:mb-4 md:w-1/5 bg-white mx-8 md:h-50 xs:w-1/2  xs:mx-auto p-6">
            <div>
            <Image src={polishing} className="landing-icons" />
            <p className="my-6">Polishing</p>
            </div>
        </div>
        <div className="flex justify-center  xs:mb-4 md:w-1/5 bg-white mx-8 md:h-50 xs:w-1/2 xs:mx-auto p-6">
            <div>
            <Image src={recovery} className="landing-icons" />
            <p className="my-6">Car Recovery</p>
            </div>
        </div>
        <div className="flex justify-center  xs:mb-4 md:w-1/5 bg-white mx-8 md:h-50 xs:w-1/2 xs:mx-auto p-6">
            <div>
            
            <p className="my-6 rounded-full h-24 w-24 flex items-center justify-center text-lg  text-white bg-red-600 text-center p-6" >And A lot <br /> More</p>
            </div>
        </div>
        </div>
        <div id="discount-section" className="md:flex  my-8 items-center mx-auto">
            
            <div className="md:flex md:w-1/2 justify-center">
                <div>
                <p className="text-5xl text-gray-700 font-semibold leading-12 xs:text-center">Enjoy 30% Discount <br />And Get Notified!</p>
                
                <p className="leading-6	text-lg	text-gray-500 xs:text-center">Fill This Form And You Will Received A Promo Code <br /> With 30% Discount When Our Application is Ready</p>
                <Formik>
          {formik => (
            <Form  >
              <Form.Field >
                <FormikControl
                  name="fullName"
                  placeholder="Full Name"
                  control="input"
                />
              </Form.Field>

              <Form.Field >
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
                  className="bg-primaryRedColor-default text-white px-60  "
                />
              </div>
            </Form>
          )}
        </Formik>
                </div>
               
            </div>
            <div className="flex w-1/2 justify-end">
            <Image src={mob} size='big' />
            </div>
        </div>  

        </div>

        <div className="md:flex md:w-full my-32 items-start">
        <div className=" md:flex md:w-1/2 justify-end my-8">
            <Image src={about} size='big' />
            </div>
            <div id="about" className="md:flex md:w-1/2 justify-start md:mr-20  ">
                <div>
                <p className="  text-4xl text-gray-600 font-bold xs:text-center">About Bookrage</p>
                <p className="leading-12 	text-2xl	text-gray-600 md:pr-20 xs:text-center">Bookarage Is A Platform To Connect Car Owners & Users With Service Providers Through Mobile Application. Bookarage Main Goals Is Organize, Facilitate And Control The Quality Of Car Services In Garages And Service Centers.</p>
               
                </div>
               
            </div>
           
        </div>
        <div id="contact-section" className="w-full ">
        <div  className=" md:w-1/3 my-8 mx-auto text-center">

<div id="contact">
<p className="text-3xl text-gray-700 font-semibold leading-12">We Are Happy To Hear From You!</p>

<p className="leading-6	text-lg	text-gray-500">Kindly Contact us Through Phone or Send Us Message</p>
<Formik>
{formik => (
<Form  >
<Form.Field >
<FormikControl
  name="fullName"
  placeholder="Full Name"
  control="input"
/>
</Form.Field>

<Form.Field >
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
  className="bg-primaryRedColor-default text-white px-60  "
/>
</div>
</Form>
)}
</Formik>
</div>


</div>  
        </div>
        <div className=" w-full footer p-12">
        <div className=" md:flex md:container mx-auto ml-8">
           <div className="md:flex md:w-1/6">
               <div>
               <Image src={logo} size='small' />
           <p className="text-white">We Care For Your Car</p>
           <div className="flex">
                <Image className="mx-2" src={android} size='tiny' />
                <Image src={ios} size='tiny' />


                </div>
               </div>
          
           </div>
           <div className="md:flex md:w-1/6">
           <div className="text-white">
           <Link className="my-4 text-white mb-8 cursor-pointer" to="home"
           activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}> <p>Home</p></Link>
               <Link className="my-4 text-white mb-8 cursor-pointer" to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}> <p>Services</p></Link>
           </div>
           </div>
           <div className="md:flex md:w-1/6">
           <div className="text-white">
           <Link className="my-4 text-white mb-8 cursor-pointer" to="about"
           activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}> <p>About</p></Link>
               <Link className="my-4 text-white mb-8 cursor-pointer" to="contact"
               activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}> <p>Contact</p></Link>
           </div>
           </div>
           <div className=" md:flex md:w-1/6">
           <div className="text-white">
               <p>Terms And Condition</p>
               <p>Privacy Policy</p>
           </div>
           </div>
           <div className="flex  md:w-2/6">
           <div className="text-white">
               <p>Subscribe To Newsletter</p>
               <Input action='Subscribe'placeholder="Email Address" />
               
           </div>
           </div>
       </div>
        </div>
      
       <div className="footer-bottom w-full p-4">
            <p className="text-center text-white font-normal">Bookarage, All Rights Reserved 2021</p>
       </div>
        
        </div>
        
    )
}

export default Home