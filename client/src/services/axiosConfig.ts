import axios from 'axios'

axios.defaults.baseURL = '/api'

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token')
    } else {
      delete config.headers.token
    }
    return config
  },
  (error) => Promise.reject(error),
)
