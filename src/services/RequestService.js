import Auth from '../config/auth'
import {authAxios, axios} from '../config/axiosConfig'

// Get my requests
export const myRequests = id => {
  return authAxios.get('/requests/requestsByShopId/' + id)
}

// Update Request
export const updateRequest = status => {
  return authAxios.patch('/requests/updateRequestStatus', status)
}

// Assign Technician to request
export const assignTechnicianToRequest = requestData => {
  return authAxios.post('/requests/assignEmpToRequest', requestData)
}

// get my assigned requests
export const getMyAssignedRequests = () => {
  return authAxios.get('/users/employees/myAssignedRequests')
}

// Update overview for requested car
export const updateOverviewForCar = overviewData => {
  return authAxios.patch('/cars/updateOverviews', overviewData)
}
