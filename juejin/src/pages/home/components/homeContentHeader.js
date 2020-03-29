import React from 'react'
import {Header, HeaderItem} from '../style'

class HomeContentHeader extends React.Component{
  render(){
    return(
      <Header>
        <HeaderItem>热门</HeaderItem>
        <HeaderItem>最新</HeaderItem>
        <HeaderItem className="hotList">热榜</HeaderItem>
      </Header>
    )
  }
}

export default HomeContentHeader