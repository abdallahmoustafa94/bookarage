import Auth from '../config/auth'
import {axios} from '../config/axiosConfig'

// Get my requests
export const myRequests = () => {
  const token = Auth.getToken()
  const header = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }

  return axios.get('/requests/myRequests', header)
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
