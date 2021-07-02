import {authAxios} from '../config/axiosConfig'

// Get my shops
export const getMyShops = () => {
  return authAxios.get('/shops/myShops')
}

// Get shop by id
export const getShopById = id => {
  return authAxios.post('/shops/getShopByShopId', {shopId: id})
}

// Get brands
export const getAllBrands = () => {
  return authAxios.get('/shops/allBrands')
}

// Get all services
export const getAllServices = () => {
  return authAxios.get('/services/allServices')
}

// Create new shop
export const createNewShop = newShop => {
  return authAxios.post('/shops/createShop', newShop)
}
