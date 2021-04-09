import loadable from '../utils/loadable'

const Home = loadable(() => import('../pages/web/home'))
const Rob = loadable(() => import('../pages/web/rob'))
const Cart = loadable(() => import('../pages/web/cart'))
const User = loadable(() => import('../pages/web/user'))

const routes = [
  {
    path: '/web/Home',
    component: Home,
    id:1
  },
  {
    path: '/web/Rob',
    component: Rob,
    id:2
  },
  {
    path: '/web/cart',
    component: Cart,
    id:3
  },
  {
    path: '/web/user',
    component: User,
    id:4
  }
]

export default routes