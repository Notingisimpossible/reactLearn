import React from 'react';
import {Link} from 'react-router-dom'
import { Card, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import '../login/index.css'
const Register = (props) => {
  return (
    <div className="login-box">
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card style={{height:'380px',width:'92vw'}}>
          <Card.Body>
            <div className="login-title">注册</div>
            <div className="box-user"><input className="user" placeholder="用户名"></input></div>
            <div className="box-password"><input className="password" placeholder="密码"></input></div>
            <div id="sure-password" className="box-password"><input className="password" placeholder="确认密码"></input></div>
            <Button type="primary">注册</Button><WhiteSpace />
            <Link to="/admin/login">
              <p className="footer">已有帐号？点击登录</p>
            </Link>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    </div>
  )
}

export default Register
