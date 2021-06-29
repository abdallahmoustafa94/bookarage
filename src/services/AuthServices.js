import {authAxios, axios} from '../config/axiosConfig'

export const login = loginData => {
  return axios.post('https://bookrage-server.herokuapp.com/auth/login', loginData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      mode: 'no-cors',
    },
  })
}

export const logout = () => {
  return authAxios.get('/auth/logout')
}
