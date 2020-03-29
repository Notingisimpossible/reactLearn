import React from 'react'
import {
  OutNav,
  Nav,
  NavItem
} from '../style.js'

class Header extends React.Component{

  render() {
    return(
      <OutNav>
        <Nav>
          <NavItem>推荐</NavItem>
          <NavItem>后端</NavItem>
          <NavItem>前端</NavItem>
          <NavItem>Andriod</NavItem>
          <NavItem>iOs</NavItem>
          <NavItem>人工智能</NavItem>
          <NavItem>开发工具</NavItem>
          <NavItem>代码人生</NavItem>
          <NavItem>阅读</NavItem>
        </Nav>
      </OutNav>
    )
  }
}

export default Header