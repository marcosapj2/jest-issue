import { useRef, useEffect, useState, UIEvent } from 'react'
import { useRequest } from '@hooks'
import { IProps } from './interfaces'
import { List } from './styles'
import { get } from 'lodash'
import { AxiosResponse } from 'axios'

function InfiniteScroll<T, D>({
  children,
  fetch,
  item,
  offset,
  arrayPath,
  header,
}: IProps<T>) {
  const [quantityOfItems, setQuantityOfItems] = useState<number>()
  const ref = useRef<HTMLUListElement>(null)
  const [page, setPage] = useState<number>(0)
  const [list, setList] = useState<D[]>([])
  const { loading, run } = useRequest<AxiosResponse<T>>(fetch, {
    manual: true,
  })

  useEffect(() => {
    if (quantityOfItems) {
      run(quantityOfItems).then((data) => {
        setList(get(data, arrayPath))
        setPage((page) => page + 1)
      })
    }
  }, [quantityOfItems])

  useEffect(() => {
    if (ref?.current) {
      const { offsetHeight, offsetWidth } = ref.current
      const extraRows = 2
      const quantityOfRows = Math.floor(offsetHeight / (item.height + offset)) + extraRows
      const quantityOfColumns = Math.floor(offsetWidth / (item.width + offset))
      const quantityOfItems = quantityOfRows * quantityOfColumns

      setQuantityOfItems(quantityOfItems)
    }
  }, [ref?.current])

  const handleScroll = (event: UIEvent<HTMLUListElement>) => {
    const { scrollHeight, scrollTop, clientHeight } = event.currentTarget

    if (quantityOfItems) {
      const offset = page * quantityOfItems
      const isScrollingDown = Math.round(scrollHeight - scrollTop) === clientHeight

      if (isScrollingDown) {
        run(quantityOfItems, offset).then((newData) => {
          const newList = get(newData, arrayPath)

          setList((oldList) => [...oldList, ...newList])
          setPage((page) => page + 1)
        })
      }
    }
  }

  return (
    <List ref={ref} onScroll={handleScroll}>
      {header}
      {list.map((_, index) => {
        return loading || !list.length ? item.skeleton : children({ index, list })
      })}
    </List>
  )
}

export default InfiniteScroll
