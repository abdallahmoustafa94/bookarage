import Auth from '../config/auth'
import {authAxios, axios} from '../config/axiosConfig'

// Get my requests
export const myRequests = id => {
  return authAxios.get('/requests/requestsByShopId/' + id)
}

// Get car History
export const carHistory = carId => {
  return authAxios.get('/requests/carHistory/' + carId)
}

// Update Request
export const updateRequest = status => {
  return authAxios.patch('/requests/updateRequest', status)
}
