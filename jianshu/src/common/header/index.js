import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group' // 动画过渡插件

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

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      focused: false
    }
  }
  handleInputFocus = () => {
    this.setState({
      focused: true
    })
  }
  handleInputBlur = () => {
    this.setState({
      focused: false
    })
  }
  render () {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active"><span className="iconfont">&#xe62d;</span>首页</NavItem>
          <NavItem className="left changebg"><span className="iconfont">&#xe605;</span>下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={this.state.focused} classNames="slide">
              {/* slide-enter slider-enter-active slide-exit slide-exit-active */}
              <NavSearch onBlur={this.handleInputBlur} onFocus={this.handleInputFocus} className={this.state.focused ? 'focused' : ''}></NavSearch>
            </CSSTransition>
            <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe638;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
        <Button className="writing"><span className="iconfont">&#xe62e;</span>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
export default Header