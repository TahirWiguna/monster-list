import { USER_ACTION_TYPES } from "./user.types"

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
}

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SIGN_IN_START:
      return { ...state, isLoading: true }
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, isLoading: false, error: null, user: action.payload }
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}
