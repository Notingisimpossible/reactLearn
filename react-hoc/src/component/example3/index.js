import React from 'react'
import User from './User'
import HOC from './OperateRefsHOC'

const EnhanceUser = HOC(User)

class OperateRef extends React.Component {
  render () {
    return <EnhanceUser name="小名" age={12}></EnhanceUser>
  }
}

export default OperateRef