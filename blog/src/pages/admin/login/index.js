import React from 'react'
import {Form, Input, Button, Card} from 'antd'
import './index.less'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import Particles from 'reactparticles.js'


class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    console.log('登录成功')
    sessionStorage.setItem('blogUser', '敏哥')
    sessionStorage.setItem('menuItemKey', '0')
    this.props.history.push('/web/index')
  }
  render () {
    return (
      <div className="login">
        <Particles id="particles1" config="particles1.json" />
        <Card className="login-form" style={{width:300, borderRadius:30}}>
          <Form onFinish={this.handleSubmit}>
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
              <Input prefix={<UserOutlined style={{color:'rgba(0,0,0,0.25)'}}/>} placeholder="请输入用户名"/>
            </Form.Item>
            <Form.Item name="password" rules={[{required: true, message: '请输入密码'}]}>
              <Input prefix={<LockOutlined style={{color:'rgba(0,0,0,0.25)'}}/>} placeholder="请输入密码"/>
            </Form.Item>

            <Button block type="primary" htmlType="submit" className="login-form-button">Login in</Button>

          </Form>
        </Card>
      </div>
    )
  }
}

// const Login = Form.create({name: 'normal_login'})(login)

export default Login