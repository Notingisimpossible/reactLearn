import React from 'react';
import routes from '../../../router/admin'
import { Route } from 'react-router-dom';
import {Button} from 'antd-mobile'
import {Link} from 'react-router-dom'

const Layout = (props) => {
  return (

    <div>
      <Link to="/admin/login">
        <Button onClick={() => {console.log('登录成功')}}>去登录</Button>
      </Link>
      {
        routes.map((route) => {
          return <Route path={route.path} component={route.component} key={route.id}></Route>
        })
      }
    </div>
  )
}

export default Layout
