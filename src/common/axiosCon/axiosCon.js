import axios from 'axios'
axios.interceptors.request.use(
  config => {
    // const xToken = getXToken()
    // if (xToken !== null) {
    //   config.headers['X-Token'] = xToken
    // }
    if (config.method === 'post') {
      config.data = {
        ...config.data,
        wdClientType: '3',
        wdAppId: '3',
        wdVersionName: '3.2.1',
        _t: Date.parse(new Date()) / 1000
      }
    } else if (config.method === 'get') {
      config.params = {
        ...config.params,
        wdClientType: '3',
        wdAppId: '3',
        wdVersionName: '3.2.1',
        _t: Date.parse(new Date()) / 1000
      }
    }
    return config
  }, function (error) {
    return Promise.reject(error)
  }
)
