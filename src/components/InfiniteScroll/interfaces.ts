import { ListProps } from '@components'

interface IItem {
  width: number
  height: number
}

interface InjectedCounterProps {
  index: number
}

export interface IProps<T, R> {
  children(props: InjectedCounterProps): JSX.Element
  fetch: (limit: number, offset: number) => Promise<T>
  list: R[]
  offset: number
  item: IItem
  header?: JSX.Element
}

export interface IStyledProps extends ListProps {
  $width: number
}

export interface IStateQuantity {
  quantityOfRows: number
  quantityOfItems: number
  quantityOfColumns: number
}
