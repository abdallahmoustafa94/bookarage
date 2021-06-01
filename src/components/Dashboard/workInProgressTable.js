import {Fragment, useContext} from 'react'
import {Icon, Table} from 'semantic-ui-react'
import StateContext from '../../context/stateContext'
import {formatDate} from '../../utils/date-format'

const WorkInProgressTable = ({requests, loading}) => {
  const {setShowModal} = useContext(StateContext)
  return (
    <Fragment>
      <div
        className={`${
          loading ? 'visible' : 'hidden'
        } absolute bg-gray-50 bg-opacity-40 w-full top-10 z-20`}
        style={{content: ' ', height: '100%'}}
      ></div>
      <Table celled textAlign="center">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              ID
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Car Model
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Customer
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Phone Number
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Service
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Estimated Time
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Technician
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200"></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {requests.length > 0 &&
            requests.map((req, i) => (
              <Table.Row key={i}>
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell>
                  {req.requestDetails.car.carMake} -{' '}
                  {req.requestDetails.car.carModel}{' '}
                  {req.requestDetails.car.carYear}
                </Table.Cell>
                <Table.Cell>{req.user.nameEN}</Table.Cell>
                <Table.Cell>{req.user.phoneNumber}</Table.Cell>
                <Table.Cell>
                  {req?.services.map((service, i) => (
                    <p key={i}>{service.nameEN}</p>
                  ))}
                </Table.Cell>
                <Table.Cell>{req.requestDetails.car?.estimatedTime}</Table.Cell>
                <Table.Cell>
                  {req.requestDetails.assignedTech.nameEN}
                </Table.Cell>
                <Table.Cell>
                  <Icon
                    name="eye"
                    className="text-primaryRedColor-default cursor-pointer text-lg"
                  />
                </Table.Cell>
                {/* <Table.Cell>
                  <div
                    className="flex items-center justify-center text-primaryRedColor-default text-lg font-medium cursor-pointer"
                    onClick={() =>
                      setShowModal({
                        modalName: 'assignTech',
                        data: {requestId: req._id, tech: req.shop.employees},
                      })
                    }
                  >
                    <p className="m-0">Assign</p>
                    <Icon
                      name="angle right"
                      className="ltr:ml-2 -mt-2 rtl:mr-2"
                    />
                  </div>
                </Table.Cell> */}
              </Table.Row>
            ))}

          {requests.length === 0 && !loading ? (
            <Table.Row>
              <Table.Cell colSpan={9} textAlign="center" warning>
                There is no Cars in progress to workshop
              </Table.Cell>
            </Table.Row>
          ) : null}
        </Table.Body>
      </Table>
    </Fragment>
  )
}

export default WorkInProgressTable
