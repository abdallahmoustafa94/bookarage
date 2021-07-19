import {Fragment, useContext} from 'react'
import {Button, Icon, Table} from 'semantic-ui-react'
import StateContext from '../../context/stateContext'
import {formatDate} from '../../utils/date-format'
import ChartsAndReviews from './ChartsAndReviews'

const AppointmentTable = ({requests, loading, updateRequest}) => {
  const {setShowModal} = useContext(StateContext)
  const handleOnClickConfirm = (status, requestId) => {
    updateRequest({id: requestId, statusId: status})
  }
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
              Status
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Car Model
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Consumer
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Phone Number
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Service
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Time
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
                <Table.Cell
                  positive={req.requestDetails.requestStatus.id === 2}
                  negative={req.requestDetails.requestStatus.id === 1}
                >
                  {req.requestDetails.requestStatus.name}
                </Table.Cell>
                <Table.Cell>
                  {req.requestDetails.car.carMake} -{' '}
                  {req.requestDetails.car.carModel}{' '}
                  {req.requestDetails.car.carYear}
                </Table.Cell>
                <Table.Cell>{req.user.nameEN}</Table.Cell>
                <Table.Cell>{req.user.phoneNumber}</Table.Cell>
                <Table.Cell>
                  {req.requestDetails?.services.map((service, i) => (
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
                <Table.Cell>
                  <div
                    className="flex items-center justify-center text-primaryRedColor-default text-lg font-medium cursor-pointer"
                    onClick={() =>
                      handleOnClickConfirm(
                        req.requestDetails.requestStatus.id + 1,
                        req._id,
                      )
                    }
                  >
                    <p className="m-0">
                      {req.requestDetails.requestStatus.id === 1
                        ? 'Confirm'
                        : 'Mark Car Arrived'}
                    </p>
                    <Icon
                      name="angle right"
                      className="ltr:ml-2 -mt-2 rtl:mr-2"
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}

          {requests.length === 0 && !loading ? (
            <Table.Row>
              <Table.Cell colSpan={10} textAlign="center" warning>
                There is no appointments
              </Table.Cell>
            </Table.Row>
          ) : null}

          {loading && requests.length === 0 ? (
            <Table.Row textAlign="center">
              <Table.Cell colSpan={10}>
                <Icon
                  name="asterisk"
                  size="large"
                  className="text-primary"
                  loading
                />
              </Table.Cell>
            </Table.Row>
          ) : null}
        </Table.Body>
      </Table>
      <ChartsAndReviews />
    </Fragment>
  )
}

export default AppointmentTable
