import loadable from '../utils/loadable'

const WebLayout = loadable(() => import('../pages/web/layout'))
const AdminLayout = loadable(() => import('../pages/admin/layout'))
const routes = [
  {
    path: '/web',
    component: WebLayout,
    id:1
  },
  {
    path: '/admin',
    component: AdminLayout,
    id:2
  }
]

export default routes