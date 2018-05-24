import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = r => require.ensure([], () => r(require('@/page/index/index')), 'Index') // 主页
const Author = r => require.ensure([], () => r(require('@/page/author/author')), 'Author') // 作者

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index', // 首页
    name: '首页',
    component: Index,
    meta: {keepAlive: true}
  },
  {
    path: '/author', // 作者
    name: '作者详情',
    component: Author,
    meta: {keepAlive: true}
  }
]

// 路由配置
const router = new VueRouter({
  mode: 'history', // history
  base: __dirname,
  routes: routes
})

export default router
