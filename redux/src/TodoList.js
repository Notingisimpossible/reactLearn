// Redux = flux + reduce
import React, {Component} from 'react'
import 'antd/dist/antd.css'
import store from './store/index'


// import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_LIST} from './store/actionsTypes'
import {getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

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



  componentDidMount() {
    const action = getInitList()
    store.dispatch(action)
    // const action = getTodoList()
    // store.dispatch(action) // 因为此刻的store已经集成了thunk功能，所以支持dispatch一个函数，这个函数会自动执行
    // store在集成thunk之后，再调用一个方法时，会自动给方法分配一个dispatch
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