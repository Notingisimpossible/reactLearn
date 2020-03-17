import React, {Component} from 'react'
import {ListItem, ListInfo, LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
class List extends Component {
  render () {
    const {list, getMoreList, page} = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return(
              <ListItem key={index}>
                <img className="pic" src={item.get('imgUrl')} alt="图片丢失"></img>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    list: state.home.get('articleList'),
    page: state.home.get('articlePage')
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    let action = actionCreators.getMoreList(page)
    action(dispatch)
  }
})
export default connect(mapStateToProps, mapDispatch) (List)