import {useContext, useEffect, useState} from 'react'
import StateContext from '../context/stateContext'
import {Modal, Form, Button} from 'semantic-ui-react'
import {Formik, validateYupSchema} from 'formik'
import FormikControl from '../components/formik/FormikControl'
import useAsync from '../hooks/useAsync'
import {getAllEmployees} from '../services/ShopService'
import { addEmployee } from '../services/ShopService'
import {useToasts} from 'react-toast-notifications'
import { useShop } from '../context/ShopContext'


const AddEmployeeModal = () => {
  const {addToast} = useToasts()
  const [shop, setShop] = useShop()
  const [open, setOpen] = useState(false)
  const {showModal, setShowModal} = useContext(StateContext)
  const {run, isLoading} = useAsync()
  const [state, setState] = useState({
    email:"",
    isApproved:true,
    nameEN:"",
    role: "tech"
  })
    // const [employeesOptions,setEmployeesOptions] = useState([])
    
  useEffect(() => {
    
    if (['addEmployee', 'addEmployee'].includes(showModal.modalName)) {
      setOpen(true)
      // run(getAllEmployees()).then(({data}) => {
      //   console.log(data)
      //   let employeesArr = []
      //   data.data.map((e, i) => {
      //     employeesArr.push({
      //       key: i,
      //       text: e.name,
      //       value: e.name,
      //     })
      //   })
      //   setEmployeesOptions(employeesArr)
      // })
    } else {
      setOpen(false)
    }
  }, [showModal])

  const employeeOptions = [
    {
      key: 'tech',
      value: 'tech',
      text: 'Mechanic',
    },
  ]

  const handleOnSubmit = value => {

   setState({...state,nameEN:value.nameEN,email:value.email})


   console.log(state)
    
    run(addEmployee(state))
      .then(({data}) => {
        JSON.stringify({
          shopId: JSON.parse(shop),
          email:data.data.email,
          isApproved:data.data.isApproved,
          nameEN: data.data.nameEN,
          nameAR: data.data.nameEN,
          role: data.data.role
          
        })
        console.log(data.data)
        addToast(data.message, {appearance: 'success'})
      })
      .catch(e => {
        console.log(e)
      })
    }
  

  return (
    <Modal
      onClose={() => setShowModal({modalName: '', data: null})}
      closeIcon
      open={open}
    >
      <Modal.Content>
        <div className="px-10">
          <p className="brands-title text-center text-bold font-bold text-2xl text-labelColor mb-1">
            Add New Employee
          </p>
          <p className="text-center text-labelColor text-base font-normal">
            Invite employee to work in your shop
          </p>
          <div className="my-20 w-1/2 mx-auto">
            <Formik initialValues={state} onSubmit={handleOnSubmit}>
              {formik => (
                <Form onSubmit={formik.submitForm} loading={isLoading}>
                  <Form.Field>
                    <FormikControl
                      control="input"
                      name="nameEN"
                      label="Full Name"
                    />
                  </Form.Field>
                    <Form.Field>
                    <FormikControl
                      control="input"
                      name="email"
                      label="Email Address"
                    />
                  </Form.Field>
                  <Form.Field>
                <FormikControl
                  name="phoneNumber"
                  control="phone"
                  label="Phone Number"
                />
              </Form.Field>
                  <Form.Field>
                    <FormikControl
                      control="dropdown"
                      name="role"
                      fluid  
                      selection
                      multiple
                      clearable
                      label="Select Role"
                      options={employeeOptions}
                    />
                  </Form.Field>
                  <div className="flex text-center">
            <Button content="Invite Employee" className="btn-primary " type="submit" />
            <Button
              className="btn-declined mx-5"
              onClick={() => setShowModal({modalName: '', data: null})}
            >
              Cancel
            </Button>
          </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* <Form.Field>
                      <Label className="font-bold text-base mt-4 text-primary brands-selection">
                        Select Brand
                      </Label>
                    </Form.Field> */}
         
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default AddEmployeeModal
