import React, {Component} from 'react'
// import store from './store/index'
import {connect} from 'react-redux'

class TodoList extends Component {

  render () {
    return(
      <div>
        <div>
          <input value = {this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button>提交</button>
        </div>
        <ul>
          <li>dell</li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
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
    }
  }
}
// connect 是连接 
// TodoList 和 store 做连接
// mapStateToProps 的参数就是 store 该方法会帮助我们把store映射到当前的Props
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)