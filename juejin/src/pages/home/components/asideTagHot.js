import React from 'react'
import {
  TagHot,
  TagHotHeader,
  TagList,
  List
} from '../style.js'
class AsideTagHot extends React.Component {

  render(){
    return (
      <TagHot>
        <TagHotHeader>
          <p>热门标签</p>
          <p><a target="_blank" href="https://juejin.im/subscribe/all" rel="noopener noreferrer">查看全部</a></p>
        </TagHotHeader>
        <TagList>
          <List>
            架构
        </List>
          <List>
            掘金翻译计划
        </List>
        </TagList>
      </TagHot>
    )
  }
}

export default AsideTagHot