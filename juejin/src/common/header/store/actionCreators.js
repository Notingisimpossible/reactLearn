import * as types from './actionTypes'

export const wrapperCheck = (checks) => ({
  type: types.WRAPPER_CHECK,
  checks
})
