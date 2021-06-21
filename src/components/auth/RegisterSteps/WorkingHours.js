import {Formik} from 'formik'
import {useEffect, useState} from 'react'
import {
  Form,
  Image,
  Button,
  Table,
  Label,
  Dropdown,
  Radio,
} from 'semantic-ui-react'
import FormikControl from '../../formik/FormikControl'
import photoImage from '../../../assets/images/photo-ic.svg'
// import '../../../assets/css/shopinfostep.css'

const WorkingHours = ({step, values, nextStep, loading, stepTitle}) => {
  useEffect(() => {
    stepTitle({title: 'Shop Information', desc: 'Shop logo, Description'})
  }, [])

  const handleOnSubmit = values => {
    console.log(values)
    nextStep({type: 'step', value: values})
  }

  return (
    <div>
      <Formik
        initialValues={{
          workingHrs: [
            {
              day: 'monday',
              startTime: '',
              endTime: '',
              isOpened: false,
            },
            {
              day: 'tuesday',
              startTime: '',
              endTime: '',
              isOpened: false,
            },
            {
              day: 'wednesday',
              startTime: '',
              endTime: '',
              isOpened: false,
            },
          ],
        }}
      >
        {formik => (
          <Form loading={loading}>
            <ul>
              <li>
                <div className="flex items-center">
                  <p className="mb-0 w-2/6">Monday</p>
                  <div className="flex items-center w-4/6">
                    <div className="flex items-center">
                      <label
                        htmlFor="workingHrs[0].startTime"
                        className="mx-3 text-gray-400"
                      >
                        From
                      </label>
                      <FormikControl
                        name="workingHrs[0].startTime"
                        control="time"
                      />
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="workingHrs[0].endTime"
                        className="mx-3 text-gray-400"
                      >
                        To
                      </label>
                      <FormikControl
                        name="workingHrs[0].endTime"
                        control="time"
                      />
                    </div>
                  </div>

                  <div className="w-2/6">
                    <div className="flex items-center">
                      <label className="mx-3 text-gray-400">Opened</label>
                      <div className="-mt-3">
                        <FormikControl
                          name="workingHrs[0].isOpened"
                          control="checkbox"
                          toggle
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* <div class="grid grid-cols-6 gap-3">
              <div className="">
                <Label className="select-label hours-label">Monday</Label>
                <Label className="select-label hours-label">Tuesday</Label>
                <Label className="select-label hours-label">Wednesday</Label>
                <Label className="select-label hours-label">Thursday</Label>
                <Label className="select-label hours-label">Friday</Label>
                <Label className="select-label hours-label">Saturday</Label>
                <Label className="select-label hours-label">Sunday</Label>
              </div>
              <div>
                <Label className="select-label hours-label">From</Label>
                <Dropdown text="10">
                  <Dropdown.Menu>
                    <Dropdown.Item text="10" />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <Dropdown text="AM">
                  <Dropdown.Menu>
                    <Dropdown.Item text="AM" />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <Label className="select-label hours-label">To</Label>
                <Dropdown text="10">
                  <Dropdown.Menu>
                    <Dropdown.Item text="10" />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <Dropdown text="PM">
                  <Dropdown.Menu>
                    <Dropdown.Item text="PM" />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <Label className="select-label hours-label">Opened</Label>
                <Radio
                  style={{backgroundColor: '#f2421b !important'}}
                  id="radio-toggle"
                  toggle
                  className="radio-toggle"
                />
                <Label className="select-label hours-label">Opened</Label>
                <Radio id="radio-toggle" toggle className="radio-toggle" />
                <Label id="radio-toggle" className="select-label hours-label">
                  Opened
                </Label>
                <Radio id="radio-toggle" toggle className="radio-toggle" />
                <Label id="radio-toggle" className="select-label hours-label">
                  Opened
                </Label>
                <Radio id="radio-toggle" toggle className="radio-toggle" />
                <Label id="radio-toggle" className="select-label hours-label">
                  Opened
                </Label>
                <Radio id="radio-toggle" toggle className="radio-toggle" />
                <Label id="radio-toggle" className="select-label hours-label">
                  Opened
                </Label>
                <Radio id="radio-toggle" toggle className="radio-toggle" />
              </div>
            </div> */}

            <div className="my-10 text-center">
              <Button content="Finish" type="submit" className="btn-primary" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default WorkingHours
