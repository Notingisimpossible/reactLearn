import {fromJS} from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  homeContentList: [],
  aboutList:[],
  hotTagList:[],
  check1: true,
  check2: false,
  check3: false,
  check4: false,
  check5: false,
  check6: false,
  check7: false,
  check8: false,
  check9: false,
  contentCheck1: true,
  contentCheck2: false,
  contentCheck3: false
})
 
const changeHomeData = (state, action) => {
  return state.merge({
    homeContentList: fromJS(action.contentList),
    aboutList: fromJS(action.aboutUsList),
    hotTagList: fromJS(action.hotList)
  })
}
const changCheck = (state, action) => {
  switch (action.check){
    case 'check1':
      return state.merge({
        check1: fromJS(true),
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: false
      })
    case 'check2':
      return state.merge({
        check1: false,
        check2: true,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: false
      })
    case 'check3':
      return state.merge({
        check1: false,
        check2: false,
        check3: true,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: false
      })
    case 'check4':
      return state.merge({
        check1: false,
        check2: false,
        check3: false,
        check4: true,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: false
      })
    case 'check5':
      return state.merge({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: true,
        check6: false,
        check7: false,
        check8: false,
        check9: false
      })
    case 'check6':
      return state.merge({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: true,
        check7: false,
        check8: false,
        check9: false
      })
    case 'check7':
      return state.merge({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: true,
        check8: false,
        check9: false
      })
    case 'check8':
      return state.merge({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: true,
        check9: false
      })
    case 'check9':
      return state.merge({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: true
      })
    default:
      return state
  }
}
const changeContentCheck = (state, action) => {
  switch (action.contentCheck){
    case "contentCheck1":
      return state.merge({
        contentCheck1: true,
        contentCheck2: false,
        contentCheck3: false
      })
    case "contentCheck2":
      return state.merge({
        contentCheck1: false,
        contentCheck2: true,
        contentCheck3: false
      })
    case "contentCheck3":
      return state.merge({
        contentCheck1: false,
        contentCheck2: false,
        contentCheck3: true
      })
    default:
      return state
  }
}
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.LOADHOMECONTENT:
      return changeHomeData(state, action)
    case actionTypes.CHANGECHECK:
      return changCheck(state, action)
    case actionTypes.CHANGECONTENTCHECK:
      return changeContentCheck(state, action)
    default:
      return state
  }
}