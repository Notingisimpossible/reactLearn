import React from 'react'
import {
  Tools,
  ToolsList
} from '../style'

class AsideRecommend extends React.Component{

  render() {
    const {aboutList} = this.props
    console.log('aboutList',aboutList)
    return(
      <Tools>
        {
          aboutList.map((item, index) => {
            return(
              <ToolsList key={index}>
                <img src={item.get('imgUrl')} alt="图片加载失败"></img>
                <span>{item.get('title')}</span>
              </ToolsList>
            )
          })
        }
      </Tools>
    )
  }
}
export default AsideRecommend