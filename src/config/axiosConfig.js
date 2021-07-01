import Auth from './auth'
import Axios from 'axios'

Axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? process.env.REACT_APP_DEV_URL
    : process.env.REACT_APP_SERVER_URL

const AuthAxios = Axios.create()

AuthAxios.interceptors.request.use(config => {
  console.log(Auth.getToken())
  let accessToken = Auth.getToken() || Auth.getSignupToken()

  console.log(accessToken)

  if (Auth.isExpired(accessToken)) {
    Auth.logout()
    window.location.pathname = '/auth/login'
  }

  config.headers = {Authorization: `Bearer ${Auth.getToken()}`}
  return config
})

export const axios = Axios
export const authAxios = AuthAxios
