/* eslint-disable */
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import api from '@/api'
import store from '@/store'
import axios from 'axios'
import MetaInfo from 'vue-meta-info'
// import FastClick from 'fastclick'
import VideoPlayer from 'vue-video-player'
// import VueLazyLoad from 'vue-lazyload'
import 'video.js/dist/video-js.css'
import '@/assets/css/reset.styl'

import callApp from '@/assets/js/h5CallApp'
import {
  Button, Lazyload
} from 'vant'
Vue.use(VideoPlayer)
Vue.use(Button).use(Lazyload, {loading: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4016321402,974700576&fm=27&gp=0.jpg', preload: 2.3, lazyComponent: true})
Vue.use(MetaInfo)
// Vue.use(VueLazyLoad, {
//   preload: 2, // 预加载的宽高
//   error: './static/error.png',
//   loading: './static/loading.png',
//   attempt: 3 // 尝试加载的次数
// })
Vue.prototype.$api = api
// 跨域请求时自动携带cookie
axios.defaults.withCredentials = true
axios.get('http://localhost:7777/users/getUser?id=1&page=2').then((res)=>{
  console.log(res);
})
// 阻止vue的启动时生成生产提示警告
Vue.config.productionTip = false
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function () {
//     FastClick.attach(document.body)
//   }, false)
// }
/* eslint-disable no-new */
// 手动调用vm.$mount()方法来延迟挂载
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#ibuleng')

// export function createApp () {
//   // 创建 router 实例
//   const router = new createRouter()
//   const store = createStore()
//   sync(router,store)
//   const app = new Vue({
//     // 注入 router 到根 Vue 实例
//     router,
//     render: h => h(App)
//   })
//   // 返回 app 和 router
//   return { app, router }
// }
