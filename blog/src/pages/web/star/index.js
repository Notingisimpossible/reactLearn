import React, {Component} from 'react'
import { Divider, Card, Pagination } from 'antd'

class Star extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data:[
        {
          id: 1,
          title: "A* 算法解决迷宫寻址问题",
          url: "https://juejin.im/post/5dd12441f265da0bd93cb414"
        },
        {
          id: 2,
          title: "全栈学习所有的学习历史[git地址]",
          url: "https://github.com/Notingisimpossible"
        }
      ]
    }
  }

  render() {
    return (
      <div className="star-content">
        <Card>
          <div style={{color:'#000',paddingLeft:'20px',paddingTop:'12px', width:'96%'}}>
            <p>
              文章收藏
            </p>
            <Divider/>
          </div>
          {
            this.state.data.map(v => (
              <div style={{color:'#1890ff',paddingLeft:'20px', cursor:'pointer',width:'96%'}}>
                <a href={v.url} target="_blank" key={v.id}>{v.title}</a>
                <Divider />
              </div>
            ))
          }
          <Pagination defaultCurrent={1}  total={2} style={{paddingLeft:'85%', paddingBottom:'2px'}}/>
        </Card>
      </div>
    )
  }
}

export default Star