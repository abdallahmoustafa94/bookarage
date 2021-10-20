import {Image} from 'semantic-ui-react'
const RequestDetails = () => {
  return (
    <div>
      <div className="bg-white lg:p-12 xs:p-4 sm:p-4 md:p-4 ">
        <p className="text-gray-400 text-lg">Account Information</p>
        <div className="lg:flex  w-full my-12">
          <div>
            <p className="text-gray-400">Full Name</p>
            <p>Tyler James</p>
          </div>
          <div className="lg:ml-32">
            <p className="text-gray-400">Email Address</p>
            <p>bianca.chavez@mail.com</p>
          </div>
          <div className="lg:ml-32">
            <p className="text-gray-400">Phone Number</p>
            <p>+966 (066)387-8697</p>
          </div>
        </div>
        <p className="text-gray-400 text-lg">Shop Information</p>
        <div className="lg:flex w-full my-12">
          <div className="lg:w-1/4">
            <p className="text-gray-400">Logo</p>
            <Image
              src="/images/wireframe/square-image.png"
              size="medium"
              circular
            />
          </div>
          <div className=" lg:w-1/4">
            <p className="text-gray-400">Shop Name</p>
            <p>Car Care</p>
          </div>
          <div className="  lg:w-2/4">
            <p className="text-gray-400">Description</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-md">Provider Type</p>
        <p>Service Provider,Car rental</p>
        <p className="text-gray-400 text-lg">Location Details</p>
        <div className="lg:flex w-full my-12">
          <div>
            <p className="text-gray-400">Country</p>
            <p>United Arab Emirates</p>
          </div>
          <div className="lg:ml-32">
            <p className="text-gray-400">City</p>
            <p>Dubai</p>
          </div>
          <div className="lg:ml-32">
            <p className="text-gray-400">Address</p>
            <p>Street 17C, Al Barshal Barsha</p>
          </div>
        </div>
        <p className="text-gray-400 text-lg">Legal Details</p>
        <div className="lg:flex w-full my-12">
          <div>
            <p className="text-gray-400">Vat Number</p>
            <p>United Arab Emirates</p>
          </div>
          <div className="lg:ml-32">
            <p className="text-gray-400">Trading License</p>
            <p>Dubai</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestDetails
