import jwt_decode from 'jwt-decode'
import {keys} from './keys'

let token = localStorage.getItem('token')
let signupToken = localStorage.getItem('signupToken')

const Auth = {
  isAuth: () => {
    // console.log(token)
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
    // return userId._id
  },
  getUserData: () => {
    const user = JSON.parse(localStorage.getItem('user') || '[]')
    return user
  },
  getShopId: () => {
    const shopId = JSON.parse(localStorage.getItem('shop') || '[]')
    return shopId
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
  isTechnician: () => {
    const user = JSON.parse(localStorage.getItem('user') || '[]')

    //   if (![keys.ROLES.tech].includes(user.role)) {
    //     return false
    //   }

    //   return true
    // },

    // isServiceProvider: () => {
    //   const user = JSON.parse(localStorage.getItem('user') || '[]')

    //   if (![keys.ROLES.serviceProvider].includes(user.role)) {
    //     return false
    //   }

    //   return true
    // },
    // isCarRental: () => {
    //   const user = JSON.parse(localStorage.getItem('user') || '[]')

    //   if (![keys.ROLES.carRental].includes(user.role)) {
    //     return false
    //   }

    //   return true
    // },
    // isCarRecovery: () => {
    //   const user = JSON.parse(localStorage.getItem('user') || '[]')

    //   if (![keys.ROLES.carRecovery].includes(user.role)) {
    //     return false
    //   }

    //   return true
    // },
    // isInsurance: () => {
    //   const user = JSON.parse(localStorage.getItem('user') || '[]')

    //   if (![keys.ROLES.insurance].includes(user.role)) {
    //     return false
    //   }

    return true
  },
  logout: () => {
    token = ''
    signupToken = ''

    localStorage.setItem('token', '')
    localStorage.setItem('signupToken', '')
    localStorage.removeItem('shop')
    localStorage.removeItem('user')
  },
}

export default Auth
