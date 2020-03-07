// componentWillUnmount 组件卸载之前
// useEffect 实现组件卸载  （解绑副作用）

import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Examples () {
  const [count, setCount] = useState(0)

  useEffect (() => {
    console.log(`componentDidMount => 你点击了${count}次 `)

    return () => {
      console.log('-----')
    }
  },[count])

  return (
    <div>
        <p>你点了{count}次</p>
        <button onClick={() => {setCount(count + 1)}}>click me</button>
        {/* react优先编译路由 */}
        <Router>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/list">列表</Link>
            </li>
            <Route exact path="/" component={Index}></Route>
            <Route path="/list" component={List}></Route>
          </ul>
        </Router>
      </div>
  )
}


function Index () {
  useEffect(() => {
    console.log('useEffect-->这里是Index页面')

    return () => {
      console.log('你离开了index页面')
    }
  }, [])
  return <h2>旅蒙开发团</h2>
}

function List () {
  console.log('useEffect-->这里是List页面')
  return <h2>List-page</h2>
}
export default Examples