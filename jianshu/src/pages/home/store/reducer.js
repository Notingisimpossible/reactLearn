import { fromJS } from 'immutable'
import * as constants from './constants'

// immutable.js
// facebook
// immutable对象

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({ // 把多个对象合并成一个对象
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList,),
        recommendList: fromJS(action.recommendList)
      })
    case constants.ADD_ARTICLE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        articlePage: action.nextPage
      })
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}