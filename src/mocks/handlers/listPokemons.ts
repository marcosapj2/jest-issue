import { graphql } from 'msw'
import pokemonsMock from '../objects/pokemons.json'

export default graphql.query('LIST_POKEMONS', (req, res, ctx) => {
  const { search, limit, offset } = req.variables
  const regexp = new RegExp(search, 'mi')
  const searchedPokemons = pokemonsMock.results.filter(({ name }) => regexp.test(name))
  const paginatedPokemons = searchedPokemons.slice(offset, limit + offset)

  return res(
    ctx.data({
      results: paginatedPokemons,
    }),
  )
})
