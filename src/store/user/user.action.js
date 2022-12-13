import { USER_ACTION_TYPES } from "./user.types"
import { createAction } from "../../utils/reducer/reducer.utils"

export const SignInStart = (username, password) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_START, { username, password })

export const SignInSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS)

export const SignInFailure = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error)
