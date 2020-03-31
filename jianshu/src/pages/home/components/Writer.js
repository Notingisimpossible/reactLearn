import React, {Component} from 'react'
import {WriterWrapper, Appload, RecommendWriter, MoreWriter} from '../style'
import {connect} from 'react-redux'
import { actionCreators } from '../store'
class Writer extends Component {
  render () {
    const {list} = this.props
    console.log(list)
    return (
      <div>
        <a href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">
          <Appload>
            <div className="showImg">
              <img className="pices" src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="图片加载失败"></img>
            </div>
            <img className="pic" src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="图片加载失败" />
            <ul>
              <li>
                <p>下载简书手机App  ></p>
              </li>
              <li>
                <p>随时随地发现和创作内容</p>
              </li>
            </ul>
          </Appload>
        </a>
        <RecommendWriter>
          <ul>
            <li>
              <span>推荐作者</span>
            </li>
            <li>
              <a href="/"><span className="iconfont">&#xe61d;</span>换一批</a>
            </li>
          </ul>
        </RecommendWriter>
        {
          list.map((item, index) => {
            return (
              <WriterWrapper key={index}>
                <ul>
                  <li className="imges">
                    <img src={item.get('imgUrl')} alt="图片加载失败" />
                  </li>
                  <li className="name-writer">
                    <p className="name">{item.get('title')}</p>
                    <p className="tips">{item.get('tip')}</p>
                  </li>
                  <li className="focus">
                    <a href="/">+关注</a>
                  </li>
                </ul>
              </WriterWrapper>
            )
          })
        }
        <MoreWriter>查看全部 ></MoreWriter>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.home.get('writerList')
})

export default connect(mapState, null) (Writer)