import React, {Component} from 'react'

// 定义高阶组件HOc
function HOC(wrappedComponent) {
  return class extends Component {
    constructor (props) {
      super(props)

      this.state = {
        name: ''
      }
    }

    onChange = (event) => {
      this.setState({
        name: event.target.value
      })
      // console.log
    }
    render () {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange
        }
      }
      return <wrappedComponent {...newProps}/>
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
