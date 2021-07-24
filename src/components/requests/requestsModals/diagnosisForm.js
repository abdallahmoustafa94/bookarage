import {FieldArray, Formik} from 'formik'
import {Button, Form, Icon} from 'semantic-ui-react'
import FormikControl from '../../formik/FormikControl'
import {HiCheckCircle} from 'react-icons/hi'
import {BsPlusSquare} from 'react-icons/bs'
import {useEffect, useRef, useState} from 'react'

const DiagnosisFormStep = ({serviceData}) => {
  const [serviceCost, setServiceCost] = useState(0)
  const [state, setState] = useState({
    vat: 0,
    serviceVAT: 5,
    serviceCost: 0,
    partsCost: 0,
    serviceVatTotal: 0,
    vatTotal: 0,
    total: 0,
  })
  useEffect(() => {
    if (!serviceData) return
    console.log(
      serviceData?.requestDetails?.services,
      serviceData?.shop?.shopDetails?.services,
    )
    let requiredServicesCost = 0
    serviceData?.requestDetails?.services?.map((s, i) => {
      if (serviceData?.shop?.shopDetails?.services?.length > 0) {
        const index = serviceData?.shop?.shopDetails?.services.findIndex(
          o => o.id === s.id,
        )

        if (index !== -1) {
          console.log(serviceData?.shop?.shopDetails?.services?.[index]?.cost)
          requiredServicesCost += Number(
            serviceData?.shop?.shopDetails?.services?.[index]?.cost,
          )
        }
      }
    })
    if (serviceData?.shop?.VAT?.length > 0) {
      setState({...state, vat: serviceData?.shop?.VAT?.[0]})
    }
    setState({...state, serviceCost: requiredServicesCost})
  }, [])

  const getFormValues = values => {
    console.log(values)
    let subTotal = 0
    let total = 0
    let partsTotal = 0
    let serviceVatTotal = 0
    let vatTotal = 0
    values.parts?.map((p, i) => {
      partsTotal += (Number(p?.price) + Number(p?.labourCost)) * p?.quantity
    })

    subTotal = Number(partsTotal) + Number(values.serviceCost)
    serviceVatTotal = Number(subTotal) * Number(state.serviceVAT / 100)
    vatTotal = Number(subTotal) * (Number(state.vat) / 100)
    total =
      Number(subTotal) +
      Number(serviceVatTotal) +
      Number(vatTotal) +
      Number(values.serviceCost)

    setState({
      ...state,
      serviceCost: values.serviceCost,
      partsCost: partsTotal.toFixed(2),
      vatTotal: vatTotal.toFixed(2),
      serviceVatTotal: serviceVatTotal.toFixed(2),
      total: total.toFixed(2),
    })
  }

  // const handlePartsChange = partsValues => {
  //   // console.log(partsValues)
  //   let totalCost = 0
  //   let totalPrice = 0
  //   partsValues?.map((p, i) => {
  //     totalCost += Number(p?.price) + Number(p?.labourCost)
  //   })
  //   const subTotalPrice = Number(totalCost) + Number(serviceCost)
  //   const serviceVatTotal = subTotalPrice * Number(vat.serviceVAT / 100)
  //   const vatTotal = subTotalPrice * (Number(vat.vat) / 100)
  //   totalPrice = subTotalPrice + Number(serviceVatTotal) + Number(vatTotal)
  //   console.log(serviceVatTotal.toFixed(2))
  //   setVat({
  //     ...vat,
  //     serviceVatTotal: serviceVatTotal.toFixed(2),
  //     vatTotal: vatTotal.toFixed(2),
  //   })
  //   setTotal(totalPrice.toFixed(2))
  //   setPartsCost(totalCost)

  //   return totalCost
  // }

  // const handleServiceVAT = formikValues => {
  //   console.log(formikValues.parts)
  // }

  // const handleTotalVAT = formikValues => {
  //   console.log(formikValues)
  // }

  return (
    <div className="my-10 mx-20">
      <Formik
        initialValues={{
          required: false,
          serviceCost: state.serviceCost || 0,
          parts: [
            {
              partName: '',
              partNumber: '',
              quantity: 1,
              price: 0,
              labourCost: 0,
            },
          ],
          totalServiceVat: 0,
          totalVat: 0,
          totalParts: 0,
          total: 0,
        }}
        enableReinitialize
      >
        {formik => {
          let partsTotal = 0
          formik.values.parts?.map((p, i) => {
            partsTotal +=
              (Number(p?.price) + Number(p?.labourCost)) * Number(p?.quantity)
          })
          const subTotal =
            Number(partsTotal) + Number(formik.values.serviceCost)
          const serviceVatTotal =
            Number(subTotal) * Number(state.serviceVAT / 100)
          const vatTotal = Number(subTotal) * (Number(state.vat) / 100)
          const total =
            Number(subTotal) + Number(serviceVatTotal) + Number(vatTotal)

          formik.values.totalParts = partsTotal
          formik.values.totalVat = vatTotal.toFixed(2)
          formik.values.totalServiceVat = serviceVatTotal.toFixed(2)
          formik.values.total = total

          // setState(formik.values)
          // getFormValues(formik.values)
          return (
            <Form onSubmit={formik.submitForm}>
              <div>
                <p className="text-labelColor mb-0">Finish And Delivery Time</p>
                <Form.Group widths="8">
                  <Form.Field width="4">
                    <FormikControl control="date" />
                  </Form.Field>
                  <Form.Field width="4">
                    <FormikControl control="time" />
                  </Form.Field>
                </Form.Group>
              </div>

              <Form.Field width="4">
                <FormikControl
                  control="input"
                  name="serviceCost"
                  label="Service Cost"
                  placeholder="cost"
                />
              </Form.Field>
              <Form.Field>
                <FormikControl
                  control="textarea"
                  name="diagnosisDetails"
                  label="Diagnosis Details"
                  placeholder="Write Full Details of The Diagnosis"
                  rows={5}
                />
              </Form.Field>

              <Form.Field>
                <div className="flex justify-between">
                  <p className="text-labelColor">Parts Required</p>
                  <FormikControl control="checkbox" name="required" toggle />
                </div>
              </Form.Field>

              {formik.values.required && (
                <FieldArray
                  name="parts"
                  render={arrayhelpers => (
                    <Form.Field>
                      <div
                        className="flex items-center justify-end cursor-pointer my-5"
                        onClick={() =>
                          arrayhelpers.push({
                            partName: '',
                            partNumber: '',
                            quantity: 1,
                            price: 0,
                            labourCost: 0,
                          })
                        }
                      >
                        <BsPlusSquare
                          size={20}
                          className="text-primaryRedColor-default mr-2"
                        />
                        <p className="text-primaryRedColor-default">Add Part</p>
                      </div>

                      {formik.values.parts.map((p, i) => (
                        <div className="shadow-md rounded-xl p-3 mb-3" key={i}>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <p className="mb-0">Part {i + 1}</p>
                              <div className="bg-green-500 py-2 px-5 rounded-lg flex items-center ml-5">
                                <HiCheckCircle
                                  size={20}
                                  className="text-white mr-2"
                                />
                                <p className="text-white">Approved</p>
                              </div>
                            </div>

                            <div className="flex items-center">
                              <p className="mb-0 mr-2">Qty</p>
                              <FormikControl
                                name={'parts.' + i + '.quantity'}
                                className="w-16"
                                control="input"
                              />
                            </div>
                          </div>

                          <div className="mt-6">
                            <Form.Group widths="16">
                              <Form.Field width="4">
                                <FormikControl
                                  name={'parts.' + i + '.partName'}
                                  label="Name"
                                  control="input"
                                />
                              </Form.Field>
                              <Form.Field width="4">
                                <FormikControl
                                  name={'parts.' + i + '.partNumber'}
                                  label="Number"
                                  control="input"
                                />
                              </Form.Field>
                              <Form.Field width="4">
                                <FormikControl
                                  name={'parts.' + i + '.price'}
                                  label="Price (AED)"
                                  control="input"
                                />
                              </Form.Field>
                              <Form.Field width="4">
                                <FormikControl
                                  name={'parts.' + i + '.labourCost'}
                                  label="Labour Cost (AED)"
                                  control="input"
                                />
                              </Form.Field>
                            </Form.Group>
                          </div>
                        </div>
                      ))}
                    </Form.Field>
                  )}
                ></FieldArray>
              )}

              <div className="mt-5">
                <p className="font-medium text-labelColor">Summary</p>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-400 mb-0">Service Cost</p>
                  <p className="text-gray-400 mb-0">
                    {formik.values.serviceCost} AED
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-400 mb-0">Parts Cost</p>
                  <p className="text-gray-400 mb-0">
                    {formik.values.totalParts} AED
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-400 mb-0">VAT ({state.vat} %)</p>
                  <p className="text-gray-400 mb-0">
                    {formik.values.totalVat} AED
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-400 mb-0">
                    Service VAT ({state.serviceVAT} %)
                  </p>
                  <p className="text-gray-400 mb-0">
                    {formik.values.totalServiceVat} AED
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-mainBgColor-default font-medium mb-0">
                    Total Cost
                  </p>
                  <p className="text-mainBgColor-default font-medium mb-0">
                    {formik.values.total} AED
                  </p>
                </div>
              </div>

              <div className="text-center my-7">
                <Button content="Save" className="btn-primary " type="submit" />
                <Button className="btn-declined mx-5">Cancel</Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default DiagnosisFormStep
