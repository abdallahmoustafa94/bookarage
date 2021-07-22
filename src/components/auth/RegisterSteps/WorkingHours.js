import {useContext, useEffect, useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import StateContext from '../../../context/stateContext'
import {useHistory} from 'react-router-dom'
import {TimeInput} from 'semantic-ui-calendar-react'
import {formatTime} from '../../../utils/date-format'
import moment from 'moment'
import {capitalize} from '../../../utils/capitalize-text'
import useMediaQuery from '../../../hooks/use-media-query'

const WorkingHours = ({step, values, nextStep, loading, stepTitle}) => {
  const isSmall = useMediaQuery('(max-width: 1470px)')

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
            <li key={item.id} className={isSmall ? 'relative' : 'mb-3'}>
              <div
                className={`flex ${
                  isSmall ? 'flex-col justify-start w-full' : 'justify-between'
                } items-center`}
              >
                <p className={`mb-0 ${isSmall ? 'w-full' : ''} `}>
                  {capitalize(item.day)}
                </p>
                <div
                  className={`${
                    isSmall ? 'w-full' : 'justify-items-start mx-5'
                  } `}
                >
                  {/* {console.log(Object.keys(item))} */}
                  <div className={isSmall ? 'my-5' : ''}>
                    <Form.Group widths="equal" className="mb-0">
                      <Form.Field>
                        <div
                          className={`flex ${
                            isSmall ? 'w-full' : ''
                          } items-center`}
                        >
                          <label
                            htmlFor={``}
                            className={'mx-3 w-1/6 text-gray-400'}
                          >
                            From
                          </label>
                          {/* {formatTime(item.startTime)} */}
                          <TimeInput
                            closable
                            name={item.day + '-' + 'startTime'}
                            value={formatTime(state[i].startTime)}
                            disabled={item.isOpened ? false : true}
                            iconPosition="left"
                            className="w-5/6"
                            popupPosition="bottom left"
                            timeFormat="AMPM"
                            onChange={(e, {value}) =>
                              handleOnChangeTime(i, 'start', value)
                            }
                          />
                        </div>
                      </Form.Field>

                      <Form.Field>
                        <div
                          className={`flex ${
                            isSmall ? 'w-full' : ''
                          } items-center`}
                        >
                          <label
                            htmlFor={``}
                            className={`mx-3 w-1/6 text-gray-400`}
                          >
                            To
                          </label>
                          <TimeInput
                            name={item.day + '-' + 'endTime'}
                            closable
                            disabled={item.isOpened ? false : true}
                            iconPosition="left"
                            popupPosition="bottom left"
                            value={formatTime(state[i].endTime)}
                            className="w-5/6"
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

                <div className={isSmall ? 'absolute top-0 right-3' : 'w-6/12'}>
                  <div className="flex  justify-end">
                    <label className="mx-3 text-gray-400">
                      {item?.isOpened ? 'Opened' : 'Closed'}
                    </label>
                    <div className="-mt-3">
                      <Form.Checkbox
                        toggle
                        checked={item.isOpened}
                        className="mt-1"
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
        <div className="my-10 text-center ">
          <Button
            content="Finish"
            type="submit"
            className={`btn-primary ${isSmall ? 'mb-3' : ''}`}
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
