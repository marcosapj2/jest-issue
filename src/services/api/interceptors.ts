import { AxiosResponse } from 'axios'

export const handleFulfilled = (success: AxiosResponse) => {
  return success
}
export const handleRejected = (error: any) => {
  return error
}
