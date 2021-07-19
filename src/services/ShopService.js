import {auth, authAxios} from '../config/axiosConfig'
import axios from 'axios'

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

// Add working hours for shop
export const addWorkingHrs = addWorkingHrs => {
  return authAxios.post('/shops/addWorkingHrs', addWorkingHrs)
}

// Get all employees
export const getAllEmployees = () => {
  return authAxios.get('/users/employees/allEmployees')
}

// Change avatar for user
export const changeAvatar = () => {
  return authAxios.post('/users/changeAvatar')
}

export const uploadShopPhotos = imgData => {
  return authAxios.post('/shops/uploadShopPhotos', imgData)
}

//update shop
export const updateShopProfile = updateShop => {
  return authAxios.patch('/shops/updateShopProfile', updateShop)
}

//Service Provider
//add service
export const addServiceForShop = addServiceForShop => {
  return authAxios.post('/shops/addServiceForShop', addServiceForShop)
}

// Update shop service
export const updateShopService = serviceData => {
  return authAxios.patch('/shops/updateShopServices', serviceData)
}

//delete Service
export const deleteService = removedService => {
  return authAxios.delete('/shops/deleteService', {data: removedService})
}

//set Service Avilability
export const setServiceAvailability = setServiceAvailability => {
  return authAxios.patch('/shops/serviceAvailability', setServiceAvailability)
}

//add new employee
export const addEmployee = addEmployee => {
  return authAxios.post('/auth/signup', addEmployee)
}

// Get employees by shop id
export const getEmployeesByShopId = shopId => {
  return authAxios.post('/shops/employeesByShopId', shopId)
}

// Edit working hours for employee
export const editWorkingHoursForEmployee = employeeHours => {
  return authAxios.patch('/users/editEmployeeWorkingHours', employeeHours)
}

export const addBrand = addBrand => {
  return authAxios.post('/shops/addBrand', addBrand)
}

export const removeBrand = removedBrand => {
  return authAxios.delete('/shops/deleteBrand', {data: removedBrand})
}

export const getProfile = getProfile => {
  return authAxios.get('/users/me', getProfile)
}
