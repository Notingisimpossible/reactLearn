import React, {Component} from 'react'
// import store from './store/index'
import {connect} from 'react-redux'
class TodoList extends Component {
  render () {
    return(
      <div>
        <div>
          <input value = {this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button onClick={this.props.addList.bind(this)}>提交</button>
        </div>
        <ul>
          {this.props.list.map((list, index) => (
            <li onClick={() => {this.props.deleteList(index)}} key={index}>{list}</li>
          ))}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => { // 把store.dispatch 映射到props
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    addList() {
      const action = {
        type:"add_list",
        value: this.props.inputValue
      }
      dispatch(action)
    },
    deleteList(index) {
      const action = {
        type:"delete_list",
        index
      }
      dispatch(action)
    }
  }
}
// connect 是连接 
// TodoList 和 store 做连接
// mapStateToProps 的参数就是 store 该方法会帮助我们把store映射到当前的Props
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)