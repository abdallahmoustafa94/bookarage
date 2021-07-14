import {Fragment, useContext} from 'react'
import {Button, Icon, Table} from 'semantic-ui-react'
import StateContext from '../../context/stateContext'
import {formatDate} from '../../utils/date-format'

const CarReady = ({requests, loading, updateRequest}) => {
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
              Technication
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Total Cost
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-mainBgColor-hover font-medium text-lg text-gray-200">
              Invoice
            </Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>
        <Table.Body>
       
              <Table.Row >
                <Table.Cell>351</Table.Cell>
                <Table.Cell
                  
                >
                    Honda-Civic 2005
                </Table.Cell>
                <Table.Cell>
                  Alex Lawson   
                </Table.Cell>
                <Table.Cell>(585) 5519-96</Table.Cell>
                <Table.Cell>Electric Repair</Table.Cell>
                <Table.Cell>
                  Anthony Banks
                </Table.Cell>
                <Table.Cell>
               450 AED
                </Table.Cell>
                <Table.Cell
                //   onClick={() =>
                //     setShowModal({modalName: 'requestDetails', data: req})
                //   }
                >
                  <Icon
                    name="eye"
                    className="text-primaryRedColor-default cursor-pointer text-lg"
                  />
                </Table.Cell>
               
              </Table.Row>

         
            {/* <Table.Row>
              <Table.Cell colSpan={10} textAlign="center" warning>
                There is no appointments
              </Table.Cell>
            </Table.Row>
        */}

          {/* {loading && requests.length === 0 ? (
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
          ) : null} */}
        </Table.Body>
      </Table>
    </Fragment>
  )
}

export default CarReady
