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
  refetch: (variables: { limit: number; offset: number }) => Promise<T>
  fetch: (quantityOfItems: number, offset: number) => Promise<T>
  list: R[]
  setList: React.Dispatch<React.SetStateAction<R[]>>
  offset: number
  listPath: string
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
