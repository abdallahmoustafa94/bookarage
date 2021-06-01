import Auth from '../config/auth'
import {authAxios, axios} from '../config/axiosConfig'

// Get my requests
export const myRequests = id => {
  return authAxios.get('/requests/requestsByShopId/' + id)
}

// Update Request
export const updateRequest = status => {
  const token = Auth.getToken()
  const header = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
  return axios.patch('/requests/updateRequest', status, header)
}
