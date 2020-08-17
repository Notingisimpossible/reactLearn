import * as actionTypes from './constants'
import { fromJS } from 'immutable'

import { getBannerRequest, getRecommendListRequest } from '../../../api/request'


export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})
// 获取轮播图数据
export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
    .then(data => {
      dispatch(changeBannerList(data.banners))
    })
    .catch(() => {
      console.log("轮播图数据获取失败")
    })
  }
}
// 获取列表
export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest()
    .then(data => {
      dispatch(changeRecommendList(data.result))
      dispatch(changeEnterLoading(false))//改变loading状态
    })
    .catch(() => {
      console.log("推荐歌单数据传输错误")
    })
  }
}
// 是否加载loading
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})