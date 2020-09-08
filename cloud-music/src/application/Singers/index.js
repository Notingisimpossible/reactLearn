import React, {  useEffect, useContext } from 'react'
import Horizen from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/config'
import { NavContainer, List, ListItem, ListContainer } from './style'
import Scroll from '../../baseUI/scroll'
import * as actionCreators from './store/actionCreators'
import { connect } from 'react-redux'
import Loading from '../../baseUI/loading'
import LazyLoad, {forceCheck} from 'react-lazyload'
import { CategoryDataContext, CHANGE_CATEGORY, CHANGE_ALPHA } from './data'
// import { CHANGE_ALPHA } from './store/constants'
import { renderRoutes } from 'react-router-config'

function Singer (props) {
  const {data, dispatch} = useContext(CategoryDataContext)
  const {category, alpha} = data.toJS()
  const { songCount } = props
  // let [category, setCategory] = useState('')
  // let [alpha, setAlpha] = useState('')
  const {singerList, enterLoading, pullDownLoading, pullUpLoading, pageCount} = props
  const { getHotSingerDispatch, updateDispatch, pullUpRefreshDispatch, pullDownRefreshDispatch } = props
  const handleUpdateAlpha = (val) => {
    // setAlpha(val)
    dispatch({type: CHANGE_ALPHA, data: val})
    updateDispatch(category, val)
  }
  const handleUpdateCategory = (val) => {
    // setCategory(val)
    dispatch({type: CHANGE_CATEGORY, data: val})
    updateDispatch(val, alpha)
  }
  useEffect(() => {
    if(!singerList.size) {
      getHotSingerDispatch()
    }
    // eslint-disable-next-line
  },[])
  const handlePullUp = () => {
    pullUpRefreshDispatch(category, alpha, category==='', pageCount)
  }
  const handlePullDown = () => {
    pullDownRefreshDispatch(category, alpha)
  }
  const enterDetail = (id) => {
    props.history.push(`/singers/${id}`)
  }
  const list = singerList ? singerList.toJS(): [];
  // 渲染函数，返回歌手列表
  const renderSingerList = () => {
    return (
      <List>
        {
          list.map((item, index) => {
            return (
              <div key={item.accountId + "" + index}>
                <ListItem onClick={() => enterDetail(item.id)}>
                  <div className="img_wrapper">
                    <LazyLoad placeholder={<img width="100%" height="100%" src={require('./singer.png')} alt="music"></img>}>
                      <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"></img>
                    </LazyLoad>
                  </div>
                  <span className="name">{item.name}</span>
                </ListItem>
              </div>
            )
          })
        }
      </List>
    )
  }
  return (
    <>
      <NavContainer>
        <Horizen
          list={categoryTypes}
          title={"分类(默认热门):"}
          handleClick={handleUpdateCategory}
          oldVal={category}
        ></Horizen>
        <Horizen
          list={alphaTypes}
          title={"首字母:"}
          handleClick={handleUpdateAlpha}
          oldVal={alpha}
        ></Horizen>
      </NavContainer>
      <ListContainer play={songCount}>
        <Scroll
          onScroll={forceCheck}
          pullUp={ handlePullUp }
          pullDown={ handlePullDown }
          pullUpLoading={ pullUpLoading }
          pullDownLoading={ pullDownLoading }
        >
          {renderSingerList()}
        </Scroll>
        <Loading show={enterLoading}></Loading>
      </ListContainer>
      {renderRoutes(props.route.routes)}
    </>
  )
}
const mapState = (state) => {
  return {
    singerList: state.getIn(['singers', 'singerList']),
    enterLoading: state.getIn(['singers', 'enterLoading']),
    pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
    pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
    pageCount: state.getIn(['singers', 'pageCount']),
    songCount: state.getIn(['player', "playList"]).size
  }
}
const mapDispatch = (dispatch) => {
  return {
    getHotSingerDispatch() {
      dispatch(actionCreators.getHotSingerList())
    },
    updateDispatch(category, alpha) {
      dispatch(actionCreators.changePageCount(0))
      dispatch(actionCreators.changeEnterLoading(false))
      dispatch(actionCreators.getSingerList(category, alpha))
    },
    // 滑倒底部刷新部分
    pullUpRefreshDispatch(category, alpha, hot, count) {
      dispatch(actionCreators.changePullUpLoading(true))
      dispatch(actionCreators.changePageCount(count+1))
      if(hot) {
        dispatch(actionCreators.refreshMoreHotSingerList())
      }else{
        dispatch(actionCreators.refreshMoreSingerList(category, alpha))
      }
    },
    // 顶部下拉刷新
    pullDownRefreshDispatch(category, alpha) {
      dispatch(actionCreators.changePullDownLoading(true))
      dispatch(actionCreators.changePageCount(0)) // 属于重新获取资源
      if(category === '' && alpha === '') {
        dispatch(actionCreators.getHotSingerList())
      }else{
        dispatch(actionCreators.getSingerList(category, alpha))
      }
    }
  }
}
export default connect(mapState, mapDispatch)(React.memo(Singer))