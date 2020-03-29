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

  render() {
    return(
      <Tag>
          <AsideReg />
          <AsideTagHot />
          <a href="https://juejin.im/app" rel="noopener noreferrer" target="_blank" style={{textDecoration: "none"}}>
           <AsideDownLoad />
          </a>
          <AsideRecommend/>
          <AsideFocusUs />
          <AsideAboutUs />
        </Tag>
    )
  }
}
export default Aside