// import Comp from '../components/comp'
import {withRouter} from 'next/router'
import dynamic from 'next/dynamic'// 异步组件加载方法
import Link from 'next/link'
// import Head from 'next/head'
import styled from 'styled-components'

const Comp  = dynamic(import('../components/comp'))

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`
const color = 'red'
const A = ({router, name, time}) => (
  <>
    <Title>this is title{time}</Title>
    <Comp />
    <Link href="#aaa">
      <a className="link">{router.query.id}{name}</a>
    </Link>
    {/* css-in-js 根据组件的挂载与卸载决定是否渲染组件样式 */}
    <style jsx>{`
      a{
        color: blue;
      }
      .link {
        color: ${color};
      }
      `}
    </style>
      {/* <style jsx global>{`
        a{
          color: red;
        }
      `}</style> */}
  </>
)

A.getInitialProps = async(ctx) => { // 没有跳来此处时此处的getInitialProps不执行
  const moment = await import('moment')
  const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve({
        name: 'wn',
        time: moment.default(Date.now() - 60 * 1000).fromNow()
    })
    }, 1000)
  })
  return await promise
}
export default withRouter(A)