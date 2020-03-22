import React, {Component} from 'react'
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {actionCreators} from './store'
import {connect} from 'react-redux'
class Home extends Component {
  componentDidMount () {
   this.props.changeHomeData()
   this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)

  }
  handleScrollTop(){
    window.scrollTo({
      top:0,
      behavior: 'smooth' // 使其平滑滚动
    })
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
  render () {
    return (
      <HomeWrapper>
       <HomeLeft>
         <img className="banner-img" src="https://upload-images.jianshu.io/upload_images/11864358-2c5f48f03dffb247.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" alt="图片丢失"></img>
         <Topic />
         <List />
       </HomeLeft>
       <HomeRight>
         <Recommend />
         <Writer />
       </HomeRight>
       {
         this.props.showScroll ? 
         <BackTop onClick={this.handleScrollTop}>
           <span className="backTopTip">回到顶部</span>
           <span className="iconfont">&#xe684;</span>
          </BackTop> 
         : null
       }
      </HomeWrapper>
    )
  }
}
const mapState = (state) => ({
  showScroll: state.home.get('showScroll')
})
const mapDispatchToProps =(dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    action(dispatch)
  },
  changeScrollTopShow(e) {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    }else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})
export default connect(mapState, mapDispatchToProps)(Home)