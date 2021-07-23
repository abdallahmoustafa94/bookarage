import Auth from '../config/auth'
import {authAxios, axios} from '../config/axiosConfig'

// Get my requests
export const myRequests = id => {
  return authAxios.get('/requests/requestsByShopId/' + id)
}

// Update Request
export const updateRequest = status => {
  return authAxios.patch('/requests/updateRequest', status)
}

// Assign Technician to request
export const assignTechnicianToRequest = requestData => {
  return authAxios.post('/requests/assignEmpToRequest', requestData)
}

// get my assigned requests
export const getMyAssignedRequests = () => {
  return authAxios.get('/users/employees/myAssignedRequests')
}
