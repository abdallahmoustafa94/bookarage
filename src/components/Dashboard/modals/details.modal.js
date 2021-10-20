import {useContext, useEffect, useState} from 'react'
import {BsWrench} from 'react-icons/bs'
import {FaAngleRight} from 'react-icons/fa'

import {Grid, Icon, Modal} from 'semantic-ui-react'
import StateContext from '../../../context/stateContext'
import useMediaQuery from '../../../hooks/use-media-query'
import RequestInformationSection from './detailsModalComponent/requestInformation'
import CarInformationSection from './detailsModalComponent/carInformation'
import MaintainanceHistorySection from './detailsModalComponent/maintainanceHistory'
import AssignedTechnicianSection from './detailsModalComponent/assignedTechnician'
import Auth from '../../../config/auth'

const DetailsModal = ({updateRequestStatus}) => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const [modalData, setModalData] = useState('')
  const isSmall = useMediaQuery('(max-width: 992px)')

  useEffect(() => {
    if (showModal.modalName === 'requestDetails') {
      setOpen(true)
      console.log(showModal.data)
      setModalData(showModal.data)
    } else {
      setOpen(false)
    }
  }, [showModal])

  return (
    <Modal
      open={open}
      closeIcon={
        <Icon
          name="times"
          className="p-0 text-gray-200 absolute -top-10 ltr:right-0 rtl:left-0 text-lg cursor-pointer"
        />
      }
      className="bg-transparent m-auto main-font mt-7"
      style={{width: '90%'}}
      onClose={() => setShowModal({modalName: '', data: null})}
    >
      <Modal.Header className="rounded-md">
        <div
          className={`flex items-center ${
            isSmall ? 'flex-col' : 'justify-between'
          } `}
        >
          <div
            className={`flex items-center ${
              isSmall ? 'justify-start w-full mb-2' : ''
            } lg:text-lg text-sm font-normal`}
          >
            <BsWrench
              size={isSmall ? 15 : 18}
              className="text-gray-400 ltr:mr-2 rtl:ml-2"
            />
            <p className="m-0 text-gray-400">Requests</p>
            <FaAngleRight size={isSmall ? 15 : 18} className="mx-2" />
            <p>Request Accepted</p>
          </div>

          <div className="lg:text-lg text-sm font-normal">
            <p>Request ID: 351</p>
          </div>
        </div>
      </Modal.Header>
      <Modal.Content className="mt-5 p-0 bg-transparent">
        <Grid doubling columns={2}>
          <Grid.Row>
            <Grid.Column className={`${isSmall ? 'p-0' : ''}`}>
              <RequestInformationSection
                requestInfo={modalData}
                updateRequestStatus={v => {
                  updateRequestStatus(v)
                  setShowModal({modalName: '', data: null})
                }}
              />
              {/* {!Auth.isTechnician() && ( */}
              <AssignedTechnicianSection
                assignedTechData={modalData?.requestDetails?.assignedTech}
              />
              {/* )} */}
              <MaintainanceHistorySection
                carDiganosisHistory={modalData?.requestDetails?.car?.diagnosis}
              />
            </Grid.Column>
            <Grid.Column className={`${isSmall ? 'p-0' : ''}`}>
              <CarInformationSection carInfo={modalData} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  )
}

export default DetailsModal
