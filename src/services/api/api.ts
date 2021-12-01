import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { defaultsDeep } from 'lodash'
import { handleFulfilled, handleRejected } from './interceptors'
import { CustomAxiosInstance } from './interfaces'

const getConfig = () => {
  return {
    headers: {
      Accept: 'application/json',
    },
  }
}

const api = (baseURL: string, config?: AxiosRequestConfig) => {
  const axiosApi = axios.create({ baseURL, ...config }) as CustomAxiosInstance

  axiosApi.defaultRequest = async (
    path: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    const mergedOptions = defaultsDeep(options, await getConfig())

    return axiosApi(path, mergedOptions)
  }

  axiosApi.interceptors.response.use(handleFulfilled, handleRejected)

  return axiosApi
}

export default api
