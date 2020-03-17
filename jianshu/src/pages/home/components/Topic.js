import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TopicWrapper, TopicItem} from '../style'

class Topic extends Component {
  render () {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img className="topic-pic" src={item.get('imgUrl')} alt="图片丢失"/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  list: state.home.get('topicList')
})
export default connect(mapStateToProps, null) (Topic)