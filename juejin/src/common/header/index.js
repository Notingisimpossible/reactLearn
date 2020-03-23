import React from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem
} from './style'
// 无状态组件

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="active">首页</NavItem>
        <NavItem className="active">沸点</NavItem>
        <NavItem className="active">话题</NavItem>
        <NavItem className="active">小册</NavItem>
        <NavItem className="active">活动</NavItem>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header