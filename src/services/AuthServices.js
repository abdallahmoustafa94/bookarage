import {authAxios, axios} from '../config/axiosConfig'

export const login = loginData => {
  return axios.post('/auth/login', loginData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      mode: 'no-cors',
    },
  })
}

export const logout = () => {
  return authAxios.get('/auth/logout')
}

export const signup = signupData => {
  return axios.post('/auth/signup', signupData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      mode: 'no-cors',
    },
  })
}

// export const verifyAndSendOTP = verifyData => {
//   return axios.post('https://bookrage-server.herokuapp.com/auth/verifyAndSendOTP', verifyData, {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       mode: 'no-cors',
//     },
//   })
// }

// export const verifyOTPCode = verifyOTPData => {
//   return axios.post('https://bookrage-server.herokuapp.com/auth/verifyOTPCode', verifyOTPData, {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       mode: 'no-cors',
//     },
//   })
// }

export const createShop = createShopData => {
  return axios.post('/shops/createShop', createShopData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      mode: 'no-cors',
    },
  })
}
