// Redux = flux + reduce
import React, {Component} from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
// import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_LIST} from './store/actionsTypes'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators'
import axios from 'axios'

// store 创建
import TodoListUI from './store/TodoListUI'


class TodoList extends Component {
  constructor (props) {
    super(props)

    this.state = store.getState()
    // console.log(store.getState())

    this.handleChange = this.handleChange.bind(this)
    this.hanleStoreChange = this.hanleStoreChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.hanleStoreChange) // 每次数据改变，仓库都会有一个subribe函数自动执行
  }

  componentDidMount(props) {
    axios.get('https://api.github.com/users/octocat/gists').then((res) => {
      // console.log(res)
      const data = res.data
      console.log(data)
      const action = initListAction(Array.from(Object.keys(data[0].owner)))
      store.dispatch(action)
    })
  }

  hanleStoreChange(){
    // console.log('change')
    this.setState(store.getState())
  }

  handleChange (e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action) // 让管理员听到这句话
  }

  BtnClick = () => {
    // const action = {
    //   type: ADD_TODO_ITEM
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete (index) {
    // const action = {
    //   type: DELETE_TODO_LIST,
    //   index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        handleChange = {this.handleChange}
        BtnClick = {this.BtnClick}
        state = {this.state}
        handleItemDelete = {this.handleItemDelete}
      />
    )
  }
}

export default TodoList