import {useContext, useEffect, useState} from 'react'
import StateContext from '../../../context/stateContext'
import {Image, Button} from 'semantic-ui-react'
import {Modal} from 'semantic-ui-react'

const SendRecovery = () => {
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)

  useEffect(() => {
    if (['sendRecovery', 'sendRecovery'].includes(showModal.modalName)) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [showModal])

  const handleOnSubmit = value => {}

  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      open={open}
    >
      <Modal.Content>
        <div className="p-8">
          <p className=" text-center text-bold font-bold text-xl text-labelColor mb-1">
            Select Car Recovery Provider
          </p>
          <ul>
            <li>
              <div className="flex items-center my-4 justify-start">
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                />
                <p className="ml-2">
                  Posuere Nec <br />2 KM To Car Location
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center my-4 justify-start">
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                />
                <p className="ml-2">
                  Posuere Nec <br />2 KM To Car Location
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center my-4 justify-start">
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                />
                <p className="ml-2">
                  Posuere Nec <br />2 KM To Car Location
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center my-4 justify-start">
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                />
                <p className="ml-2">
                  Posuere Nec <br />2 KM To Car Location
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center my-4 justify-start">
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                />
                <p className="ml-2">
                  Posuere Nec <br />2 KM To Car Location
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center my-4 justify-start">
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                />
                <p className="ml-2">
                  Posuere Nec <br />2 KM To Car Location
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center my-4 justify-start">
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                />
                <p className="ml-2">
                  Posuere Nec <br />2 KM To Car Location
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center my-4 justify-start">
                <Image
                  circular
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                />
                <p className="ml-2">
                  Posuere Nec <br />2 KM To Car Location
                </p>
              </div>
            </li>
          </ul>
          <div className="flex justify-center">
            <Button content="Continue" className="btn-primary " type="submit" />
          </div>
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default SendRecovery
