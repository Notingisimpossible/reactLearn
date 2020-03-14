import * as types from './actionTypes'
import {fromJS} from 'immutable'
// immutable.js
// facebook
// immutable对象

const defaultState = fromJS ({
  focused: false
})

export default (state = defaultState, action) => {
  if(action.type === types.SEARCH_FOCUS) {
    // immutable对象的set方法会结合之前immutable对象的值和设置的值结合好之后返回一个新对象
    return state.set('focused', true)
  }
  if(action.type === types.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}