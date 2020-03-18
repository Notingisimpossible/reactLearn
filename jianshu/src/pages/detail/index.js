import React, {Component} from 'react'
import {
  DetailWrapper,
  Header,
  Content
} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'
// 让Detail上面的方法有能力获取到路由上所有属性
class Detail extends Component {
  componentDidMount () {
    this.props.getDetail(this.props.match.params.id)
  }
  render () {
    // console.log(this.props.location.search)
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        {/* {防止转义，可以读取标签 ， 类似v-html} */}
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}> 
        </Content>
      </DetailWrapper>
    )
  }
}
const mapState = (state) => ({
  title: state.detail.get('title'),
  content: state.detail.get('content')
})
const mapDispatch = (dispatch) => ({
  getDetail(id) {
    let action = actionCreators.getDetail(id)
    action(dispatch)
  }
}) 
export default connect (mapState, mapDispatch)(withRouter(Detail))