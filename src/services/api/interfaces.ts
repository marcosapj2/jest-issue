import { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'

export interface CustomAxiosInstance extends AxiosInstance {
  defaultRequest(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse>
}
