/*
 * 路由配置器
 * 采用路由懒加载
 */
const home = () => import(/* webpackChunkName: 'helloWorld' */'../components/Home')
const bscroll = () => import('../components/betterScroll')
const chhtest = () => import('../components/chhtest')
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: 'home',
      keepAlive: true
    }
  },
  {
    path: '/bscroll',
    name: 'bscroll',
    component: bscroll,
    meta: {
      title: 'bscroll',
      keepAlive: true
    }
  },
  {
    path: '/chhtest',
    name: 'chhtest',
    component: chhtest,
    meta: {
      title: 'chhtest',
      keepAlive: true
    }
  }
]

export default routes
