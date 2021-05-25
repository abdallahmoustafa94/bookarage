import {useContext, useState} from 'react'
import {Header, Icon, Modal} from 'semantic-ui-react'
import StateContext from '../../../context/stateContext'

const DetailsModal = () => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  return (
    <Modal
      open={open}
      closeIcon
      onClose={() => setShowModal({modalName: '', data: null})}
    >
      <Modal.Header>
        <div className="flex items-center justify-center">
          <div className="flex items-center font-normal">
            <Icon name="wrench" className="text-gray-400" />
            <p className="m-0 text-gray-400">Requests</p>
            <Icon name="angle right" />
            <p>Request Accepted</p>
          </div>
        </div>
      </Modal.Header>
    </Modal>
  )
}

export default DetailsModal
