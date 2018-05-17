import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index', // 首页
    name: 'index',
    component: r => require.ensure([], () => r(require('@/components/index.vue')), 'index')
  }
]

// 路由配置
const router = new VueRouter({
  mode: 'hash', // history
  base: __dirname,
  routes: routes
})

export default router
