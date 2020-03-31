import {fromJS} from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  homeContentList: [],
  aboutList:[],
  hotTagList:[]
})
 
const changeHomeData = (state, action) => {
  return state.merge({
    homeContentList: fromJS(action.contentList),
    aboutList: fromJS(action.aboutUsList),
    hotTagList: fromJS(action.hotList)
  })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.LOADHOMECONTENT:
      return changeHomeData(state, action)
    default:
      return state
  }
}