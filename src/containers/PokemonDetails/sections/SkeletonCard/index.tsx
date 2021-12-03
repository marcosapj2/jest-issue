import { Skeleton } from '@components'
import { Card } from '../PokemonCard/styles'

export default function (): JSX.Element {
  return (
    <Card>
      <Skeleton width="220px" height="220px" />
      <Skeleton width="220px" height="40px" />
      <Skeleton width="80%" height="80px" />
      <Skeleton width="80%" height="200px" />
      <Skeleton width="80%" height="200px" />
    </Card>
  )
}
