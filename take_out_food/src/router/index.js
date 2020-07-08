import loadable from '../utils/loadable'

const WebLayout = loadable(() => import('../pages/web/layout'))

const routes = [
  {
    path: '/web',
    component: WebLayout,
    id:1
  }
]

export default routes