import React, {Component} from 'react'
import { Divider, Card } from 'antd'
import {GithubOutlined} from '@ant-design/icons'
import './index.less'

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data:[
      ]
    }
  }

  render () {
    return (
      <div className="about-me-content">
        <Card>
          <div style={{width:'95%', paddingLeft:'5%'}}>
            <Divider orientation="left">Blog</Divider>
            <p>一直基于 vue 写业务，所以博客选用了 react + react-router + mbox 这套技术栈，借此熟悉下 react 开发模式</p>
            <p>纯函数式开发，很甜</p>
            <p>前端：react + antd + react-router + es6 + webpack + axios</p>
            <p>服务端：koa2 + mysql + sequelize</p>
            <div className="about-me-content-p">
              <p>源码戳这里</p>
            </div>
            <div className="about-me-content-a">
              <a target="_blank" href="https://github.com/gzwgq222/blog-admin">web端</a>
              <br/>
              <a href="https://github.com/gzwgq222/blog-server">node服务端</a>
            </div>
            <Divider orientation="left">Me</Divider>
            <ul className="about-ul">
              <li>姓名： SongMin</li>
              <li>
                <GithubOutlined />
                <a style={{color:'#595959'}} href="https://github.com/Notingisimpossible" target="_blank">：github地址</a>
              </li>
              <li>
                联系方式：182****6994<a hrer="#">{`\xa0\xa0\xa0\xa0\xa0\xa02421665649@qq.com`}</a>
              </li>
              <li>
                简介：不想写了，就到这儿叭！
              </li>
            </ul>
          </div>
        </Card>
      </div>
    )
  }
}

export default About