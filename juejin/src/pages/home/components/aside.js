import React from 'react'
import {
  Tag,
} from '../style.js'
import AsideReg from './asideReg'
import AsideTagHot from './asideTagHot'
import AsideDownLoad from './asideDownLoad'
import AsideRecommend from './asideRecommend'
import AsideFocusUs from './asideFocus'
import AsideAboutUs from './asideAboutUs'
class Aside extends React.Component{

  // state({
  //   hotTagList: [],
  //   aboutList:[]
  // })

  render() {
    const {hotTagList, aboutList} = this.props
    return(
      <Tag>
          <AsideReg />
          <AsideTagHot hotTagList={hotTagList}/>
          <a href="https://juejin.im/app" rel="noopener noreferrer" target="_blank" style={{textDecoration: "none"}}>
           <AsideDownLoad />
          </a>
          <AsideRecommend aboutList={aboutList}/>
          <AsideFocusUs />
          <AsideAboutUs />
        </Tag>
    )
  }
}
export default Aside