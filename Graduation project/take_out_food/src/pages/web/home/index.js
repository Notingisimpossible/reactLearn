import React,{useState,useEffect,useCallback} from 'react'
import {Tag} from 'antd-mobile'
import './index.css'
import {connect} from 'react-redux'
import PlayImg from './playImg'
import Lists from './list'
const Home = (props) => {
  const {tagName,searchContent,imgUrl} = props
  const [searchTitle,setSearchTitle] = useState("点击搜索吧")
  var timer
  const changeSearch = useCallback(() => {
    let i=0
    // eslint-disable-next-line
    timer = setInterval(()=>{
      if(i>=5){
        i=0
      }
      setSearchTitle(searchContent._tail.array[i++])
    },1000)
  },[searchContent._tail.array])
  useEffect(()=>{
    changeSearch()
    return ()=>{ // 组件卸载时清除定时器，防止内存泄漏
      clearInterval(timer)
    }
  },[changeSearch,timer])

  return (
    <div className="box">
      <div className="home-position">
        <span className="iconfont icon" >&#xe634;</span>
        <span className="position-title">江西省南昌市</span>
      </div>
      <div className="search">
        <span className="iconfont">&#xe7c4;</span>
        <span className="search-content">{searchTitle}</span>
      </div>
      <div className="tag-container">
        {
          tagName._tail.array.map((item,index) => {
            return <Tag data-seed="logId" key={index}>{item}</Tag>
          })
        }
      </div>
      <PlayImg imgUrl={imgUrl}/>
      <Lists/>
    </div>
  )
}
const mapState = (state) => {
  return {
    tagName: state.web.get("tagName"),
    searchContent: state.web.get("searchContent"),
    imgUrl: state.web.get("imgUrl"),
  }
}
export default connect(mapState)(Home)