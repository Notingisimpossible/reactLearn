// function countReducer (state, action) {
//   switch (action) {
//     case 'add':
//       return state + 1
//     case 'sub':
//       return state - 1
//     default:
//       return state
//   }
// }

import React, {useReducer} from 'react'

// useReducer 帮助我们整合组件中操作同一种状态的各种方法
function ReducerDemo () {
  const [ count, dispatch ] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state + 1
      case 'cut':
        return state - 1
      default:
        return state
    }
  }, 0)
  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <button onClick={() => dispatch('add')}>add</button>
      <button onClick={() => dispatch('cut')}>cut</button>
    </div>
  )
}

export default ReducerDemo