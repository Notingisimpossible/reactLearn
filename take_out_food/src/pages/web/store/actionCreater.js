import * as actionType from './actionType'

export const changeTab = (tabColor) => {
  return {
    type: actionType.changeTab,
    tabColor
  }
}