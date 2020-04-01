import axios from 'axios'
// import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'


export const getHomeContenList = () => {

  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      // console.log(result)
      dispatch(changeHomeData(result))
    })
  }
}

const changeHomeData = (result) => ({
  type: actionTypes.LOADHOMECONTENT,
  contentList: result.homeContentList,
  aboutUsList: result.aboutList,
  hotList: result.hotTagList
})

export const changeHeaderCheck = (check) => ({
  type: actionTypes.CHANGECHECK,
  check
})

export const changeContentCheck = (contentCheck) => ({
  type: actionTypes.CHANGECONTENTCHECK,
  contentCheck
})