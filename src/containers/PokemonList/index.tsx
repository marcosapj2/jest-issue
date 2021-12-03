import { useCallback, useEffect, useState, useRef } from 'react'
import { IPokemonListData, IPokemonResult, TPokemonResults } from '@services'
import { InfiniteScroll } from '@components'
import { capitalize } from 'lodash'
import { getPokemonImage } from '@utils/pokemon'
import { PokemonCard, Header } from './sections'
import { useLazyQuery, ApolloQueryResult } from '@apollo/client'
import { LIST_POKEMONS } from './query'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '@store'

export default () => {
  const navigate = useNavigate()
  const list = useSelector<AppState, TPokemonResults>((state) => state.pokemon.list)
  const dispatch = useDispatch()
  const [listPokemons] = useLazyQuery(LIST_POKEMONS, {
    onCompleted: (data) => {
      if (data) {
        if (replace) {
          replaceList(data.results)
        } else {
          updateList(data.results)
        }
      }
    },
  })
  const [replace, setReplace] = useState(false)

  const updateList = (list: TPokemonResults) => {
    dispatch({ type: 'pokemon/updateList', list })
  }

  const replaceList = (list: TPokemonResults) => {
    dispatch({ type: 'pokemon/replaceList', list })
  }

  const fetch = (limit: number, offset: number, search = '.+') =>
    listPokemons({ variables: { limit, offset, search } })

  const handleClick = (id: number) => {
    navigate(`/pokemons/${id}`)
  }

  const fetchSearch = debounce((value: string) => {
    setReplace(true)
    return fetch(40, 0, value)
  }, 500)

  const handleChangeSearch = useCallback((event) => {
    fetchSearch(event.target.value)
  }, [])

  return (
    <InfiniteScroll<ApolloQueryResult<IPokemonListData>, IPokemonResult>
      header={<Header onChange={handleChangeSearch} />}
      list={list}
      fetch={fetch}
      offset={20}
      item={{ width: 240, height: 240 }}
    >
      {({ index }: { index: number }) => {
        const pokemon = list[index]
        const pokemonImage = getPokemonImage(pokemon.id)
        const pokemonName = capitalize(pokemon.name)

        return (
          <PokemonCard
            src={pokemonImage}
            name={pokemonName}
            key={pokemon.id}
            onClick={() => handleClick(pokemon.id)}
          />
        )
      }}
    </InfiniteScroll>
  )
}
