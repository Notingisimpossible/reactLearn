
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
  // function gotoTestB() {

  //   Router.push({
  //     pathname: '/test/b',
  //     query: {
  //       id: 1
  //     }
  // }, 'test/b/2')
  // }

  return (
    <>
     <span>Index</span>
    </>
  )
}