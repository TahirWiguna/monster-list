import { USER_ACTION_TYPES } from "./user.types"
import { createAction } from "../../utils/reducer/reducer.utils"

export const SignInStart = (username, password) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_START, { username, password })

export const SignInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)

export const SignInFailure = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error)

export const SignOutStart = (token) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START, token)

export const SignOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)

export const SignOutFailure = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE, error)
