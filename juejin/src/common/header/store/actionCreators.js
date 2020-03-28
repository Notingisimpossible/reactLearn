import * as types from './actionTypes'

export const wrapperCheck = (checks) => ({
  type: types.WRAPPER_CHECK,
  checks
})

export const inputBlur = () => ({
  type: types.INPUT_BLUR
})

export const inputFocused = () => ({
  type: types.INPUT_FOCUSED
})