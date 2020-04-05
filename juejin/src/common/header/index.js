import React from 'react'
import {connect} from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  NavSearchWrapper,
  NavSearchFrom,
  Addition,
  Button
} from './style'
// 无状态组件
import * as actionCreators from './store/actionCreators'
import {Link} from 'react-router-dom'


const Header = (props) => {
  const {check1, check2, check3, check4, check5, focused} = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <Link to='/'><NavItem className={check1 ? "check" :"active"} onClick={() => props.checkIn('check1')}>首页</NavItem></Link>
        <Link to='/pins'><NavItem className={check2 ? "check" :"active"} onClick={() => props.checkIn('check2')}>沸点</NavItem></Link>
        <Link to='/topics'><NavItem className={check3 ? "check" :"active"} onClick={() => props.checkIn('check3')}>话题</NavItem></Link>
        <Link to='/books'><NavItem className={check4 ? "check" :"active"} onClick={() => props.checkIn('check4')}>小册</NavItem></Link>
        <Link to='/event'><NavItem className={check5 ? "check" :"active"} onClick={() => props.checkIn('check5')}>活动</NavItem></Link>
        <NavSearchWrapper >
          <NavSearchFrom className={focused ? 'focused' : ''}>
            <NavSearch onBlur={props.handleInputBlur} onFocus={props.handleInputFocus} ></NavSearch>
            <span className={focused ? "iconfont focused" : 'iconfont'}>&#xe649;</span>
          </NavSearchFrom>
        </NavSearchWrapper>
        <Addition>
          <Button className="writing"><span className="iconfont">&#xe647;</span>写文章</Button>
          <Button className="reg">登录</Button>
          <Button className="log">注册</Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  )
}

const mapState = (state) => ({
  check1: state.header.get('check1'),
  check2: state.header.get('check2'),
  check3: state.header.get('check3'),
  check4: state.header.get('check4'),
  check5: state.header.get('check5'),
  focused: state.header.get('focused')
})

const mapDispatch = (dispatch) => {
  return {
    checkIn(checks) {
      dispatch(actionCreators.wrapperCheck(checks))
    },
    handleInputBlur() {
      dispatch(actionCreators.inputBlur())
    },
    handleInputFocus() {
      dispatch(actionCreators.inputFocused())
    }
  }
}
export default connect(mapState, mapDispatch)(Header)