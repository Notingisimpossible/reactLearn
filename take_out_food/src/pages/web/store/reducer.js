import * as actionTypes from './actionType'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  selectedTab:'redTab'
})

export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.changeTab:
      return state.set("selectedTab",fromJS(action.tabColor))
    default:
      return state
  }
}