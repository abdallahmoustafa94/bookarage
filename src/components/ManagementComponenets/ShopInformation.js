import {Fragment, useState} from 'react'
import {Form, Image, Button, Icon} from 'semantic-ui-react'
import photoImage from '../../assets/images/photo-ic.svg'
import useAsync from '../../hooks/useAsync'
import {useShop} from '../../context/ShopContext'
import {uploadShopPhotos} from '../../services/ShopService'
import {useToasts} from 'react-toast-notifications'
import {FieldArray, Formik} from 'formik'
import FormikControl from '../formik/FormikControl'
import {updateShopProfile} from '../../services/ShopService'

const ShopInformation = ({nextStep, shopInfo, updateShop, loading}) => {
  console.log(shopInfo)
  const {run: uploadRun, isLoading: isUploading} = useAsync()
  const {run, isLoading} = useAsync()

  const {addToast} = useToasts()
  const [state, setState] = useState({
    selectedlogo: photoImage || '',
    logo: '',
    selectedcoverPhoto: photoImage || '',
    coverPhoto: '',
  })
  const [shop, setShop] = useShop()

  const onChangePhoto = (e, type) => {
    // console.log(e.target.files[0])
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader()
      reader.onload = e => {
        setState({
          ...state,
          ['selected' + type]: e.target.result,
        })
      }
      reader.readAsDataURL(e.target.files[0])
    }

    setState({...state, [type]: e.target.files[0]})
    const uploadImage = new FormData()
    uploadImage.append('shopId', JSON.parse(shop))
    uploadImage.append(type, e.target.files[0])

    uploadRun(uploadShopPhotos(uploadImage))
      .then(({data}) => {
        addToast(data.message, {appearance: 'success'})
        setState({
          ...state,
          [type]: '',
          ['selected' + type]: '',
        })
        updateShop(true)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const handleOnSubmit = values => {
    // console.log(values)
    // nextStep({type: 'step', value: values})
    const updateShopData = {
      ...values,
      nameEN: values.shopName,
      nameAR: values.shopName,
      country: values.countryManagement,
      city: values.cityManagement,
      [shopInfo?.shopType]: {
        isAgent: values.isAgentShop,
        hasRecovery: values.hasRecoveryShop,
      },
      shopId: JSON.parse(shop),
      description: values.desc,
    }
    // console.log(updateShopData)
    run(updateShopProfile(updateShopData))
      .then(({data}) => {
        console.log(data.data)
        addToast(data.message, {appearance: 'success'})
        updateShop(true)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div>
      <Formik
        initialValues={{
          phoneNumber: shopInfo?.phoneNumber || [],
          VAT: shopInfo?.VAT || [{percentage: 0, isDefault: false}],
          desc: shopInfo?.description || '',
          shopName: shopInfo?.nameEN || '',
          address: shopInfo?.address || '',
          isAgentShop: shopInfo?.shopDetails?.isAgent || false,
          hasRecoveryShop: shopInfo?.shopDetails?.hasRecovery || false,
          countryManagement: shopInfo?.country || '',
          cityManagement: shopInfo?.city || '',
        }}
        onSubmit={handleOnSubmit}
        enableReinitialize
      >
        {formik => (
          <Form
            className="lg:w-2/4 "
            loading={isLoading || loading}
            onSubmit={formik.submitForm}
          >
            <Form.Group widths="equal" className="flex xs:mx-auto">
              <Form.Field>
                <div className="mt-5">
                  <label className="block text-lg font-medium text-gray-700">
                    Logo
                  </label>
                  <div className="my-3 w-20 h-20 rounded-full overflow-hidden">
                    <Form loading={isUploading}>
                      <Image
                        src={shopInfo?.logo || state.selectedlogo}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </Form>
                  </div>
                  <div className="lg:space-y-1 text-center">
                    <div className="lg:flex text-sm lg:col-span-6 sm:col-span-3">
                      <label
                        htmlFor="editLogo-upload"
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
                          onChange={e => onChangePhoto(e, 'logo')}
                          onClick={e => {
                            e.target.value = null
                          }}
                          id="editLogo-upload"
                          name="logo"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </Form.Field>
              <Form.Field>
                <div className="mt-5">
                  <label className="block text-lg font-medium text-gray-700">
                    Cover
                  </label>
                  <div className="my-3 w-52 h-20 rounded-xl overflow-hidden">
                    <Form loading={isUploading}>
                      <Image
                        src={shopInfo?.coverPhoto || state.selectedcoverPhoto}
                        className={`w-52 h-20 rounded-xl ${
                          state.selectedcoverPhoto === photoImage &&
                          shopInfo?.coverPhoto === ''
                            ? 'object-contain'
                            : 'object-cover'
                        }`}
                      />
                    </Form>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="lg:flex text-sm lg:col-span-6 sm:col-span-3">
                      <label
                        htmlFor="editCover-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium"
                      >
                        <Image
                          src={photoImage}
                          className="lg:w-300 lg:h-10 shop-logo"
                        />
                        <span className="secondary-text-color">
                          Select cover
                        </span>
                        <input
                          onChange={e => onChangePhoto(e, 'coverPhoto')}
                          id="editCover-upload"
                          name="cover"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </Form.Field>
            </Form.Group>
            <p className="mt-2 text-sm text-gray-500">
              File details size maximum 2mb extension .jpg.png
            </p>

            <hr className="my-4" />
            <Form.Field>
              <FormikControl
                label="Shop Name"
                name="shopName"
                control="input"
              />
            </Form.Field>
            <Form.Field>
              <label className="text-labelColor font-medium">
                Shop Description
              </label>
              <FormikControl
                name="desc"
                control="textarea"
                rows={3}
              ></FormikControl>
            </Form.Field>
            <p className="font-medium text-gray-700">Contact And Location</p>

            <FieldArray
              name="phoneNumber"
              render={arrayhelpers => (
                <Fragment>
                  <div className="lg:flex items-center w-full">
                    <p className="mb-0 lg:w-1/2">Phone Numbers</p>
                    <div
                      className="lg:flex justify-end items-center lg:w-1/2 cursor-pointer"
                      onClick={() => arrayhelpers.push('')}
                    >
                      <p className="font-normal text-primaryRedColor-default mb-0 mr-3">
                        Add Number
                      </p>
                      <Icon
                        content="add Number"
                        name="plus"
                        className="bg-transparent font-normal text-primaryRedColor-default"
                      />
                    </div>
                  </div>

                  <div className="my-3">
                    {formik.values.phoneNumber.map((phone, i) => (
                      <div key={i}>
                        <div className="lg:flex w-full">
                          <Form.Field width="8">
                            <FormikControl
                              icon={
                                <Icon
                                  name="times"
                                  link
                                  className="mt-1 text-primaryRedColor-default"
                                  onClick={e => arrayhelpers.remove(i)}
                                />
                              }
                              name={'phoneNumber.' + i}
                              control="input"
                            />
                          </Form.Field>
                        </div>
                      </div>
                    ))}
                  </div>
                </Fragment>
              )}
            ></FieldArray>

            <FieldArray
              name="VAT"
              render={arrayhelpers => (
                <Fragment>
                  <div className="lg:flex items-center w-full mt-7">
                    <p className="mb-0 lg:w-1/2">VAT (%)</p>
                    <div
                      className="flex justify-end items-center w-1/2 cursor-pointer"
                      onClick={() =>
                        arrayhelpers.push({percentage: '', isDefault: false})
                      }
                    >
                      <p className="font-normal text-primaryRedColor-default mb-0 mr-3">
                        Add VAT
                      </p>
                      <Icon
                        name="plus"
                        className="bg-transparent font-normal text-primaryRedColor-default"
                      />
                    </div>
                  </div>

                  <div className="my-3">
                    {formik.values.VAT.map((vat, i) => (
                      <div key={i}>
                        <Form.Field width="8">
                          <div className="flex items-center w-full">
                            <FormikControl
                              icon={
                                <Icon
                                  name="times"
                                  link
                                  className="mt-1 text-primaryRedColor-default"
                                  onClick={e => arrayhelpers.remove(i)}
                                />
                              }
                              name={'VAT.' + i + '.percentage'}
                              className="w-1/2"
                              control="input"
                            />
                            {vat.isDefault ? (
                              <div className="bg-gray-200 py-1 px-5 rounded-lg ml-2">
                                <p className="text-labelColor">Default</p>
                              </div>
                            ) : (
                              <div className=" ml-2">
                                <p
                                  className="text-primaryRedColor-default cursor-pointer"
                                  onClick={() => {
                                    const index = formik.values.VAT.findIndex(
                                      o => o.isDefault === true,
                                    )

                                    if (index !== -1) {
                                      formik.setFieldValue(
                                        'VAT.' + index + '.isDefault',
                                        false,
                                      )
                                    }
                                    formik.setFieldValue(
                                      'VAT.' + i + '.isDefault',
                                      true,
                                    )
                                  }}
                                >
                                  Set as default VAT
                                </p>
                              </div>
                            )}
                          </div>
                        </Form.Field>
                      </div>
                    ))}
                  </div>
                </Fragment>
              )}
            ></FieldArray>

            <Form.Field>
              <FormikControl
                control="country"
                label="Country"
                name="countryManagement"
              />
              {/* <label className="text-labelColor text-base font-normal">
                Country
              </label>
              <CountryDropdown
              name='countryManagement'
                value={country.setCountry}
                onChange={val => selectCountry(val)}
              /> */}
            </Form.Field>
            <Form.Field>
              <FormikControl
                control="city"
                country={formik.values.countryManagement}
                label="City"
                name="cityManagement"
              />
              {/* <label className="text-base font-normal text-labelColor">
                City
              </label>
              <RegionDropdown
                country={country.setCountry}
                value={region.setRegion}
                onChange={val => selectRegion(val)}
              /> */}
            </Form.Field>
            <Form.Field>
              <FormikControl
                label="Shop Address"
                control="input"
                value={formik.values.address}
                name="address"
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
                name="isAgentShop"
                label="My shop is able to sell spare parts."
                checked={formik.values.isAgentShop}
                control="checkbox"
              />
            </Form.Field>

            <Form.Field>
              <FormikControl
                name="hasRecoveryShop"
                label="My shop has recovery service for cars."
                checked={formik.values.hasRecoveryShop}
                control="checkbox"
              />
            </Form.Field>
            <div className="my-10 text-center flex justify-start">
              <Button content="Save" className="btn-primary" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ShopInformation
