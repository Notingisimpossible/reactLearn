import loadable from '../utils/loadable'

const Login = loadable(() => import('../pages/admin/login'))
const Register = loadable(() => import('../pages/admin/register'))

const routes = [
  {
    path: '/admin/login',
    component: Login,
    id:1
  },
  {
    path: '/admin/register',
    component: Register,
    id:2
  }
]

export default routes