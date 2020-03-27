import {Button} from 'antd'
import Link from 'next/link'
import Router from 'next/router'

const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete'
]
function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args)
  }
}
events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})
export default () => {
  function gotoTestB() {

    Router.push({
      pathname: '/test/b',
      query: {
        id: 1
      }
  }, 'test/b/2')
  }

  return (
    <>
      <Link href='/a?id=5' as = '/a/5'>
        <Button>Index</Button>
      </Link>
      <Button onClick={gotoTestB}>test b</Button>
    </>
  )
}