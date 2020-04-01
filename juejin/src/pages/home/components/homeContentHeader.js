import React from 'react'
import {Header, HeaderItem} from '../style'
import {connect} from 'react-redux'
import { actionCreators } from '../store'

const HomeContentHeader = (props) => {
  const {contentCheck1, contentCheck2, contentCheck3, changeContentCheck} = props
  console.log(contentCheck1, contentCheck2, contentCheck3)
  return(
    <Header>
      <HeaderItem className={contentCheck1 ? "color" : ''} onClick={() => {changeContentCheck("contentCheck1")}}>热门</HeaderItem>
      <HeaderItem className={contentCheck2 ? "color" : ''} onClick={() => {changeContentCheck("contentCheck2")}}>最新</HeaderItem>
      <HeaderItem className={contentCheck3 ? "color hotList" : 'hotList'} onClick={() => {changeContentCheck("contentCheck3")}}>热榜</HeaderItem>
    </Header>
  )
}
const mapState = (state) => ({
  contentCheck1: state.home.get('contentCheck1'),
  contentCheck2: state.home.get('contentCheck2'),
  contentCheck3: state.home.get('contentCheck3')
})
const mapDispatch = (dispatch) => ({
  changeContentCheck(contentCheck){
    const action = actionCreators.changeContentCheck(contentCheck)
    dispatch(action)
  }
})
export default connect(mapState, mapDispatch)(HomeContentHeader)