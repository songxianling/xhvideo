// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '@/assets/css/reset.styl'
import { Button } from 'vant'

Vue.prototype.$http = axios
// 跨域请求时自动携带cookie
axios.defaults.withCredentials = true
// 阻止vue的启动时生成生产提示警告
Vue.config.productionTip = false

Vue.use(Button)
/* eslint-disable no-new */
new Vue({
  el: '#ibuleng',
  router,
  components: {
    App
  },
  template: '<App/>'
})
