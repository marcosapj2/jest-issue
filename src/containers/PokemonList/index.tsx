import { listPokemons, IPokemonListData, IPokemonResult } from '@services'
import { InfiniteScroll } from '@components'
import { capitalize } from 'lodash'
import { getPokemonImage } from './helpers'
import { PokemonCard, CardSkeleton, Header } from './Sections'

export default function () {
  const fetch = (limit: number, offset: number) => listPokemons({ limit, offset })

  return (
    <InfiniteScroll<IPokemonListData, IPokemonResult>
      header={<Header />}
      arrayPath="data.results"
      fetch={fetch}
      offset={20}
      item={{ width: 240, height: 240, skeleton: <CardSkeleton /> }}
    >
      {({ index, list }: { index: number; list: any }) => {
        const pokemonImage = getPokemonImage(list[index].url)
        const pokemonName = capitalize(list[index].name)

        return <PokemonCard src={pokemonImage} name={pokemonName} />
      }}
    </InfiniteScroll>
  )
}
