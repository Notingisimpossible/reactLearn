import React from 'react'
import {
  TagHot,
  TagHotHeader,
  TagList,
  List
} from '../../../style.js'
const AsideTagHot = (props) => {
  const {hotTagList} = props
  return (
    <TagHot>
      <TagHotHeader>
        <p>热门标签</p>
        <p><a target="_blank" href="https://juejin.im/subscribe/all" rel="noopener noreferrer">查看全部</a></p>
      </TagHotHeader>
        <TagList>
          {
            hotTagList.map((item) => {
              return(
                
                  <List key={item.get("id")}>
                    {item.get('tagName')}
                  </List>
              )
            })
          }
        </TagList>
    </TagHot>
  )
}

export default AsideTagHot