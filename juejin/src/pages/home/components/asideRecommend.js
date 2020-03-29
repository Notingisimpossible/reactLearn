import React from 'react'
import {
  Tools,
  ToolsList
} from '../style'

class AsideRecommend extends React.Component{

  render() {
    return(
      <Tools>
        <ToolsList>
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/collections.945b9ae.png" alt="图片加载失败"></img>
          <span>收藏集</span>
        </ToolsList>
      </Tools>
    )
  }
}
export default AsideRecommend