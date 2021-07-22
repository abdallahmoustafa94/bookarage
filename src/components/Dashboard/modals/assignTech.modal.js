import {useContext, useEffect, useState} from 'react'
import {useToasts} from 'react-toast-notifications'
import {Button, Form, Header, Modal} from 'semantic-ui-react'
import StateContext from '../../../context/stateContext'
import useAsync from '../../../hooks/useAsync'
import {
  assignTechnicianToRequest,
  updateRequest,
} from '../../../services/RequestService'

const AssignTechModal = ({isUpdated}) => {
  const [open, setOpen] = useState(false)
  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()
  const {showModal, setShowModal} = useContext(StateContext)
  const [modalData, setModalData] = useState({})
  const [state, setState] = useState({
    tech: [],
    selectedTech: '',
  })

  useEffect(() => {
    if (showModal.modalName === 'assignTech') {
      setOpen(true)
      setModalData(showModal.data)

      console.log(showModal.data)
      let technicians = []
      showModal.data.tech.map(tech => {
        technicians.push({
          key: tech._id,
          text: tech.nameEN,
          value: tech._id,
        })
      })
      setState({...state, tech: technicians})
    } else {
      setOpen(false)
    }
  }, [showModal])

  const handleOnClickSave = () => {
    run(
      assignTechnicianToRequest({
        requestId: modalData.requestId,
        employeeId: state.selectedTech,
      }),
    )
      .then(({data}) => {
        console.log(data)
        addToast(data.message, {appearance: 'success'})
        isUpdated(true)
        setShowModal({modalName: '', data: null})
      })
      .catch(e => {
        console.log(e)
        e?.errors?.map(err => addToast(err.message, {appearance: 'error'}))
      })
  }

  return (
    <Modal
      open={open}
      size="small"
      closeIcon
      onClose={() => setShowModal({modalName: '', data: null})}
      className="main-font"
    >
      <Modal.Content>
        <div className="text-center text-labelColor">
          <p className="text-xl font-semibold mb-1">Assign To Mechanic</p>
          <p className="text-sm">
            Choose The Mechanic You Want To Work On This Request
          </p>
        </div>

        <div className="pt-32 px-32">
          <Form loading={isLoading}>
            <Form.Field>
              <label className="font-normal text-lg text-labelColor mb-2">
                Select Mechanic
              </label>
              <Form.Dropdown
                fluid
                selection
                placeholder="Choose mechanic"
                defaultValue={state.selectedTech}
                onChange={(e, {value}) =>
                  setState({...state, selectedTech: value})
                }
                options={state.tech}
              />
            </Form.Field>

            <div className="mt-52 mb-16 text-center">
              <Button
                content="Save"
                className="btn-primary"
                disabled={state.selectedTech ? false : true}
                onClick={handleOnClickSave}
              />
              <Button
                content="Cancel"
                className="btn-declined"
                onClick={() => setShowModal({modalName: '', data: null})}
              />
            </div>
          </Form>
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default AssignTechModal
