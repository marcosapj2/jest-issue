import { useRef, useEffect, useState, UIEvent } from 'react'
import { IProps, IStateQuantity } from './interfaces'
import { List, Scroll } from './styles'
import { getQuantity } from './helpers'
import { debounce } from 'lodash'

function InfiniteScroll<T, R>({
  children,
  fetch,
  item,
  offset,
  list,
  header,
}: IProps<T, R>): JSX.Element {
  const [quantities, setQuantities] = useState<IStateQuantity>()
  const [page, setPage] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)
  const rowHeight = item.height + offset
  const listWidth = quantities?.quantityOfColumns * rowHeight

  useEffect(() => {
    console.log(`list`, list)
    if (quantities?.quantityOfItems && !list.length) {
      fetch(quantities?.quantityOfItems, 0)
      nextPage()
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

  const nextPage = () => {
    setPage((page) => page + 1)
  }

  const fetchMore = debounce((limit, offset) => {
    return fetch(limit, offset)
  }, 300)

  const handleScroll = async (event: UIEvent<HTMLDivElement>) => {
    const { scrollHeight, scrollTop, clientHeight } = event.currentTarget
    const isScrollingDown = scrollHeight - scrollTop - rowHeight < clientHeight

    if (isScrollingDown) {
      fetchMore(quantities.quantityOfItems, page * quantities?.quantityOfItems)
      nextPage()
    }
  }

  return (
    <Scroll role="feed" ref={ref} onScroll={handleScroll}>
      <List $width={listWidth}>
        {header}
        {list?.map((_, index) => children({ index }))}
      </List>
    </Scroll>
  )
}

export default InfiniteScroll
