import axios from 'axios'

const request = axios.create({
  baseURL: '',
  timeout: 10000
})

request.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  // let token = store.state.user.token
  // if (token && token !== '') {
  //   config.headers.token = token
  // }
  return config
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use(
  response => {
    let res = response.data
    let code = Number(res.code)

    switch (code) {
      case 200:
        break
      default:
        break
    }

    if (response.config.responseType === 'blob') {
      return res
    }
    if (typeof res === 'string') {
      res = res ? JSON.parse(res) : res
    }
    return res
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default request
