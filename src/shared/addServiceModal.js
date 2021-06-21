import {useContext, useEffect, useState} from 'react'
import {Modal, Button} from 'semantic-ui-react'
import StateContext from '../context/stateContext'

const AddServiceModal = () => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)

  useEffect(() => {
    if (['registerService', 'addService'].includes(showModal.modalName)) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [showModal])

  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      open={open}
    >
      <Modal.Content></Modal.Content>
      <Modal.Actions>
        <div className="brands-buttons">
          <Button content="Add" className="btn-primary" />
          <Button
            color="transparent"
            onClick={() => setShowModal({modalName: '', data: null})}
          >
            Cancel
          </Button>
        </div>
      </Modal.Actions>
    </Modal>
  )
}

export default AddServiceModal
