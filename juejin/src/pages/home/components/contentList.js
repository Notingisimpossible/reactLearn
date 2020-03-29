import React from 'react'
import {Content} from '../style'
class HomeContent extends React.Component{

  render () {
    return(
      <Content>
          <ul>
            <li>
              <span className="column">专栏</span>
              <span className="name">树酱</span>
              <span className="time">25分钟前</span>
              <span className = "class">前端</span>
            </li>
            <li className="title">
              <a target="_blank" href="https://juejin.im/post/5e7af0685188255dcf4a497e" rel="noopener noreferrer">前端缓存那些事</a>
            </li>
            <li className = "iconList">
              <div>
                <span className="iconfont">&#xe605;8</span>
              </div>
              <div>
                <span className="iconfont">&#xe601;25</span>
              </div>
              <div>
                <span className="iconfont">&#xe673;</span>
              </div>
            </li>
            <li>
            </li>
          </ul>
        </Content>
    )
  }
}

export default HomeContent