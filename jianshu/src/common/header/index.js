import React from 'react'
import {CSSTransition} from 'react-transition-group' // 动画过渡插件
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'
import {Link} from 'react-router-dom'
// 无状态组件
const Header = (props) => {
  const {login, logout} = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active"><span className="iconfont">&#xe62d;</span><a className="active" href="/">首页</a></NavItem>
        <NavItem className="left changebg"><span className="iconfont">&#xe605;</span>下载App</NavItem>
        {
          login ? <NavItem onClick={logout} className="right">退出</NavItem> 
          :<Link to="/login"> <NavItem className="right">登录</NavItem></Link>
        }
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition timeout={200} in={props.focused} classNames="slide">
            {/* slide-enter slider-enter-active slide-exit slide-exit-active */}
            <NavSearch onBlur={props.handleInputBlur} onFocus={props.handleInputFocus} className={props.focused ? 'focused' : ''}></NavSearch>
          </CSSTransition>
          <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe638;</span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Link to="/write">
          <Button className="writing"><span className="iconfont">&#xe62e;</span>写文章</Button>
          <Button className="reg">注册</Button>
        </Link>
      </Addition>
    </HeaderWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    focused:state.header.get('focused'),
    login: state.login.get('login')
  }
}
// 直接将store.dispatch ===> props
const mapDispatchToProps = (dispatch) => {
  return {
     handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)