import {Menu} from 'semantic-ui-react'

const RequestTabs = ({activeMenu, setActiveMenu}) => {
  return (
    <Menu
      className="mt-0 border-none shadow-none lg:text-lg text-sm"
      id="dashboard-menu-requests"
      stackable
      widths={8}
    >
      <Menu.Item
        active={activeMenu === 'appointment'}
        onClick={() => setActiveMenu('appointment')}
      >
        <div className="flex flex-col w-full lg:px-16 px-7">
          <p
            className={`lg:text-5xl text-3xl font-normal text-left ${
              activeMenu === 'appointment'
                ? 'text-primaryRedColor-default'
                : 'text-labelColor'
            } mb-1`}
          >
            15
          </p>
          <p className="font-medium text-labelColor">Appointment</p>

          <div
            className={`bottom-arrow ${
              activeMenu === 'appointment' ? 'visible' : 'hidden'
            }`}
          ></div>
        </div>
      </Menu.Item>

      <Menu.Item
        active={activeMenu === 'carArrived'}
        onClick={() => setActiveMenu('carArrived')}
      >
        <div className="flex flex-col w-full lg:px-16 px-7">
          <p
            className={`lg:text-5xl text-3xl font-normal text-left ${
              activeMenu === 'carArrived'
                ? 'text-primaryRedColor-default'
                : 'text-mainBgColor-default'
            } mb-1`}
          >
            15
          </p>
          <p className="font-medium text-labelColor">Car Arrived</p>

          <div
            className={`bottom-arrow ${
              activeMenu === 'carArrived' ? 'visible' : 'hidden'
            }`}
          ></div>
        </div>
      </Menu.Item>

      <Menu.Item
        active={activeMenu === 'inProgress'}
        onClick={() => setActiveMenu('inProgress')}
      >
        <div className="flex flex-col w-full lg:px-10 px-4">
          <p
            className={`lg:text-5xl text-3xl font-normal text-left ${
              activeMenu === 'inProgress'
                ? 'text-primaryRedColor-default'
                : 'text-mainBgColor-default'
            } mb-1`}
          >
            15
          </p>
          <p className="font-medium text-labelColor">Work in Progress</p>

          <div
            className={`bottom-arrow ${
              activeMenu === 'inProgress' ? 'visible' : 'hidden'
            }`}
          ></div>
        </div>
      </Menu.Item>

      <Menu.Item
        active={activeMenu === 'estimatedSent'}
        onClick={() => setActiveMenu('estimatedSent')}
      >
        <div className="flex flex-col w-full lg:px-12 px-5">
          <p
            className={`lg:text-5xl text-3xl font-normal text-left ${
              activeMenu === 'estimatedSent'
                ? 'text-primaryRedColor-default'
                : 'text-mainBgColor-default'
            } mb-1`}
          >
            15
          </p>
          <p className="font-medium text-labelColor">Estimated Sent</p>

          <div
            className={`bottom-arrow ${
              activeMenu === 'estimatedSent' ? 'visible' : 'hidden'
            }`}
          ></div>
        </div>
      </Menu.Item>

      <Menu.Item
        active={activeMenu === 'estimatedApproved'}
        onClick={() => setActiveMenu('estimatedApproved')}
      >
        <div className="flex flex-col w-full lg:px-7 px-1">
          <p
            className={`lg:text-5xl text-3xl font-normal text-left ${
              activeMenu === 'estimatedApproved'
                ? 'text-primaryRedColor-default'
                : 'text-mainBgColor-default'
            } mb-1`}
          >
            15
          </p>
          <p className="font-medium text-labelColor">Estimated Approved</p>

          <div
            className={`bottom-arrow ${
              activeMenu === 'estimatedApproved' ? 'visible' : 'hidden'
            }`}
          ></div>
        </div>
      </Menu.Item>

      <Menu.Item
        active={activeMenu === 'carReady'}
        onClick={() => setActiveMenu('carReady')}
      >
        <div className="flex flex-col w-full lg:px-16 px-0">
          <p
            className={`lg:text-5xl text-3xl font-normal text-left ${
              activeMenu === 'carReady'
                ? 'text-primaryRedColor-default'
                : 'text-mainBgColor-default'
            } mb-1`}
          >
            15
          </p>
          <p className="font-medium text-labelColor">Car Ready</p>

          <div
            className={`bottom-arrow ${
              activeMenu === 'carReady' ? 'visible' : 'hidden'
            }`}
          ></div>
        </div>
      </Menu.Item>

      <Menu.Item
        active={activeMenu === 'invoiceCreated'}
        onClick={() => setActiveMenu('invoiceCreated')}
      >
        <div className="flex flex-col w-full lg:px-12 px-7">
          <p
            className={`lg:text-5xl text-3xl font-normal text-left ${
              activeMenu === 'invoiceCreated'
                ? 'text-primaryRedColor-default'
                : 'text-mainBgColor-default'
            } mb-1`}
          >
            15
          </p>
          <p className="font-medium text-labelColor">Invoice Created</p>

          <div
            className={`bottom-arrow ${
              activeMenu === 'invoiceCreated' ? 'visible' : 'hidden'
            }`}
          ></div>
        </div>
      </Menu.Item>
    </Menu>
  )
}

export default RequestTabs
