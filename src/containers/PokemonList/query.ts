import { gql } from '@apollo/client'

export const LIST_POKEMONS = gql`
  query LIST_POKEMONS($search: String, $limit: Int, $offset: Int) {
    results: pokemon_v2_pokemon(
      offset: $offset
      limit: $limit
      where: { name: { _iregex: $search } }
    ) {
      name
      id
    }
  }
`
