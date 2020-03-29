import React from 'react'
import {
  AboutUS
} from '../style'
class AsideAboutUs extends React.Component{

  render() {
    return(
      <AboutUS>
        <ul>
          <li>
            关于
              </li>
          <li>
            招聘
              </li>
          <li>
            商业合作
              </li>
          <li>
            友情链接
              </li>
        </ul>
        <ul>
          <li className="message">用户协议</li>
          <li className="personal">隐私政策</li>
        </ul>
        <ul className="banquan">
          <li>©2020 掘金</li>
        </ul>
        <ul>
          <li>Powered by QingCloud</li>
        </ul>
        <ul>
          <li>津ICP备15003202号-2</li>
        </ul>
        <ul>
          <li>京公网安备11010802026719号</li>
        </ul>
      </AboutUS>
    )
  }
}

export default AsideAboutUs