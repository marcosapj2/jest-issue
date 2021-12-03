import { gql } from '@apollo/client'

export const GET_POKEMON = gql`
  query GET_POKEMON($id: Int!) {
    result: pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      weight
      height
      details: pokemon_v2_pokemonspecy {
        evolutionChain: pokemon_v2_evolutionchain {
          species: pokemon_v2_pokemonspecies(order_by: { id: asc }) {
            name
            id
          }
        }
        color: pokemon_v2_pokemoncolor {
          name
        }
        habitat: pokemon_v2_pokemonhabitat {
          name
        }
        descriptions: pokemon_v2_pokemonspeciesflavortexts(
          where: {
            pokemon_v2_version: { name: { _eq: "sword" } }
            pokemon_v2_language: { name: { _eq: "en" } }
          }
        ) {
          flavor_text
        }
      }
      types: pokemon_v2_pokemontypes_aggregate {
        nodes {
          type: pokemon_v2_type {
            name
          }
        }
      }
      stats: pokemon_v2_pokemonstats_aggregate {
        nodes {
          value: base_stat
          stats: pokemon_v2_stat {
            name
          }
        }
      }
      abilities: pokemon_v2_pokemonabilities_aggregate {
        nodes {
          ability: pokemon_v2_ability {
            name
          }
        }
      }
    }
  }
`
