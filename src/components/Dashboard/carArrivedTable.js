import {Fragment, useContext} from 'react'
import {Icon, Table} from 'semantic-ui-react'
import StateContext from '../../context/stateContext'
import {formatDate} from '../../utils/date-format'
import ChartsAndReviews from './ChartsAndReviews'

const CarArrivedTable = ({requests, loading}) => {
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
              Plate Number
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
              Arrived
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Car Details
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
                <Table.Cell>{req.requestDetails.car.plateNumber}</Table.Cell>
                <Table.Cell>{req.user.nameEN}</Table.Cell>
                <Table.Cell>{req.user.phoneNumber}</Table.Cell>
                <Table.Cell>
                  {req?.requestDetails.services.map((service, i) => (
                    <p key={i}>{service.nameEN}</p>
                  ))}
                </Table.Cell>
                <Table.Cell>
                  {formatDate(req.requestDetails.requestDate)}
                </Table.Cell>
                <Table.Cell
                  onClick={() =>
                    setShowModal({modalName: 'requestDetails', data: req})
                  }
                >
                  <Icon
                    name="eye"
                    className="text-primaryRedColor-default cursor-pointer text-lg"
                  />
                </Table.Cell>
                <Table.Cell
                  warning={
                    [4].includes(req?.requestDetails?.requestStatus?.id)
                      ? true
                      : false
                  }
                >
                  {[4].includes(req?.requestDetails?.requestStatus?.id) ? (
                    <p className="text-center text-labelColor">
                      Waiting Technician for diagnosis
                    </p>
                  ) : (
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
                  )}
                </Table.Cell>
              </Table.Row>
            ))}

          {requests.length === 0 && !loading ? (
            <Table.Row>
              <Table.Cell colSpan={9} textAlign="center" warning>
                There is no Cars arrived to workshop
              </Table.Cell>
            </Table.Row>
          ) : null}
        </Table.Body>
      </Table>
    </Fragment>
  )
}

export default CarArrivedTable
