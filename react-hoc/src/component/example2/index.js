import React, {Component} from 'react'

// 定义高阶组件HOc
function HOC(WrappedComponent) {
  return class extends Component {
    constructor (props) {
      super(props)

      this.state = {
        name: ''
      }
    }

    onChange = (event) => {
      // this.setState 在这里！！！是异步的
      this.setState({
        name: event.target.value
      })
      console.log(this.state.name)
    }
    render () {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange
        }
      }
      return <WrappedComponent {...newProps}/>
    }
  }
}

// 高阶组件装饰器 相当于HOC(Example)
@HOC
class Example extends Component {
  render () {
    return (
      <input {...this.props.name}/>
    )
  }
}
// const Example = HOC(Example)
export default Example
