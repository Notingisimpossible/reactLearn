import React from 'react'
import {
  HmoeWrapper,
  OutNav,
  Nav,
  NavItem,
  HomeContent,
  Header,
  HeaderItem,
  Content
} from './style'

const Home = (props) => {
  return (
    <HmoeWrapper>
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
      <HomeContent>
        <Header>
          <HeaderItem>热门</HeaderItem>
          <HeaderItem>最新</HeaderItem>
          <HeaderItem className="hotList">热榜</HeaderItem>
        </Header>
        <Content>
          <ul>
            <li>
              <span className="column">专栏</span>
              <span className="name">树酱</span>
              <span className="time">25分钟前</span>
              <span className = "class">前端</span>
            </li>
            <li className="title">
              前端缓存那些事
            </li>
            <li className = "iconList">
              <span className="iconfont">&#xe605;</span>
              <span className="iconfont">&#xe601;</span>
              <span className="iconfont">&#xe673;</span>
            </li>
          </ul>
        </Content>
        <Content>
          <ul>
            <li>
              <span className="column">专栏</span>
              <span className="name">树酱</span>
              <span className="time">25分钟前</span>
              <span className = "class">前端</span>
            </li>
            <li className="title">
              前端缓存那些事
            </li>
            <li className = "iconList">
              <span className="iconfont">&#xe605;</span>
              <span className="iconfont">&#xe601;</span>
              <span className="iconfont">&#xe673;</span>
            </li>
          </ul>
        </Content>
        <Content>
          <ul>
            <li>
              <span className="column">专栏</span>
              <span className="name">树酱</span>
              <span className="time">25分钟前</span>
              <span className = "class">前端</span>
            </li>
            <li className="title">
              <a href="#">前端缓存那些事</a>
            </li>
            <li className = "iconList">
              <span className="iconfont">&#xe605;</span>
              <span className="iconfont">&#xe601;</span>
              <span className="iconfont">&#xe673;</span>
            </li>
          </ul>
        </Content>
        {/* <Tag>
          <TagItem></TagItem>
          <TagItem></TagItem>
        </Tag> */}
      </HomeContent>
    </HmoeWrapper>
  )
}

export default Home