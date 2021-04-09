import * as actionTypes from './actionType'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  selectedTab:'redTab',
  tagName:[
    '去送黄焖鸡',
    '老子今天不上班',
    '螺蛳粉',
    '为什么要当外卖员'
  ],
  searchContent:[
    '去和庐送外卖',
    '去宁庐抢单',
    '我裂开了',
    '想吃黄焖鸡',
    '难受啊，兄弟'
  ],
  imgUrl:[
    1,2,3
  ],
  homeList: []
})

export default (state = defaultState, action) => {
  switch (action.type){
    case actionTypes.changeTab:
      return state.set("selectedTab",fromJS(action.tabColor))
    case actionTypes.changeHomeList:
      return state.set("homeList",fromJS(action.data))
    default:
      return state
  }
}