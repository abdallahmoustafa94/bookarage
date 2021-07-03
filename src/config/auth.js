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

  logout: () => {
    token = ''
    signupToken = ''

    localStorage.setItem('token', '')
    localStorage.setItem('signupToken', '')
    localStorage.removeItem('shop')
  },
}

export default Auth
