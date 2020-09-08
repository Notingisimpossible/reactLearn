import React, { useState, useRef, useEffect, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Container, ImgWrapper, CollectButton, SongListWrapper, BgLayer } from './style'
import Header from '../../baseUI/header'
import Scroll from '../../baseUI/scroll'
import SongList from '../SongList'
import { HEADER_HEIGHT } from '../../api/config'
import { connect } from 'react-redux'
import { getSingerInfo, changeEnterLoading } from './store/actionCreator'
import Loading from '../../baseUI/loading'
import MusicNote from '../../baseUI/music-note'


function Singer(props) {
  const musicNoteRef = useRef()
  const {
    artist: immutableArtist,
    songs: immutableSongs,
    loading,
    songCount
  } = props
  const { getSingerDataDispatch } = props
  const artist = immutableArtist ? immutableArtist.toJS() : {}
  const songs = immutableSongs ? immutableSongs.toJS() : {}
  const collectButton = useRef()
  const imgWrapper = useRef()
  const songScrollWrapper = useRef()
  const songScroll = useRef()
  const header = useRef()
  const layer = useRef()
  // 图片初始高度
  const initialHeight = useRef(0)

  // 往上偏移尺寸，露出圆角
  const OFFSET = 5
  const [showStatus, setShowStatus] = useState(true)
  const handleScroll = useCallback(pos => {
    let height = initialHeight.current;
    const newY = pos.y;
    const imageDOM = imgWrapper.current;
    const buttonDOM = collectButton.current;
    const headerDOM = header.current;
    const layerDOM = layer.current;
    const minScrollY = -(height - OFFSET) + HEADER_HEIGHT;

    // 指的是滑动距离占图片高度的百分比
    const percent = Math.abs(newY / height)
    if (newY > 0) {
      imageDOM.style["transform"] = `scale(${1 + percent})`;
      buttonDOM.style["transform"] = `translate3d(0, ${newY}px, 0)`;
      layerDOM.style.top = `${height - OFFSET + newY}px`;
    } else if (newY >= minScrollY) {
      layerDOM.style.top = `${height - OFFSET - Math.abs(newY)}px`;
      // 这时候保证遮罩层的层叠优先级比图片高，不至于被图片挡住
      layerDOM.style.zIndex = 1;
      imageDOM.style.paddingTop = "75%";
      imageDOM.style.height = 0;
      imageDOM.style.zIndex = -1;
      // 按钮跟着逐渐变透明
      buttonDOM.style["transform"] = `translate3d(0, ${newY}px, 0)`;
      buttonDOM.style["opacity"] = `${1 - percent * 2}`;
    } else if (newY < minScrollY) {
      // 往上滑动， 但是超过Header部分
      layerDOM.style.top = `${HEADER_HEIGHT - OFFSET}px`;
      layerDOM.style.zIndex = 1;
      // 防止溢出的歌单内容遮住header
      headerDOM.style.zIndex = 100;
      // 此时图片高度与Header一致
      imageDOM.style.height = `${HEADER_HEIGHT}px`;
      imageDOM.style.paddingTop = 0;
      imageDOM.style.zIndex = 99;
    }
  }, [])
  useEffect(() => {
    let h = imgWrapper.current.offsetHeight;
    songScrollWrapper.current.style.top = `${h - OFFSET}px`;
    initialHeight.current = h;
    // 把遮罩放下面， 裹住歌曲列表
    layer.current.style.top = `${h - OFFSET}px`;
    songScroll.current.refresh();
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    const id = props.match.params.id
    getSingerDataDispatch(id)
    // eslint-disable-next-line
  },[])
  const setShowStatusFalse = useCallback(() => {
    setShowStatus(false)
  }, [])
  const musicAnimation = (x, y) => {
    musicNoteRef.current.startAnimation({x, y})
  }

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <>
        <Container>
          <Header
            handleClick={setShowStatusFalse}
            title={artist.name}
            ref={header}
          ></Header>
          <ImgWrapper ref={imgWrapper} bgUrl={artist.picUrl}>
            <div className="filter"></div>
          </ImgWrapper>
          <CollectButton ref={collectButton}>
            <i className="iconfont">&#xe62d;</i>
            <span className="text"> 收藏 </span>
          </CollectButton>
          <BgLayer ref={layer}></BgLayer>
          <SongListWrapper ref={songScrollWrapper} play={songCount}>
            <Scroll onScroll={handleScroll} ref={songScroll}>
              <SongList
                songs={songs}
                showCollect={false}
                musicAnimation={musicAnimation}
              ></SongList>
            </Scroll>
          </SongListWrapper>
          <MusicNote ref = {musicNoteRef}></MusicNote>
        </Container>
        {<Loading show={loading} />}
      </>
    </CSSTransition>
  )
}

const mapState = state => {
  return {
    artist: state.getIn(['singerInfo', 'artist']),
    songs: state.getIn(['singerInfo', 'songOfArtist']),
    loading: state.getIn(['singerInfo', 'loading']),
    songCount: state.getIn(['player', 'playList']).size
  }
}

const mapDispatch = dispatch => {
  return {
    getSingerDataDispatch(id) {
      dispatch(changeEnterLoading(true))
      dispatch(getSingerInfo(id))
    }
  }
}
export default connect(mapState, mapDispatch)(React.memo(Singer))