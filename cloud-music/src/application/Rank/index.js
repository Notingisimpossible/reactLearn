import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { getRankList } from './store'
import { filterIndex } from '../../api/utils'
import Scroll from '../../baseUI/scroll'
import Loading from '../../baseUI/loading'
import {EnterLoading} from './../Singers/style'
import {
  ListItem,
  List,
  SongList,
  Container
} from './style'
import { renderRoutes } from 'react-router-config'


const renderRankList = (list, global, props) => {
  const enterDetail = (detail) => {
    props.history.push(`/rank/${detail.id}`)
  }
  return (
    <List globalRank={global}>
      {
        list.map(item => {
          return (
            <ListItem 
              key={item.coverImgUrl}
              tracks={item.tracks}
              onClick = {() => enterDetail(item)}
            >
              <div className="img_wrapper">
                <img src={item.coverImgUrl} alt="music"></img>
                <div className="decorate"></div>
                <span className="update_frequency">{item.updateFrequency}</span>
              </div>
              { renderSongList(item.tracks) }
            </ListItem>
          )
        })
      }
    </List>
  )
}

const renderSongList = (list) => {
  return list.length ? (
    <SongList>
      {
        list.map((item, index) => {
          return <li key={index}>{index+1}. {item.first} - {item.second}</li>
        })
      }
    </SongList>
  ) : null
}

function Rank (props) {

  const { rankList, loading, songCount } = props
  const { getRankListDataDispatch } = props
  let list = rankList ? rankList.toJS() : []
  let globalStartIndex = filterIndex(list)
  let officialList = list.slice(0, globalStartIndex)
  let globalList = list.slice(globalStartIndex)
  // 榜单数据加载出来之前都给隐藏
  let displayStyle = loading ? {"display": "none"} : {"display": ""}

  useEffect(() => {
    getRankListDataDispatch()
    // eslint-disable-next-line
  }, [])

  return (
    <Container play={songCount}>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}>官方榜</h1>
          {renderRankList(officialList, null, props)}
          <h1 className="global" style={displayStyle}>全球榜</h1>
          {renderRankList(globalList, true, props)}
          <EnterLoading><Loading show={loading}></Loading></EnterLoading>
        </div>
      </Scroll>
      {renderRoutes(props.route.routes)}
    </Container>
  )
}

const mapState = (state) => {
  return {
    rankList: state.getIn(['rank', 'rankList']),
    loading: state.getIn(['rank', 'loading']),
    songCount: state.getIn(['player', 'playList']).size
  }
}

const mapDispatch = (dispatch) => {
  return {
    getRankListDataDispatch() {
      dispatch(getRankList())
    }
  }
}
export default connect(mapState, mapDispatch)(React.memo(Rank))