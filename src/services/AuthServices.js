import Auth from '../config/auth'
import {axios} from '../config/axiosConfig'

export const login = loginData => {
  return axios.post('/auth/login', loginData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      mode: 'no-cors',
    },
  })
}

export const logout = () => {
  const token = Auth.getToken()
  return axios.get('/auth/logout', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}
