import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { HomeContent} from '../../style'
import Aside from './aside'
import HomeContentHeader from './contentComponent/homeContentHeader'
import Content from './contentComponent/contentList'
import {actionCreators} from '../../store'

const HomeContents = (props) => {
  const {contentList, aboutUsList, hotList,getHomeData} = props

  useEffect(() => {
    getHomeData()
  },[getHomeData])

  return (
    <HomeContent>
      <HomeContentHeader />
      <Aside aboutList={aboutUsList} hotTagList={hotList}/>
      <Content contentList={contentList}/>
    </HomeContent>
  )
}
const mapState = (state) => ({
  contentList: state.home.get('homeContentList'),
  aboutUsList: state.home.get('aboutList'),
  hotList: state.home.get('hotTagList')
})
const mapDispatch = (dispatch) => ({
  getHomeData() {
    const action = actionCreators.getHomeContenList()
    action(dispatch)
  }
})
export default connect(mapState, mapDispatch)(HomeContents)