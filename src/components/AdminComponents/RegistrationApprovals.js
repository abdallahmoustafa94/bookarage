import {useState} from 'react'
import {Table, Icon, Button} from 'semantic-ui-react'
import RequestDetails from './AdminModals/RequestDetails'

const RegistrationApprovals = () => {
  const [activeDetails, setActiveDetails] = useState(false)

  const handleActiveDetails = ({handleActiveDetails}) => {
    setActiveDetails(true)
  }
  return (
    <div>
      <div className="flex w-full items-center ">
        <div className="flex justify-start w-1/2 text-gray-900 lg:text-xl">
          <p>Registration Approvals</p>
        </div>

        <div className=" w-1/2 flex justify-end">
          <Button className="bg-primaryRedColor-default text-white rounded-full">
            Invite New Provider
          </Button>
        </div>
      </div>
      <div className="my-4  ">
        {activeDetails ? (
          <RequestDetails />
        ) : (
          <Table celled textAlign="left">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell className=" font-medium text-md text-gray-900">
                  ID
                </Table.HeaderCell>
                <Table.HeaderCell className=" font-medium text-md text-gray-900">
                  Provider Name
                </Table.HeaderCell>
                <Table.HeaderCell className=" font-medium text-md text-gray-900">
                  Shop Name
                </Table.HeaderCell>
                <Table.HeaderCell className=" font-medium text-md text-gray-900">
                  Email Address
                </Table.HeaderCell>
                <Table.HeaderCell className=" font-medium text-md text-gray-900">
                  Phone Number
                </Table.HeaderCell>
                <Table.HeaderCell className=" font-medium text-md text-gray-900">
                  Provider Type
                </Table.HeaderCell>
                <Table.HeaderCell className=" font-medium text-md text-gray-900">
                  Actions
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>4609</Table.Cell>
                <Table.Cell>Tyler James</Table.Cell>
                <Table.Cell>Car Care</Table.Cell>
                <Table.Cell>brandofuller@mail.com</Table.Cell>
                <Table.Cell>(001)175-4856</Table.Cell>
                <Table.Cell>Service Provider</Table.Cell>
                <Table.Cell>
                  <Icon
                    name="eye"
                    className="text-primaryRedColor-default cursor-pointer text-lg"
                    onClick={handleActiveDetails}
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        )}
      </div>
    </div>
  )
}

export default RegistrationApprovals
