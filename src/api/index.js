/**
 * api集成管理
 */
import axios from 'axios'
import { basicConfig } from '@/config/config'
import {
  Toast
} from 'vant'

// let xhUrl
// if (process.env.NODE_ENV === 'dev') {
//   console.log('开发环境')
//   xhUrl = 'https://apiwx.xiangha.com'
// } else {
//   xhUrl = 'http://177.77.77.77'
// }

export default {
  apiComPost(apiname, param, callback) {
    let params = param
    let apiUrl = basicConfig.BASE_DATA_HOST
    axios.post(apiUrl + apiname, params).then(response => {
      callback(response.data)
    })
  }
}

// 添加接口回调拦截器
axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return response
  } else {
    Toast.fail('突然打了个盹～～～')
  }
}, error => {
  Toast.fail('发生错误了～')
  return Promise.reject(error)
})
