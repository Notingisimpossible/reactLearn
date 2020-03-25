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

const Header = (props) => {
  const {check1, check2, check3, check4, check5} = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className={check1 ? "check" :"active"} onClick={() => props.checkIn('check1')}>首页</NavItem>
        <NavItem className={check2 ? "check" :"active"} onClick={() => props.checkIn('check2')}>沸点</NavItem>
        <NavItem className={check3 ? "check" :"active"} onClick={() => props.checkIn('check3')}>话题</NavItem>
        <NavItem className={check4 ? "check" :"active"} onClick={() => props.checkIn('check4')}>小册</NavItem>
        <NavItem className={check5 ? "check" :"active"} onClick={() => props.checkIn('check5')}>活动</NavItem>
        <NavSearchWrapper>
          <NavSearchFrom>
            <NavSearch></NavSearch>
            <span className="iconfont">&#xe649;</span>
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
  check5: state.header.get('check5')
})

const mapDispatch = (dispatch) => {
  return {
    checkIn(checks) {
      dispatch(actionCreators.wrapperCheck(checks))
    }
  }
}
export default connect(mapState, mapDispatch)(Header)