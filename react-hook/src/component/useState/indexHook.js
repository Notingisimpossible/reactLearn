import React, {useState} from 'react'
// useState 就是一个hook
function Example () {
  const [count, setCount] = useState(0)
  // const [count, name, age, setCount, setName, setAge] = useState(01 'mg', 18)
  // let _useState = useState(0)
  // let count = _useState[0]
  // let setCount = _useState[1]
  
  // setCount=== this.setState({count:this.state.count})
  return (
    <div>
      <p>你点了{count}次</p>
        <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  ) 
}

// useState 多状态
let showSex = true
function Example2 () {
  const [age, setAge] =useState(18)
  // if (showSex) {
  //   const [sex, setSex] = useState('男')
  //   showSex = false
  // }
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('程序猿')
  
  // react 是如何保证useState找到对应的state
  // react 是根据useState出现的顺序来确定的
  // react hooks不能出现在条件判断语句中，因为他必须有完全一样的渲染顺序
  return (
    <div>
      <p onClick={() => {setAge(age + 1)}}>我今年：{age}岁了</p>
      <p>性别：{sex}</p>
      <p>工作是：{work}</p>
    </div>
  )
}

export default Example2

// hooks 本质上就是一类特殊函数 目的就是让你不再写class 让function一统江湖