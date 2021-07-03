import {useEffect, useState} from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import {FiUpload} from 'react-icons/fi'
import useMediaQuery from '../../../hooks/use-media-query'

const LegalInformation = ({nextStep, loading, stepTitle}) => {
  const isSmall = useMediaQuery('(max-width: 992px)')
  const [isFilePicked, setIsFilePicked] = useState(false)
  const [state, setState] = useState({
    VATNumber: '',
    licenseFile: '',
    errors: '',
  })

  useEffect(() => {
    stepTitle({title: 'Legal Information', desc: 'Vat number, Trading license'})
  }, [])

  const handleOnSubmit = () => {
    if (state.VATNumber === '' && state.licenseFile === '') {
      setState({...state, errors: 'all'})
      return
    }
    if (state.VATNumber === '') {
      setState({...state, errors: 'VAT'})
      return
    }
    if (state.licenseFile === '') {
      setState({...state, errors: 'license'})
      return
    }
    nextStep({type: 'submit', value: state})
  }

  const changeHandler = event => {
    setState({...state, licenseFile: event.target.files[0]})
    setIsFilePicked(true)
  }

  return (
    <div className={`${isSmall ? 'px-5' : 'px-32'}`}>
      {['all', 'license'].includes(state.errors) && (
        <Message
          icon="times"
          error
          content="No license file, Please upload the license file"
        />
      )}
      <Form loading={loading}>
        <Form.Field>
          <Form.Input
            label="VAT Number"
            placeholder="Write your VAT Number"
            onChange={(e, {value}) => setState({...state, VATNumber: value})}
            error={
              ['all', 'VAT'].includes(state.errors)
                ? {
                    content: 'VAT Number is empty',
                    pointing: 'below',
                  }
                : false
            }
          />
        </Form.Field>

        <Form.Field>
          <div className="mt-10">
            <p className="text-gray-600">Trading License</p>
            <small className="mt-2 text-gray-500">
              File details size maximum 2mb extension .jpg.png
            </small>
            <div className={`space-y-1 ${isSmall ? '' : 'text-center'}`}>
              <div className="flex text-sm col-span-6 sm:col-span-3">
                <label
                  for="file-upload"
                  className="relative flex flex-col cursor-pointer bg-white rounded-md font-medium file-upload"
                >
                  <div className="flex items-center my-5 ">
                    <FiUpload
                      onChange={changeHandler}
                      name="licenseFile"
                      size={22}
                      className="text-primaryRedColor-default"
                    />
                    <span className="secondary-text-color ltr:ml-3 rtl:mr-3">
                      Upload License
                    </span>
                    <input
                      id="file-upload"
                      name="licenseFile"
                      type="file"
                      accept="*/*"
                      className="sr-only"
                      onChange={changeHandler}
                    />
                  </div>

                  {isFilePicked ? (
                    <div>
                      <p> {state.licenseFile.name}</p>
                    </div>
                  ) : (
                    <p>Select a file to show details</p>
                  )}
                  <div></div>
                </label>
              </div>
            </div>
          </div>
        </Form.Field>

        <div className="my-10 text-center">
          <Button
            content="Continue"
            className="btn-primary"
            onClick={handleOnSubmit}
          />
        </div>
      </Form>
    </div>
  )
}

export default LegalInformation
