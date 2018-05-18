import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import api from '@/api'
import store from '@/store'
import axios from 'axios'
import FastClick from 'fastclick'
import '@/assets/css/reset.styl'
import {
  Button
} from 'vant'
Vue.use(Button)
Vue.prototype.$api = api
// 跨域请求时自动携带cookie
axios.defaults.withCredentials = true
// 阻止vue的启动时生成生产提示警告
Vue.config.productionTip = false
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
/* eslint-disable no-new */
// 手动调用vm.$mount()方法来延迟挂载
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#ibuleng')
