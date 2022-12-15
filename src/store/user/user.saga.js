import { takeLatest, all, call, put } from "redux-saga/effects"
import {
  SignInStart,
  SignInFailure,
  SignInSuccess,
  SignOutStart,
  SignOutFailure,
  SignOutSuccess,
} from "./user.action"
import { USER_ACTION_TYPES } from "./user.types"
import { SignIn } from "./user.model"

import { useSelector } from "react-redux"
import { selectCurrentUser } from "./user.selector"

export function* fetchUser({ payload: { username, password } }) {
  try {
    const user = yield call(SignIn, { username, password })
    if (user.error) {
      yield put(SignInFailure(user.error))
      return false
    }
    yield put(SignInSuccess(user))
  } catch (error) {
    yield put(SignInFailure(error))
  }
}

export function* signOut({ payload: { token } }) {
  try {
    yield put(SignOutSuccess())
  } catch (error) {
    yield put(SignOutFailure(error))
  }
}

export function* onFetchUser() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START, fetchUser)
}

export function* onSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSaga() {
  yield all([call(onFetchUser), call(onSignOut)])
}
