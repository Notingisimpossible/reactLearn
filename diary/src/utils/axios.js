import axios from 'axios'
import {Toast} from 'antd-mobile'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7001' : ''

// 跨域请求凭证
axios.defaults.withCredentials = false
axios.defaults.headers['X-Requested-with'] = 'XMLHttpRequest'

// post请求是json形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  if(typeof res.data !== 'object'){
    Toast.fail('服务器端异常')
    return Promise.reject(res)
  }
  if (res.data.status !== 200) {
    if (res.data.message) Toast.error(res.data.message)
    return Promise.reject(res.data)
  }
  return res.data
})

export default axios