import {Menu, Button} from 'semantic-ui-react'

const ManagementTabs = ({activeMenu, setActiveMenu}) => {
  return (
    <div className="flex lg:flex-col xs:w-full lg:w-1/4 text-gray-700 lg:bg-white xs:justify-center sm:justify-center md:justify-center xs:px-8 lg:p-10  lg:h-screen lg:sticky lg:top-0 rounded xs:flex-wrap">
      <Button
        icon="bookmark"
        content="Shop Information"
        className={`${
          activeMenu === 'shopInformation'
            ? 'bg-primaryRedColor-default text-white lg:rounded-full lg:py-4 lg:px-1 mt-4  xs:text-center'
            : 'bg-transparent text-gray-700 rounded-full lg:py-4 lg:px-2 mt-4 xs:text-center'
        } font-normal lg:text-lg text-left lg:pl-28`}
        active={activeMenu === 'shopInformation'}
        onClick={() => setActiveMenu('shopInformation')}
      ></Button>

      <Button
        icon="clock outline"
        content="Working Hours"
        className={`${
          activeMenu === 'workingHours'
            ? 'bg-primaryRedColor-default text-white lg:rounded-full lg:py-4 lg:px-1 mt-4  xs:text-center'
            : 'bg-transparent text-gray-700 rounded-full lg:py-4 lg:px-2 mt-4 xs:text-center'
        } font-normal lg:text-lg text-left lg:pl-28`}
        active={activeMenu === 'workingHours'}
        onClick={() => setActiveMenu('workingHours')}
      ></Button>

      <Button
        icon="settings"
        content="Services & Parts"
        className={`${
          activeMenu === 'servicesAndParts'
            ? 'bg-primaryRedColor-default text-white lg:rounded-full lg:py-4 lg:px-1 mt-4  xs:text-center'
            : 'bg-transparent text-gray-700 rounded-full lg:py-4 lg:px-2 mt-4 xs:text-center'
        } font-normal lg:text-lg text-left lg:pl-28`}
        active={activeMenu === 'servicesAndParts'}
        onClick={() => setActiveMenu('servicesAndParts')}
      ></Button>

      <Button
        icon="user"
        content="Employees"
        className={`${
          activeMenu === 'employees'
            ? 'bg-primaryRedColor-default text-white lg:rounded-full lg:py-4 lg:px-1 mt-4  xs:text-center'
            : 'bg-transparent text-gray-700 rounded-full lg:py-4 lg:px-2 mt-4 xs:text-center'
        } font-normal lg:text-lg text-left lg:pl-28`}
        active={activeMenu === 'employees'}
        onClick={() => setActiveMenu('employees')}
      ></Button>

      {/* <Button
        icon="address book"
        content="Customer Lists"
        className={`${
          activeMenu === 'customerLists'
            ? 'bg-primaryRedColor-default text-white rounded-full py-4 px-1 mt-4'
            : 'bg-transparent text-gray-700 rounded-full py-4 px-2 mt-4'
        } font-normal text-lg text-left pl-28`}
        active={activeMenu === 'customerLists'}
        onClick={() => setActiveMenu('customerLists')}
      ></Button> */}
    </div>
  )
}

export default ManagementTabs
