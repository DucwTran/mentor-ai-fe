import axios from 'axios'

const authorizeAxios = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000
})

const getToken = () => localStorage.getItem('accessToken')

authorizeAxios.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

authorizeAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const res = await axios.post('https://api.example.com/auth/refresh', {
          token: localStorage.getItem('refreshToken')
        })

        const newToken = res.data.accessToken

        localStorage.setItem('accessToken', newToken)

        // Gắn token mới rồi gửi request lại
        authorizeAxios.defaults.headers.Authorization = `Bearer ${newToken}`
        originalRequest.headers.Authorization = `Bearer ${newToken}`

        return authorizeAxios(originalRequest)
      } catch (refreshError) {
        console.error('Không refresh token được:', refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default authorizeAxios
