import axios, { AxiosRequestConfig } from 'axios'
// import qs from 'qs'
// import dotenv from 'dotenv'
import Cookies from 'js-cookies'
import { AXIOS_CONFIG } from '../enums/global.enum'
import { end, start } from '../features/Loading'
const apiService = (dispatch?: any) => {
  const axiosClient = axios.create({
    baseURL: 'https://6155898393e3550017b08a76.mockapi.io',
    headers: { 'X-Custom-Header': 'foobar' },
  })

  axiosClient.interceptors.request.use(
    (request: any) => {
      dispatch && dispatch(start(true))
      // const token = Cookies.get(AXIOS_CONFIG.TOKEN) || null
      const token = AXIOS_CONFIG.TOKEN
      if (token) request.headers.Authorization = `Bearer ${token}`
      return request
    },
    (err) => {
      dispatch && dispatch(end(false))

      return { status: err.request.status, request: err.request.data.errors }
    }
  )

  axiosClient.interceptors.response.use(
    (response) => {
      dispatch && dispatch(start(false))

      return response
    },
    (error) => {
      dispatch && dispatch(end(false))

      if (error.status === 401) {
        // xu ly logout: clear cookies, day nguoi dung ve trang login
      }
      if (error.status === 500) {
        // xu ly thong bao cho nguoi dung server bi loi
      }
      return Promise.reject(error)
    }
  )

  const client = {
    get: <T>(url: string, obj?: object) => axiosClient.get<T>(url, obj),
    post: <T>(url: string, obj: object, config?: AxiosRequestConfig) =>
      axiosClient.post<T>(url, obj, config),
    patch: <T>(url: string, obj: object) => axiosClient.patch<T>(url, obj),
    put: <T>(url: string, obj: object) => axiosClient.put<T>(url, obj),
    delete: <T>(url: string, obj?: object) => axiosClient.delete<T>(url, obj),
  }

  return client
}

export default apiService
