import React from 'react'
import {
  TagRegister,
  RegisterTitle,
  RegisterTip,
  RegisterInput,
  RegisterButton,
  RegisterFoot
} from '../style.js'

const AsideReg = (props) => {
  return(
    <TagRegister>
      <RegisterTitle>掘金 - juejin.im</RegisterTitle>
      <RegisterTip>一个帮助开发者成长的社区</RegisterTip>
      <RegisterInput placeholder="用户名"></RegisterInput>
      <RegisterInput placeholder="手机号"></RegisterInput>
      <RegisterInput placeholder="密码(不少于6位)"></RegisterInput>
      <RegisterButton>立即注册</RegisterButton>
      <RegisterFoot>
        注册登录即表示
      <p>
          同意
        <a target="_blank" href="https://juejin.im/terms" rel="noopener noreferrer">用户协议</a>
          <a target="_blank" href="https://juejin.im/privacy" rel="noopener noreferrer">隐私协议</a>
        </p>
      </RegisterFoot>
    </TagRegister>
  )
}

export default AsideReg