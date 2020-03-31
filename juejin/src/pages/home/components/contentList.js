import React from 'react'
import {Content} from '../style'

class HomeContent extends React.Component{

  render () {
    const {contentList} = this.props
    return(
      <>
        {
          contentList.map((item) => {
            return (
            <Content key={item.get('id')}>
              <ul>
                <li>
                  <span className="column">{item.get('class')}</span>
                  <span className="name">{item.get('username')}</span>
                  <span className="time">{item.get('publicTime')}</span>
                  <span className="class">{item.get('tag')}</span>
                </li>
                <li className="title">
                  <a target="_blank" href={item.get('avatarLarge')} rel="noopener noreferrer">{item.get('title')}</a>
                </li>
                <li className="iconList">
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
          })
        }
      </>
    )
  }
}

export default HomeContent