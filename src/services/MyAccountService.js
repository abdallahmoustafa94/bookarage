import {authAxios} from '../config/axiosConfig'
import Auth from '../config/auth'


export const editProfile = editProfile => {
    return authAxios.post('/users/editProviderProfiles', editProfile, {
      
      headers: {
        'Access-Control-Allow-Origin': '*',
        mode: 'no-cors',
        
      },
    })
  }

 