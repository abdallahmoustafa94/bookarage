import {authAxios} from '../config/axiosConfig'

export const getMyShops = () => {
  return authAxios.get('/shops/myShops')
}
