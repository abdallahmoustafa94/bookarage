import jwt_decode from 'jwt-decode'
import {keys} from './keys'

let token = localStorage.getItem('token')
let signupToken = localStorage.getItem('signupToken')

const Auth = {
  isAuth: () => {
    return Boolean(token)
  },
  isSignupAuth: () => {
    return Boolean(signupToken)
  },
  getToken: () => {
    return token
  },
  getSignupToken: () => {
    return signupToken
  },
  setToken: val => {
    token = val
    localStorage.setItem('token', token)
    return token
  },
  setSignupToken: val => {
    signupToken = val
    localStorage.setItem('signupToken', signupToken)
    return signupToken
  },
  getUserId: () => {
    const userId = JSON.parse(localStorage.getItem('user') || '[]')
    return userId._id
  },
  getShopId: () => {
    const userId = JSON.parse(localStorage.getItem('user') || '[]')
    return userId.shopId
  },
  isExpired: myToken => {
    const decodeToken = jwt_decode(myToken)
    const now = new Date().getTime() / 1000
    if (now > decodeToken.exp) {
      return true
    } else {
      return false
    }
  },
  isHR: () => {
    const userRole = JSON.parse(localStorage.getItem('user') || '[]')

    if (![keys.ROLES.hr].includes(userRole.role)) {
      return false
    }
    return true
  },
  isManager: () => {
    const userRole = JSON.parse(localStorage.getItem('user') || '[]')
    if (userRole.role === keys.ROLES.manager && !userRole.department.isMaster) {
      const roleData = {
        isAuth: true,
        _id: userRole._id,
        department: userRole.department._id,
        departmentNameEN: userRole.department.nameEN,
        departmentNameAR: userRole.department.nameAR,
      }
      return roleData
    } else {
      return false
    }
  },
  isMaster: () => {
    const userRole = JSON.parse(localStorage.getItem('user') || '[]')
    if (userRole.role === keys.ROLES.manager && userRole.department.isMaster) {
      const roleData = {
        isAuth: true,
        _id: userRole._id,
        department: userRole.department._id,
        departmentNameEN: userRole.department.nameEN,
        departmentNameAR: userRole.department.nameAR,
      }
      return roleData
    } else {
      return false
    }
  },
  isSecretary: () => {
    const userRole = JSON.parse(localStorage.getItem('user') || '[]')
    if (
      userRole.role === keys.ROLES.secretary &&
      userRole.departmentType === 'MasterDepartment'
    ) {
      const roleData = {
        isAuth: true,
        department: userRole.department._id,
        departmentName: userRole.department.name,
      }
      return roleData
    }
    return false
  },
  isManagerOrHigher: () => {
    const decodeToken = jwt_decode(token)
    if (['manager', 'admin'].includes(decodeToken.role)) return true
    else return false
  },
  isAdmin: () => {
    const decodeToken = jwt_decode(token)
    if (decodeToken.role === 'admin') return true
    else return false
  },
  logout: () => {
    token = ''
    signupToken = ''
    localStorage.setItem('token', '')
    localStorage.setItem('signupToken', '')
  },
}

export default Auth
