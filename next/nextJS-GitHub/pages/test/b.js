import React, { useState, useEffect } from 'react'

class MyCount extends React.Component{
  state = {
    count: 0
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
  render () {
    return <span>{this.state.count}</span>
  }
}

function MyCountFun() {
  const [count, setCount] = useState(0) // 返回[a, b]
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(interval) // 组件卸载时清除计时器
  }, [])
  return <span>{count}</span>
}
export default MyCountFun