import * as APIUtil from '../util/api_util'
import {
  receiveSessionErrors
} from './error_actions'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const APPLY_LOGIN_FORM = 'APPLY_LOGIN_FORM'
export const APPLY_SIGNUP_FORM = 'APPLY_SIGNUP_FORM'

export const applyLoginForm = () => ({
  type: APPLY_LOGIN_FORM
})

export const applySignupForm = () => ({
  type: APPLY_SIGNUP_FORM
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

export const signup = user => dispatch => (
  APIUtil.signup(user)
  .then(
    theUser => (
      dispatch(receiveCurrentUser(theUser))
    ), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    )
  )
)

export const login = user => dispatch => (
  APIUtil.login(user)
  .then(
    theUser => (
      dispatch(receiveCurrentUser(theUser))
    ), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    )
  )
)

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(
    user => (
      dispatch(logoutCurrentUser())
    )
  )
)