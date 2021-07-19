import {useEffect, useState, useContext} from 'react'
import {Form, Button, Image, Input, Label} from 'semantic-ui-react'
import {FiUpload} from 'react-icons/fi'
import {AiFillEdit} from 'react-icons/ai'
import StateContext from '../context/stateContext'
import EditFullName from '../components/Dashboard/myAccountModals/EditFullName'
import EditPhoneNumber from '../components/Dashboard/myAccountModals/EditPhoneNumber'
import {editProfile} from '../services/MyAccountService'
import {useToasts} from 'react-toast-notifications'
import useAsync from '../hooks/useAsync'
import useLocalStorage from '../hooks/use-local-storage'
import {changeAvatar, getProfile} from '../services/ShopService'
import {useShop} from '../context/ShopContext'

const Myaccount = ({values}) => {
  const {run: uploadRun, isLoading: isUploading} = useAsync()

  const {addToast} = useToasts()
  const {run, isLoading} = useAsync()
  const [user, setUser] = useLocalStorage('user', '')
  const [isFilePicked, setIsFilePicked] = useState(false)
  const {setShowModal} = useContext(StateContext)
  const [isAvatarPicked, setIsAvatarPicked] = useState(false)
  const [selectedAvatar, setSelectedAvatar] = useState(null)
  const [shop, setShop] = useShop()
  const [state, setState] = useState({
    fullName: '',
    phoneNumber: '',
    VATNumber: '',
    licenseFile: '',
  })

  useEffect(() => {
    run(getProfile()).then(({data}) => {
      console.log(data)
      Object.values(data).map(item =>
        setState({
          fullName: item.nameEN,
          phoneNumber: item.phoneNumber,
          VATNumber: item.VATNumber,
          licenseFile: item.licenseFile,
        }),
      )
    })
  }, [])

  const handleOnSubmit = () => {
    run(editProfile(state))
      .then(({data}) => {
        JSON.stringify({
          nameEN: data.data.nameEN,
          nameAR: data.data.nameEN,
          email: data.data.email,
          phoneNumber: data.data.phoneNumber,
        })
        console.log(data.data)
        addToast(data.message, {appearance: 'success'})
      })
      .catch(e => {
        console.log(e)
      })

    // const newAvatar = new FormData()
    // const onChangeAvatar = e => {
    //   newAvatar.append('avatar', selectedAvatar?.selectedAvatar)
    //   run(changeAvatar(newAvatar))
    //     .then(({data}) => {
    //       console.log(data.data)
    //       addToast(data.message, {appearance: 'success'})
    //     })
    //     .catch(e => {
    //       console.log(e)
    //     })
    console.log(state, selectedAvatar)
  }

  const changeHandler = event => {
    setState({...state, licenseFile: event.target.files[0]})
    setIsFilePicked(true)
  }

  const avatarHandler = e => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader()
      reader.onload = e => {
        setSelectedAvatar(e.target.result)
      }
      reader.readAsDataURL(e.target.files[0])
    }

    setIsAvatarPicked(true)

    const newAvatar = new FormData()
    newAvatar.append('shopId', JSON.parse(shop.id))
    newAvatar.append(e.target.files[0])

    uploadRun(changeAvatar(newAvatar))
      .then(({data}) => {
        addToast(data.message, {appearance: 'success'})
        setSelectedAvatar('')
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div className="flex  w-full space-x-8">
      <EditFullName
        fullNameValue={v => setState({...state, fullName: v.fullName})}
      />
      <EditPhoneNumber
        phoneNumberValue={v => setState({...state, phoneNumber: v.phoneNumber})}
      />

      <div className="flex flex-col w-1/4 text-gray-700 bg-white flex-initial p-10">
        <Button
          content="Account info"
          className="bg-primaryRedColor-default text-white rounded-full py-4 px-1"
          icon="user"
        ></Button>
        <Button
          content="Account info"
          className="bg-transparent text-gray-700 rounded-full py-4 px-2 mt-4"
          icon="payment"
        ></Button>
      </div>
      <Form loading={isLoading}>
        <div className="flex flex-col w-4/4">
          <div className=" p-10 bg-white w-full">
            <p className="font-medium text-gray-700">Personal info</p>
            <p className="text-gray-300">Account Picture</p>
            <div className="flex text-sm col-span-6 sm:col-span-3">
              <Image
                src={selectedAvatar}
                size="tiny"
                circular
                className="-mt-2"
              />
              <label
                htmlFor="edit-avatar"
                className="relative flex flex-col cursor-pointer bg-white rounded-md font-medium file-upload my-5 "
              >
                <div className="flex items-center">
                  <AiFillEdit
                    onChange={avatarHandler}
                    name="editAvatar"
                    size={22}
                    className="text-primaryRedColor-default -ml-7 mt-5"
                  />
                  <input
                    id="edit-avatar"
                    name="editAvatar"
                    type="file"
                    accept="*/*"
                    className="sr-only"
                    onChange={avatarHandler}
                  />
                </div>

                <div></div>
              </label>
            </div>

            <div className="flex mt-8">
              <div className="justify-start w-3/4">
                <p className="text-gray-300">Full Name</p>

                <p className="text-gray-700 font-medium -mt-2">
                  {state.fullName}
                </p>
              </div>
              <div className=" w-1/4 flex justify-end ">
                <Button
                  content="Edit"
                  className="bg-transparent text-blue-700 font-semibold  py-2 px-4 border border-gray-500"
                  onClick={() =>
                    setShowModal({modalName: 'editFullName', data: null})
                  }
                />
              </div>
            </div>
            <div className="flex mt-8">
              <div className="justify-start w-3/4">
                <p className="text-gray-300">Phone Number</p>
                <p className="text-gray-700 font-medium -mt-2">
                  {state.phoneNumber}
                </p>
              </div>
              <div className=" w-1/4 flex justify-end ">
                <Button
                  content="Edit"
                  className="bg-transparent text-blue-700 font-semibold  py-2 px-4 border border-gray-500"
                  onClick={() =>
                    setShowModal({modalName: 'editPhoneNumber', data: null})
                  }
                />
              </div>
            </div>
            {/* <AccInfo label="Date Of Birth" info="19 August 1985"  />   */}
          </div>

          <div className=" p-10 bg-white mt-8 w-full">
            <p className="font-medium text-gray-700">Security info</p>
            <div className="flex mt-8">
              <div className="justify-start w-3/4">
                <p className="text-gray-700">Email Address</p>
                <p className="text-gray-300 font-medium -mt-2">
                  mathew.gray@mail.com
                </p>
              </div>
              {/* <div className=" w-1/4 flex justify-end ">
          <Button  content="Edit" className="bg-transparent text-blue-700 font-semibold  py-2 px-4 border border-gray-500  "/>
        </div> */}
            </div>
            <div className="flex mt-8">
              <div className="justify-start w-3/4">
                <p className="text-gray-700">Password</p>
                <p className="text-gray-300 font-medium -mt-2">
                  Protect your account by creating a long and strong password
                </p>
              </div>
              {/* <div className=" w-1/4 flex justify-end ">
          <Button content="Edit" className="bg-transparent text-blue-700 font-semibold  py-2 px-4 border border-gray-500  "/>
        </div> */}
            </div>
          </div>
          <div className="my-4 bg-white p-10">
            <p className="font-medium text-gray-700">Legal Information</p>
            <Form.Field>
              <Label>VAT Number</Label>
              <Input
                placeholder="Write your VAT number"
                onChange={(e, {value}) =>
                  setState({...state, VATNumber: value})
                }
              />
            </Form.Field>
            <p className="mt-2 text-sm text-gray-500">
              To change the name you need to contact the admin
            </p>
            <Form.Field>
              <div>
                <p className="text-gray-600">Trading License</p>
                <p className="mt-2 text-sm text-gray-500">
                  File details size maximum 2mb extension .jpg.png
                </p>
                <div className="space-y-1 text-center">
                  <div className="flex text-sm col-span-6 sm:col-span-3">
                    <label
                      htmlFor="file-upload"
                      className="relative flex items-center cursor-pointer bg-white rounded-md font-medium file-upload"
                    >
                      <FiUpload
                        onChange={changeHandler}
                        size={22}
                        className="text-primaryRedColor-default"
                      />
                      <span className="secondary-text-color ltr:ml-3 rtl:mr-3">
                        Upload License
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={changeHandler}
                      />
                    </label>
                  </div>
                  {isFilePicked ? (
                    <div>
                      <p> {state.licenseFile.name}</p>
                    </div>
                  ) : (
                    <p>Select a file to show details</p>
                  )}
                </div>
              </div>
            </Form.Field>

            <div className="my-10 text-center">
              <Button
                content="Save"
                type="submit"
                className="btn-primary"
                onClick={handleOnSubmit}
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Myaccount
