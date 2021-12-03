import { useState, useEffect, useRef, useCallback } from 'react'
import { IPokemonListData, IPokemonResult } from '@services'
import { InfiniteScroll } from '@components'
import { capitalize } from 'lodash'
import { getPokemonImage } from './helpers'
import { PokemonCard, Header } from './Sections'
import { useLazyQuery, ApolloQueryResult } from '@apollo/client'
import { LIST_POKEMONS } from './query'
import { get, debounce } from 'lodash'

export default function () {
  const listPath = 'data.results'
  const [listPokemons, { refetch }] = useLazyQuery(LIST_POKEMONS)
  const [list, setList] = useState<IPokemonResult[]>([])

  const fetch = (limit: number, offset: number, search = '.+') =>
    listPokemons({ variables: { limit, offset, search } })

  const fetchSearch = debounce((value) => {
    return refetch({ limit: 40, offset: 0, search: value }).then((data) =>
      setList(get(data, listPath)),
    )
  }, 500)

  const handleChangeSearch = useCallback((event) => {
    fetchSearch(event.target.value)
  }, [])

  return (
    <InfiniteScroll<ApolloQueryResult<IPokemonListData>, IPokemonResult>
      header={<Header onChange={handleChangeSearch} />}
      listPath="data.results"
      list={list}
      setList={setList}
      fetch={fetch}
      refetch={refetch}
      offset={20}
      item={{ width: 240, height: 240 }}
    >
      {({ index }: { index: number }) => {
        const pokemonImage = getPokemonImage(list[index].id)
        const pokemonName = capitalize(list[index].name)

        return <PokemonCard src={pokemonImage} name={pokemonName} key={pokemonName} />
      }}
    </InfiniteScroll>
  )
}
