import * as types from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS ({
  check1: true,
  check2: false,
  check3: false,
  check4: false,
  check5: false,
})
const checkChange = (state,checks) => {
  switch(checks){
    case 'check1':
      return state.merge({
        check1: true,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
      })
    case 'check2':
      return state.merge({
        check1: false,
        check2: true,
        check3: false,
        check4: false,
        check5: false,
      })
    case 'check3':
      return state.merge({
        check1: false,
        check2: false,
        check3: true,
        check4: false,
        check5: false,
      })
    case 'check4':
      return state.merge({
        check1: false,
        check2: false,
        check3: false,
        check4: true,
        check5: false,
      })
    case 'check5':
      return state.merge({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: true,
      })
    default :
      break
  }
}
export default (state = defaultState, action) => {
  if(action.type === types.WRAPPER_CHECK) {
    // immutable对象的set方法会结合之前immutable对象的值和设置的值结合好之后返回一个新对象
    return checkChange(state,action.checks)
  }
 
  return state
}