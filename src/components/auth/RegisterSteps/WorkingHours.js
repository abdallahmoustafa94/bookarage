import {Formik} from 'formik'
import {useContext,useEffect, useState} from 'react'
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
import StateContext from '../../../context/stateContext'
import routes from '../../../routes/routes'
import { useHistory} from 'react-router-dom'



// import '../../../assets/css/shopinfostep.css'




const test = [
  {
    day: 'monday',
    startTime: '',
    endTime: '',
    isOpened: true,
    id : 1,
  },
  {
    day: 'tuesday',
    startTime: '',
    endTime: '',
    isOpened: false,
    id:2,
  },
  {
    day: 'wednesday',
    startTime: '',
    endTime: '',
    isOpened: false,
    id:3,
  },
  {
    day: 'thursday',
    startTime: '',
    endTime: '',
    isOpened: false,
    id:4,
  },
  {
    day: 'friday',
    startTime: '',
    endTime: '',
    isOpened: false,
    id:5,
  },
  {
    day: 'saturday',
    startTime: '',
    endTime: '',
    isOpened: false,
    id:6,
  },
  {
    day: 'sunday',
    startTime: '',
    endTime: '',
    isOpened: false,
    id:7,
  },
]

const WorkingHours = ({step, values, nextStep, loading, stepTitle}) => {

  const [days, setDays]=useState(test)

  const {setShowModal} = useContext(StateContext)

  const history = useHistory()

 
  useEffect(() => {
    stepTitle({title: 'Shop Information', desc: 'Shop logo, Description'})
  }, [])

  const handleOnSubmit = values => {
    console.log(values)
    nextStep({type: 'step', value: values})
  }

  const handleChange = () => {
    setDays(prevState => {
     return {...prevState, isOpened:true}
    })
  }

  


  return (
    <div>
      <Formik
        initialValues={days}
      >
        {formik => (
          <Form enableReinitialize loading={loading}>
             
             <ul >
             {days&&days.map(item =>
            
   <li key={item.id}>
     <div className="flex items-center">
       <p className="mb-0 w-1/6">{item.day}</p>
      
       <div style={item.isOpened ? {visibility:  'visible' }: {visibility:  'hidden'}}  className="flex items-center w-1/2">
         <div className="flex items-center w-4/6">
           <label
             htmlFor={JSON.stringify(item.startTime)}
             className="mx-3 text-gray-400"
           >
             From
           </label>
           <FormikControl
             name={JSON.stringify(item.startTime)}
             control="time"
             className="w-4/6"
             
           />
         </div>
         <div className="flex items-center w-4/6">
           <label
             htmlFor={JSON.stringify(item.endTime)}
             className="mx-3 text-gray-400"
             
           >
             To
           </label>
           <FormikControl
             name={JSON.stringify(item.endTime)}
             control="time"
             className="w-4/6"
           />
         </div>
       </div>
  
       <div className="w-2/6">
         <div className="flex items-center justify-end">
           <label className="mx-3 text-gray-400">{item.isOpened ? 'Opened' : 'Closed'}</label>
           <div className="-mt-3">
             <FormikControl
               name={JSON.stringify(item.isOpened)}
               control="checkbox"
               toggle
             />
           </div>
         </div>
       </div>
     </div>
   </li>
                 )}

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
              <Button content="Finish" type="submit" className="btn-primary"  onClick={() => history.push('/auth/login')}
 />
              <Button
              className="btn-declined mx-5"
            >
              Setup Later
            </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    
  )
}

export default WorkingHours
