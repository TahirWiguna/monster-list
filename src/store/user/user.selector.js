import { createSelector } from "reselect"

export const selectCurrentUserReducer = (state) => state.user

export const selectCurrentUser = createSelector(
  [selectCurrentUserReducer],
  (user) => user.user
)

export const selectIsLoading = createSelector(
  [selectCurrentUserReducer],
  (user) => user.isLoading
)

export const selectError = createSelector(
  [selectCurrentUserReducer],
  (user) => user.error
)
