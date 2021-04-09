import React, { useEffect } from 'react'
import { WingBlank, Card, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { actionCreater } from '../../store'
import './index.css'

const Lists = (props) => {
  const { homeList, getHomeList } = props
  useEffect(() => {
    getHomeList()
    // eslint-disable-next-line
  }, [])
  return (
    <div id="homeList">
      {
        homeList.map((item) => {
          return (
            <WingBlank key={item.get("id")} size="lg">
              <WhiteSpace size="md" />
              <Card>
                <Card.Header
                  title={item.get("title")}
                  thumb={require(`../../../../assets/imgs/${item.get("avatarLarge")}.jpg`)}
                  extra={<span>进店看看</span>}
                />
                <Card.Body>
                  <div>一点都不好看</div>
                </Card.Body>
                <Card.Footer content="五星卖家" extra={<div>{`${item.get("money")}/份`}</div>} />
              </Card>
              <WhiteSpace size="lg" />
            </WingBlank>
          )
        })
      }
    </div>
  )
}
const mapState = (state) => {
  return {
    homeList: state.web.get('homeList')
  }
}
const mapDispatch = (dispatch) => {
  return {
    getHomeList() {
      const action = actionCreater.getHomeList()
      dispatch(action)
    }
  }
}
export default connect(mapState, mapDispatch)(Lists)
