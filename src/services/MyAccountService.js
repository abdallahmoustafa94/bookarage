import {authAxios} from '../config/axiosConfig'
import Auth from '../config/auth'

export const editProfile = editProfile => {
  return authAxios.post('/users/editProviderProfiles', editProfile)
}

// Change avatar for user
export const changeAvatar = avatar => {
  return authAxios.post('/users/changeAvatar', avatar)
}
