import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface IItem {
  width: number
  height: number
  skeleton: JSX.Element
}

interface InjectedCounterProps {
  index: number
  list: any[]
}

export interface IProps<T> {
  children(props: InjectedCounterProps): JSX.Element
  fetch: (quantityOfItems: number, offset: number) => Promise<AxiosResponse<T>>
  offset: number
  arrayPath: string
  item: IItem
  header?: JSX.Element
}
