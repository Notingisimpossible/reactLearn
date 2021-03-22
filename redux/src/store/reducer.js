import {INIT_LIST_ACTION,CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_LIST, initListAction} from './actionsTypes'

const defaultState = {
  inputValue: '123',
  list: [
    'I am your father',
    'I am a boy',
    'You are cool',
    'You are beautiful',
    'I love you'
  ]
}
// state 指的是store里面上一次存储的数据
// action 指的是用户传过来的那句话
// 纯函数指的是，给定固定的输入就一定会有固定输出，而不会有任何副作用
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.inputValue = action.value
    return newState // reducer 有一个限制 可以接收state 但是绝对不能修改state
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    // console.log(state,'a');
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO_LIST) {
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.list.splice(action.index, 1)
    return newState // reducer 有一个限制 可以接收state 但是绝对不能修改state
  }
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.list = action.data
    return newState // reducer 有一个限制 可以接收state 但是绝对不能修改state
  }
  return state
}