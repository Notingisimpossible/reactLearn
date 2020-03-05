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
      <div  className="content-inner-wrapper about">
        <Card>
          <div style={{width:'95%', paddingLeft:'5%'}}>
            <Divider orientation="left">Blog</Divider>
            <p>一直基于 vue 写业务，所以博客选用了 react + react-router + mbox 这套技术栈，借此熟悉下 react 开发模式</p>
            <p>纯函数式开发，很甜</p>
            <p>前端：react + antd + react-router + es6 + webpack + axios</p>
            <p>服务端：koa2 + mysql + sequelize</p>
            <p className='code'>源码戳这里</p>
            <p>
              <a
              target="_blank"
              className='link'
              rel="noreferrer noopener"
              href="https://github.com/gzwgq222/blog-admin">
                web端
              </a>
            </p>
            <p>
              <a
              target="_blank"
              className='link'
              rel="noreferrer noopener"
              href="https://github.com/gzwgq222/blog-server">
                node服务端
              </a>
            </p>
            <Divider orientation="left">Me</Divider>
            <ul>
              <li>姓名：Gong Qiang</li>
              <li>
              <GithubOutlined />
              <a
              target="_blank"
              className='link'
              rel="noreferrer noopener"
              href="https://github.com/gzwgq222">
                github
              </a>
              </li>
              <li>
                联系方式：
                <span>18174352598</span>
                <Divider type="vertical" />
                <i className="iconfont icon-email" />
                <a href="mailto:445722156@qq.com">445722156@qq.com</a>
              </li>
              <li>坐标：深圳市</li>
              <li>学历专业：本科<Divider type="vertical" />医学</li>
              <li>
                skill：
                <ul>
                  <li>
                    前端：Vue、React、ES6/7/8、Echat、Axios
                  </li>
                  <li>
                    服务端：Node、Koa2
                  </li>
                  <li>
                    数据库：Mysql
                  </li>
                  <li>
                    其他：webpack、git、nginx
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    )
  }
}

export default About