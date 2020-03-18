import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'
// 路由重定向
class Login extends Component {
  render () {
    const {loginState} = this.props
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => {this.account = input}}/>
            <Input placeholder="密码" type='password' ref={(input) => {this.password = input}}/>
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to="/"></Redirect>
    }
  }
}
const mapState = (state) => ({
  loginState: state.login.get('login')
})
const mapDispatchToProps =(dispatch) => ({
  login (accountElement, passwordElement) {
    const action = actionCreators.login(accountElement.value, passwordElement.value)
    action(dispatch)
    // console.log(accountElement.value, passwordElement.value)
  }
})
export default connect(mapState, mapDispatchToProps)(Login)