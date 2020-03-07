import React, {Component} from 'react'

class Example2 extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    console.log(`componentDidMount => 你点击了${this.state.count}次 `)
  }
  addCount () {
    this.setState ({
      count: this.state.count + 1
    })
  }

  componentDidUpdate () {
    console.log(`componentDidMount => 你点击了${this.state.count}次 `)
  }
  render () {
    return (
      <div>
        <p>你点了{this.state.count}次</p>
        <button onClick={this.addCount.bind(this)}>click me</button>
      </div>
    )
  }
}

export default Example2