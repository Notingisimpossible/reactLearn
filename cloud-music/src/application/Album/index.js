import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Container, TopDesc, Menu} from './style'
import { CSSTransition } from 'react-transition-group'
import Header from './../../baseUI/header'
import Scroll from '../../baseUI/scroll/index'
import style from '../../assets/global-style'
import { connect } from 'react-redux'
import { changeEnterLoading, getAlbumList } from './store/actionCreators'
import { isEmptyObject } from '../../api/utils'
import Loading from '../../baseUI/loading'
import SongsList from '../../application/SongList'
import MusicNote from '../../baseUI/music-note/index'
export const HEADER_HEIGHT = 45;

function Album(props) {
  const musicNoteRef = useRef()
  const id = props.match.params.id
  const { currentAlbum: currentAlbumImmutable, enterLoading, songCount } = props
  const { getAlbumDataDispatch } = props
  const [showStatus, setShowStatus] = useState(true)
  let currentAlbum = currentAlbumImmutable.toJS()
  const handleBack = useCallback(() => {
    setShowStatus(false)
  },[])
  const [title, setTitle] = useState("歌单")
  const [isMarquee, setIsMarquee] = useState(false) // 是否跑马灯
  const headerEl = useRef()
  const handleScroll = useCallback((pos) => {
    let minScrollY = -HEADER_HEIGHT;
    let percent = Math.abs(pos.y / minScrollY);
    let headerDom = headerEl.current;
    // 滑过顶部的高度开始变化
    if (pos.y < minScrollY) {
      headerDom.style.backgroundColor = style["theme-color"];
      headerDom.style.opacity = Math.min(1, (percent - 1) / 2);
      setTitle(currentAlbum.name);
      setIsMarquee(true);
    } else {
      headerDom.style.backgroundColor = "";
      headerDom.style.opacity = 1;
      setTitle("歌单");
      setIsMarquee(false);
    }
  },[currentAlbum]);
  useEffect(() => {
    getAlbumDataDispatch(id)
  }, [getAlbumDataDispatch, id])
  const musicAnimation = (x, y) => {
    musicNoteRef.current.startAnimation({x, y})
  }
  const renderTopDesc = () => {
    return (
      <TopDesc background={currentAlbum.coverImgUrl}>
        <div className="background">
          <div className="filter"></div>
        </div>
        <div className="img_wrapper">
          <div className="decorate"></div>
          <img src={currentAlbum.coverImgUrl} alt="" />
          <div className="play_count">
            <i className="iconfont play">&#xe885;</i>
            <span className="count">{Math.floor(currentAlbum.subscribedCount / 1000) / 10} 万 </span>
          </div>
        </div>
        <div className="desc_wrapper">
          <div className="title">{currentAlbum.name}</div>
          <div className="person">
            <div className="avatar">
              <img src={currentAlbum.creator.avatarUrl} alt="" />
            </div>
            <div className="name">{currentAlbum.creator.nickname}</div>
          </div>
        </div>
      </TopDesc>
    )
  }
  const renderMenu = () => {
    return (
      <Menu>
        <div>
          <i className="iconfont">&#xe6ad;</i>
          评论
        </div>
        <div>
          <i className="iconfont">&#xe86f;</i>
          点赞
        </div>
        <div>
          <i className="iconfont">&#xe62d;</i>
          收藏
        </div>
        <div>
          <i className="iconfont">&#xe606;</i>
          更多
        </div>
      </Menu>
    )
  }
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={props.history.goBack}
    >
      <Container play={songCount}>
        <Header ref={headerEl} isMarquee={isMarquee} title={title} handleClick={handleBack}></Header>
        {
          !isEmptyObject(currentAlbum) ? (
            <Scroll bounceTop={false} onScroll={handleScroll}>
              <div>
                { renderTopDesc() }
                { renderMenu() }
                <SongsList
                  showBackground={true}
                  songs={currentAlbum.tracks}
                  showCollect={true} 
                  collectCount={currentAlbum.subscribedCount}
                  musicAnimation={musicAnimation}
                />
              </div>
            </Scroll>
          ) : null
        }
        {<Loading show={enterLoading}></Loading>}
        <MusicNote ref={musicNoteRef}></MusicNote>
      </Container>
    </CSSTransition>
  )
}
const mapState = (state) => {
  return {
    currentAlbum: state.getIn(['album', 'currentAlbum']),
    enterLoading: state.getIn(['album', 'enterLoading']),
    songCount: state.getIn(['player', 'playList']).size
  }
}
const mapDispatch = (dispatch) => {
  return {
    getAlbumDataDispatch(id) {
      dispatch(changeEnterLoading(true))
      dispatch(getAlbumList(id))
    }
  }
}
export default connect(mapState, mapDispatch)(React.memo(Album))