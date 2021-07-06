import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Button} from 'semantic-ui-react'
import useMediaQuery from '../hooks/use-media-query'

const DeleteServiceModal = ({deletedService}) => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const isSmall = useMediaQuery('(max-width: 992px)')

  useEffect(() => {
    if (['deleteService', 'removeService'].includes(showModal.modalName)) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [showModal])

  const handleOnSubmit = () => {
    deletedService(showModal?.data?.index)
    setShowModal({modalName: '', data: null})
  }
  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      open={open}
    >
      <Modal.Content>
        <div className={isSmall ? 'px-5' : 'px-32'}>
          <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Delete Service
          </p>
          <p className="text-center text-labelColor text-base font-normal">
            Are you sure you want to delete this service?
          </p>
          <p className="text-center text-labelColor text-base font-normal py-2">
            Selected Service
          </p>
          <div className="text-center">
            <span className="primary-text-color w-auto bg-gray-100 rounded-full py-2 px-4">
              Electric Repair
            </span>
          </div>

          {/* <Form.Field>
                      <Label className="font-bold text-base mt-4 text-primary brands-selection">
                        Select Brand
                      </Label>
                    </Form.Field> */}
          <div className="text-center py-10">
            <Button
              content="Delete"
              className={`btn-primary ${isSmall ? 'mb-2' : 'mx-5'}`}
              onClick={handleOnSubmit}
            />
            <Button
              className="btn-declined mx-5"
              onClick={() => setShowModal({modalName: '', data: null})}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default DeleteServiceModal
