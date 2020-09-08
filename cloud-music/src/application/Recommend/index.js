import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import Slider from '../../components/slider';
import RecommendList from '../../components/list';
import Scroll from '../../baseUI/scroll'
import { Content } from './style'
import * as actionCreators from './store/actionCreators'
import { forceCheck } from 'react-lazyload'
import Loading from '../../baseUI/loading'
import { renderRoutes } from 'react-router-config'

function Recommend (props) {
  const { bannerList, recommendList, enterLoading } = props
  const {songCount} = props
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props
  useEffect(() => {
    if (!bannerList.size) {
      getBannerDataDispatch()
    }
    if (!recommendList.size) {
      getRecommendListDataDispatch()
    }
    // eslint-disable-next-line
  },[])
  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []
  
  return (
    <Content play={songCount}>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
      {enterLoading?<Loading></Loading>:null}
      {renderRoutes(props.route.routes)}
    </Content>
  )
}

const mapStateToProps = (state) => ({
  // 不要在这里将数据toJS
  // 不然每次diff对比props的时候都是不一样的引用，还是导致不必要的冲渲染，属于滥用immutable
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  enterLoading: state.getIn(['recommend', 'enterLoading']),
  songCount: state.getIn(["player", "playList"]).size, //尽量减少toJS操作，直接size属性就代表了list的长度
})
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionCreators.getBannerList())
    },
    getRecommendListDataDispatch() {
      dispatch(actionCreators.getRecommendList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));