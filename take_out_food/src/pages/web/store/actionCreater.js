import * as actionType from './actionType'

export const changeTab = (tabColor) => {
  return {
    type: actionType.changeTab,
    tabColor
  }
}

export const getHomeList = () => {
  return {
    type: actionType.getHomeList
  }
}

export const changeHomeList = (data) => {
  return {
    type: actionType.changeHomeList,
    data
  }
}