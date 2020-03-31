import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {
  HmoeWrapper,
  HomeContent,
} from './style'
import {actionCreators} from './store'
import Header from './components/header.js'
import HomeContentHeader from './components/homeContentHeader'
import Content from './components/contentList'
import Aside from './components/aside'


const Home = (props) => {
  const {contentList, aboutUsList, hotList, getHomeData} = props
  useEffect(() => {
    getHomeData()
  },[getHomeData])
  return (
    <HmoeWrapper>
      <Header/>
      <HomeContent>
        <HomeContentHeader />
        <Aside aboutList={aboutUsList} hotTagList={hotList}/>
        <Content contentList={contentList}/>
      </HomeContent>
    </HmoeWrapper>
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
export default connect(mapState, mapDispatch)(Home)