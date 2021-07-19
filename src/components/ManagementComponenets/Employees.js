import {useState, useContext} from 'react'
import StateContext from '../../context/stateContext'
import {Image, Button} from 'semantic-ui-react'
import useAsync from '../../hooks/useAsync'
import {useEffect} from 'react'
import {useShop} from '../../context/ShopContext'
import {getEmployeesByShopId} from '../../services/ShopService'
import {useLanguage} from '../../context/languageContext'
import AddEmployeeModal from '../../shared/AddEmployeeModal'
import EditEmployeeModal from '../../shared/EditEmployeeModal'

const Employees = () => {
  const [lang] = useLanguage()
  const {run, isLoading} = useAsync()
  const [shop, setShop] = useShop()
  const {setShowModal} = useContext(StateContext)
  const [employees, setEmployees] = useState([])
  const [updateEmp, setUpdateEmp] = useState(false)

  useEffect(() => {
    run(getEmployeesByShopId({shopId: JSON.parse(shop)}))
      .then(({data}) => {
        console.log(data.data.employees)
        setEmployees(data.data.employees)
      })
      .catch(e => {
        console.log(e)
      })
  }, [shop, updateEmp])

  return (
    <div>
      <AddEmployeeModal updateEmployee={v => setUpdateEmp(prev => !prev)} />
      <EditEmployeeModal updateEmployees={v => setUpdateEmp(prev => !prev)} />

      <div className="flex items-center w-full">
        <p className="flex justify-start  w-1/2">Employees</p>
        <div className="flex justify-end w-1/2">
          <Button
            content="add New Employess"
            icon="plus"
            className="bg-transparent font-normal text-primaryRedColor-default"
            onClick={() => setShowModal({modalName: 'addEmployee', data: null})}
          />
        </div>
      </div>

      <ul className="m-0">
        {employees?.map((e, i) => (
          <li key={i} className="mt-3">
            <div className="flex w-full bg-white items-center  p-8 rounded-lg">
              <div className="w-1/6">
                <div>
                  <Image
                    src={
                      e?.avatar ||
                      'https://react.semantic-ui.com/images/avatar/large/matthew.png'
                    }
                    avatar
                    size="mini"
                    verticalAlign="middle"
                    className="mr-4"
                  />
                  <span className="text-center">
                    {e?.['name' + lang.toUpperCase()]}
                  </span>
                </div>
              </div>
              <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                <p className="p-0 m-0 text-gray-400">Working Hours</p>
                <p className="font-medium text-black text-2xl p-0 m-0">
                  {e?.technicianDetails?.workingHours}
                </p>
                <p className="text-gray-700">Hours / Monthly</p>
              </div>
              <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                <p className="p-0 m-0 text-gray-400">Bought Hours</p>
                <p className="font-medium text-black text-2xl p-0 m-0">
                  {e?.technicianDetails?.boughtHours}
                </p>
                <p className="text-gray-700">Hours / Monthly</p>
              </div>
              <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                <p className="p-0 m-0 text-gray-400">Available Hours</p>
                <p className="font-medium text-black text-2xl p-0 m-0">
                  {e?.technicianDetails?.availableHours}
                </p>
                <p className="text-gray-700">Hours / Monthly</p>
              </div>
              <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
                <p className="p-0 m-0 text-gray-400">Efficiency</p>
                <p className="font-medium text-black text-2xl p-0 m-0">0 %</p>
                <p className="text-gray-700">Monthly</p>
              </div>
              <div className="w-1/6 flex justify-end">
                <Button
                  onClick={() =>
                    setShowModal({modalName: 'editEmployee', data: e})
                  }
                  icon="edit"
                  className="bg-transparent font-normal text-gray-400 text-3xl"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* <ul className="m-0">
        <li>
          <div className="flex w-full bg-white items-center mt-4 p-8 rounded-lg">
            <div className="w-1/6  ">
              <div>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  avatar
                  size="mini"
                  verticalAlign="middle"
                />
                <span className="text-center">Jacob Roberts </span>
              </div>
            </div>
            <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
              <p className="p-0 m-0 text-gray-400">Working Hours</p>
              <p className="font-medium text-black text-2xl p-0 m-0">200</p>
              <p className="text-gray-700">Hours / Monthly</p>
            </div>
            <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
              <p className="p-0 m-0 text-gray-400">Working Hours</p>
              <p className="font-medium text-black text-2xl p-0 m-0">200</p>
              <p className="text-gray-700">Hours / Monthly</p>
            </div>
            <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
              <p className="p-0 m-0 text-gray-400">Working Hours</p>
              <p className="font-medium text-black text-2xl p-0 m-0">200</p>
              <p className="text-gray-700">Hours / Monthly</p>
            </div>
            <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
              <p className="p-0 m-0 text-gray-400">Working Hours</p>
              <p className="font-medium text-black text-2xl p-0 m-0">200</p>
              <p className="text-gray-700">Hours / Monthly</p>
            </div>
            <div className="w-1/6 flex justify-end">
              <Button
                onClick={() =>
                  setShowModal({modalName: 'editEmployee', data: null})
                }
                icon="edit"
                className="bg-transparent font-normal text-gray-400 text-3xl	"
                //   onClick={() =>
                //     setShowModal({modalName: 'registerBrand', data: null})
                //   }
              />
            </div>
          </div>
        </li>
      </ul>
      <ul className="m-0">
        <li>
          <div className="flex w-full bg-white items-center mt-4 p-8 rounded-lg">
            <div className="w-1/6  ">
              <div>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  avatar
                  size="mini"
                  verticalAlign="middle"
                />
                <span className="text-center">Jacob Roberts </span>
              </div>
            </div>
            <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
              <p className="p-0 m-0 text-gray-400">Working Hours</p>
              <p className="font-medium text-black text-2xl p-0 m-0">200</p>
              <p className="text-gray-700">Hours / Monthly</p>
            </div>
            <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
              <p className="p-0 m-0 text-gray-400">Working Hours</p>
              <p className="font-medium text-black text-2xl p-0 m-0">200</p>
              <p className="text-gray-700">Hours / Monthly</p>
            </div>
            <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
              <p className="p-0 m-0 text-gray-400">Working Hours</p>
              <p className="font-medium text-black text-2xl p-0 m-0">200</p>
              <p className="text-gray-700">Hours / Monthly</p>
            </div>
            <div className="w-1/6 flex-col justify-start items-center text-center mb-0 ">
              <p className="p-0 m-0 text-gray-400">Working Hours</p>
              <p className="font-medium text-black text-2xl p-0 m-0">200</p>
              <p className="text-gray-700">Hours / Monthly</p>
            </div>
            <div className="w-1/6 flex justify-end">
              <Button
                icon="edit"
                className="bg-transparent font-normal text-gray-400 text-3xl	"
                onClick={() =>
                  setShowModal({modalName: 'editEmployee', data: null})
                }
              />
            </div>
          </div>
        </li>
      </ul> */}
    </div>
  )
}

export default Employees
