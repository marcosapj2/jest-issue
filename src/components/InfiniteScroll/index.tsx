import { useRef, useEffect, useState, UIEvent } from 'react'
import { IProps, IStateQuantity } from './interfaces'
import { List, Scroll } from './styles'
import { get, debounce } from 'lodash'
import { getQuantity } from './helpers'

function InfiniteScroll<T, R>({
  children,
  fetch,
  setList,
  refetch,
  item,
  offset,
  listPath,
  list,
  header,
}: IProps<T, R>) {
  const [quantities, setQuantities] = useState<IStateQuantity>()
  const ref = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState<number>(0)
  const rowHeight = item.height + offset
  const listWidth = quantities?.quantityOfColumns * rowHeight

  useEffect(() => {
    if (quantities?.quantityOfItems) {
      fetch(quantities?.quantityOfItems, 0).then(nextPage)
    }
  }, [quantities?.quantityOfItems])

  useEffect(() => {
    const { offsetHeight } = ref.current
    const extraRows = 2
    const quantityOfRows = getQuantity(offsetHeight, item.height, offset) + extraRows
    const quantityOfColumns = getQuantity(window.innerWidth, item.width, offset)
    const quantityOfItems = quantityOfRows * quantityOfColumns

    setQuantities({ quantityOfRows, quantityOfItems, quantityOfColumns })
  }, [ref?.current])

  const updateList = (response: T) => {
    setList((oldList) => [...oldList, ...get(response, listPath)])
  }

  const nextPage = (response: T) => {
    updateList(response)
    setPage((page) => page + 1)
  }

  const fetchMore = debounce((limit, offset) => {
    refetch({ limit, offset }).then(nextPage)
  }, 600)

  const handleScroll = async (event: UIEvent<HTMLDivElement>) => {
    const { scrollHeight, scrollTop, clientHeight } = event.currentTarget
    const isScrollingDown = scrollHeight - scrollTop - rowHeight < clientHeight

    if (isScrollingDown) {
      fetchMore(quantities.quantityOfItems, page * quantities?.quantityOfItems)
    }
  }

  return (
    <Scroll ref={ref} onScroll={handleScroll}>
      <List $width={listWidth}>
        {header}
        {list.map((_, index) => children({ index }))}
      </List>
    </Scroll>
  )
}

export default InfiniteScroll
