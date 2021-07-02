import {useContext, useEffect, useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import StateContext from '../../../context/stateContext'
import {useHistory} from 'react-router-dom'
import {TimeInput} from 'semantic-ui-calendar-react'
import {formatTime} from '../../../utils/date-format'
import moment from 'moment'
import {capitalize} from '../../../utils/capitalize-text'

const WorkingHours = ({step, values, nextStep, loading, stepTitle}) => {
  const [state, setState] = useState([
    {
      day: 'monday',
      startTime: '',
      endTime: '',
      isOpened: false,
      id: 1,
    },
    {
      day: 'tuesday',
      startTime: '',
      endTime: '',
      isOpened: false,
      id: 2,
    },
    {
      day: 'wednesday',
      startTime: '',
      endTime: '',
      isOpened: false,
      id: 3,
    },
    {
      day: 'thursday',
      startTime: '',
      endTime: '',
      isOpened: false,
      id: 4,
    },
    {
      day: 'friday',
      startTime: '',
      endTime: '',
      isOpened: false,
      id: 5,
    },
    {
      day: 'saturday',
      startTime: '',
      endTime: '',
      isOpened: false,
      id: 6,
    },
    {
      day: 'sunday',
      startTime: '',
      endTime: '',
      isOpened: false,
      id: 7,
    },
  ])

  const {setShowModal} = useContext(StateContext)

  const history = useHistory()

  useEffect(() => {
    stepTitle({title: 'Shop Information', desc: 'Shop logo, Description'})
  }, [])

  const handleOnSubmit = () => {
    console.log(state)

    nextStep({type: 'submitShop', value: state})
  }

  const handleOnChangeCheckBox = (i, checked) => {
    const stateArr = [...state]
    stateArr[i].isOpened = checked
    setState(stateArr)
  }
  const handleOnChangeTime = (i, type, value) => {
    const time = moment(value, 'hh:mm A').format()
    const stateArr = [...state]
    stateArr[i][type + 'Time'] = time
    setState(stateArr)
  }

  const handleChange = () => {
    setState(prevState => {
      return {...prevState, isOpened: true}
    })
  }

  return (
    <div>
      <Form loading={loading}>
        <ul>
          {state.map((item, i) => (
            <li key={item.id} className="mb-3">
              <div className="flex items-center">
                <p className="mb-0 w-2/12">{capitalize(item.day)}</p>
                <div className="w-4/12 justify-start">
                  {/* {console.log(Object.keys(item))} */}
                  <div>
                    <Form.Group widths="equal" className="mb-0">
                      <Form.Field>
                        <div className={`flex items-center`}>
                          <label htmlFor={``} className="mx-3 text-gray-400">
                            From
                          </label>
                          {/* {formatTime(item.startTime)} */}
                          <TimeInput
                            closable
                            name={item.day + '-' + 'startTime'}
                            value={formatTime(state[i].startTime)}
                            disabled={item.isOpened ? false : true}
                            iconPosition="left"
                            popupPosition="bottom left"
                            timeFormat="AMPM"
                            onChange={(e, {value}) =>
                              handleOnChangeTime(i, 'start', value)
                            }
                          />
                        </div>
                      </Form.Field>

                      <Form.Field>
                        <div className={`flex items-center`}>
                          <label htmlFor={``} className="mx-3 text-gray-400">
                            To
                          </label>
                          <TimeInput
                            name={item.day + '-' + 'endTime'}
                            closable
                            disabled={item.isOpened ? false : true}
                            iconPosition="left"
                            popupPosition="bottom left"
                            value={formatTime(state[i].endTime)}
                            timeFormat="AMPM"
                            onChange={(e, {value}) =>
                              handleOnChangeTime(i, 'end', value)
                            }
                          />
                        </div>
                      </Form.Field>
                    </Form.Group>
                  </div>
                </div>

                <div className="w-6/12">
                  <div className="flex  justify-end">
                    <label className="mx-3 text-gray-400">
                      {item?.isOpened ? 'Opened' : 'Closed'}
                    </label>
                    <div className="-mt-3">
                      <Form.Checkbox
                        toggle
                        checked={item.isOpened}
                        onChange={(e, {value, checked}) =>
                          handleOnChangeCheckBox(i, checked)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="my-10 text-center">
          <Button
            content="Finish"
            type="submit"
            className="btn-primary"
            onClick={handleOnSubmit}
          />
          <Button
            className="btn-declined mx-5"
            onClick={() => nextStep({type: 'submitShop', value: null})}
          >
            Setup Later
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default WorkingHours
