import { Skeleton } from '@components'
import { ListItem } from '../PokemonCard/styles'

export default function () {
  return (
    <ListItem>
      <Skeleton width="180px" height="180px" />
      <Skeleton width="180px" height="24px" />
    </ListItem>
  )
}
