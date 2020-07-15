import React from 'react';
import {Link} from 'react-router-dom'
import { Card, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import './index.css'
const Login = (props) => {
  return (
    <div className="login-box">
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card style={{height:'300px',width:'92vw'}}>
          <Card.Body>
            <div className="login-title">登录</div>
            <div className="box-user"><input className="user" placeholder="用户名"></input></div>
            <div className="box-password"><input className="password" placeholder="密码"></input></div>
            <Button type="primary">登录</Button><WhiteSpace />
            <Link to="/admin/register">
              <p className="footer">没有帐号？点击注册</p>
            </Link>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    </div>
  )
}

export default Login
