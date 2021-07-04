import {Formik} from 'formik'
import {useContext, useEffect, useState} from 'react'
import {Form, Image, Button, TextArea} from 'semantic-ui-react'
import FormikControl from '../formik/FormikControl'
import photoImage from '../../assets/images/photo-ic.svg'
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector'

const ShopInformation = ({step, values, nextStep, shopInfo}) => {
  const [state, setState] = useState({
    selectedLogo: null,
    isLogoPicked: false,
    selectedCover: null,
    isCoverPicked: false,
  })

  const [country, setCountry] = useState({
    country: '',
    setCountry: '',
  })
  const [region, setRegion] = useState({
    region: '',
    setRegion: '',
  })
  
  
  const [inputs,addInputs]=useState([])
  const [vatInput,addVatInput] = useState([])
  const [isAgent,setIsAgent] = useState(false)
  const [hasRecovery,setHasRecovery] = useState(false)

  const handleOnSubmit = values => {
    console.log(values)
    nextStep({type: 'step', value: values})
  }

  const selectCountry = val => {
    setCountry({...country, setCountry: val})
  }

  const selectRegion = val => {
    setRegion({...region, setRegion: val})
  }

  const appendInput = (e) => {
    e.preventDefault()

    addInputs([...inputs,''])
}

const appendVatInput = (e) => {
  e.preventDefault()

  addVatInput([...vatInput,''])
}

const handleAddInput = (e,id) => {

  e.preventDefault()
  inputs = e.target.value
  addInputs(inputs)
  
}

const handleAddVatInput = (e,id) => {

  e.preventDefault()
  inputs = e.target.value
  addVatInput(vatInput)
  
}

function handleRemove(id) {
  const newInputs = inputs.filter((item) => item.id !== id);

  addInputs(newInputs);
}

function handleRemoveVat(id) {
  const newInputs = vatInput.filter((item) => item.id !== id);

  addVatInput(newInputs);
}

const handleOnChangeIsAgent = (checked) => {
  setIsAgent(checked)
}

const handleOnChangeHasRecovery = (checked) => {
  setHasRecovery(checked)
}
  // const handleOnSubmit = values => {
  //   console.log(values)
  // }

  const logoHandler = e => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setState({...state,SelectedLogo:e.target.result})
      };
      reader.readAsDataURL(e.target.files[0]);
    }

    setState({...state,IsLogoPicked:true})
  }

  const coverHandler = event => {
    setState({
      ...state,
      selectedCover: event.target.files[0],
      isCoverPicked: true,
    })
  }

  return (
    <div>
      <Formik initialValues={{state}}>
        {formik => (
          <Form className="w-2/4">
            <Form.Group widths="equal" className="flex">
              <Form.Field>
                <div className="mt-5">
                  <label className="block text-lg font-medium text-gray-700">
                    Logo
                  </label>
                  <div className="my-3">
                    <Image
                      src={shopInfo?.logo || state.selectedLogo}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm col-span-6 sm:col-span-3">
                      <label
                        for="editLogo-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium file-upload"
                      >
                        <Image
                        
                          src={photoImage}
                          className="w-10 h-10 shop-logo"
                        />
                        <span className="secondary-text-color">
                          Select logo
                        </span>
                        <input
                          onChange={logoHandler}
                          id="editLogo-upload"
                          name="logo"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {state.isLogoPicked ? (
                  <div>
                    <p> {state.selectedLogo.name}</p>
                  </div>
                ) : null}
              </Form.Field>
              <Form.Field>
                <div className="mt-5">
                  <label className="block text-lg font-medium text-gray-700">
                    Cover
                  </label>
                  <div className="my-3">
                    <Image
                      src={shopInfo?.coverPhoto || photoImage}
                      className="w-52 h-20 rounded-xl object-contain"
                    />
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm col-span-6 sm:col-span-3">
                      <label
                        for="editCover-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium"
                      >
                        <Image
                          src={photoImage}
                          className="w-300 h-10 shop-logo"
                        />
                        <span className="secondary-text-color">
                          Select cover
                        </span>
                        <input
                          onChange={coverHandler}
                          id="editCover-upload"
                          name="cover"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {state.isCoverPicked ? (
                  <div>
                    <p> {state.selectedCover.name}</p>
                  </div>
                ) : null}
              </Form.Field>
            </Form.Group>
            <p className="mt-2 text-sm text-gray-500">
              File details size maximum 2mb extension .jpg.png
            </p>

            <hr className="my-4" />
            <Form.Field>
              <Form.Input
                label={
                  <label className="text-labelColor font-medium">
                    Shop Name
                  </label>
                }
                onChange={(e, {value}) => setState({...state, shopName: value})}
              />
            </Form.Field>

            <Form.Field>
              <label className="text-labelColor font-medium">
                Shop Description
              </label>
              <TextArea
                rows={3}
                onChange={(e, {value}) => setState({...state})}
              ></TextArea>
            </Form.Field>
            <p className="font-medium text-gray-700">Contact And Location</p>
            <div className="flex w-full">
          <p className="mb-0 w-1/2">Phone Numbers</p>
          <div className="flex justify-end w-1/2">
            <Button
              content="add Number"
              icon="plus"
              className="bg-transparent font-normal text-primaryRedColor-default"
              onClick={ (e) => appendInput(e) }
            />
            </div>
            
            
            </div>
            {inputs.map((input) => {
                            return <> 

            <div className="flex w-full">
              <div className="w-1/2 flex">
              <Form.Field>
               
               <FormikControl
                 name="phoneNumber"
                 control="input"
                 value={input}
                 onChange ={(e)=>this.handleAddInput(e)}
                 
               />
             </Form.Field>
             
              </div>
            <div className="flex justify-end w-1/2">
            <Button
              
              icon="delete"
              className="bg-transparent font-normal text-primaryRedColor-default w-1/3"
              onClick={ () => handleRemove(input.id) }
            />
            </div>
           
            </div>
           
            </>
            })}

<div className="flex w-full">
          <p className="mb-0 w-1/2">Vat</p>
          <div className="flex justify-end w-1/2">
            <Button
              content="Add Vat"
              icon="plus"
              className="bg-transparent font-normal text-primaryRedColor-default"
              onClick={ (e) => appendVatInput(e) }
            />
            </div>
            
            
            </div>
            {vatInput.map((vat,i) => {
                            return <> 

            <div className="flex w-full">
              <div className="w-1/2 flex">
              <Form.Field key={i}>
               
               <FormikControl
                 name="phoneNumber"
                 control="input"
                 value={vat}
                 onChange ={(e)=>this.handleAddVatInput(e)}
                 
               />
             </Form.Field>
             
              </div>
            <div className="flex justify-end w-1/2">
            <Button
              
              icon="delete"
              className="bg-transparent font-normal text-primaryRedColor-default w-1/3"
              onClick={ () => handleRemoveVat(vat.id) }
            />
            </div>
           
            </div>
           
            </>
            })}

            

            
            <Form.Field>
              <label className="text-labelColor text-base font-normal">
                Country
              </label>
              <CountryDropdown
                name="selectedCountry"
                value={country.setCountry}
                onChange={val => selectCountry(val)}
              />
            </Form.Field>
            <Form.Field>
              <label className="text-base font-normal text-labelColor">
                City
              </label>
              <RegionDropdown
                name="selectedRegion"
                country={country.setCountry}
                value={region.setRegion}
                onChange={val => selectRegion(val)}
              />
            </Form.Field>
            <Form.Field>
              <FormikControl
                name="shopAddress"
                control="input"
                label="Shop Address"
              />
              <small className="text-red-600">
                Google maps will be imported very soon, Please pick your
                location from{' '}
                <a href="https://www.google.com/maps/" target="_blank">
                  google maps
                </a>{' '}
                site then paste your address here.
              </small>
            </Form.Field>
            <Form.Field>
              <FormikControl
                name="isAgent"
                label="My shop is able to sell spare parts."
                control="checkbox"
                onChange={handleOnChangeIsAgent}
              />
            </Form.Field>

            <Form.Field>
              <FormikControl
                name="hasRecovery"
                label="My shop has recovery service for cars."
                control="checkbox"
                onChange={handleOnChangeHasRecovery}
              />
            </Form.Field>
            <div className="my-10 text-center flex justify-start">
              
          <Button
            content="Save"
            className="btn-primary"
            onClick={handleOnSubmit}
          />
        </div>

          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ShopInformation
