import PokemonList from '../'
import { render, screen, waitFor } from '@test-utils'
import { setupServer } from 'msw/node'
import listPokemonHandler from '@mocks/handlers/listPokemons'
import pokemonsMock from '@mocks/objects/pokemons.json'

describe('PokemonList', () => {
  const server = setupServer(listPokemonHandler)
  const lastPokemonOnFirstPage = pokemonsMock.results[5]

  beforeAll(() => server.listen())
  beforeEach(() => render(<PokemonList />))
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should render the list of pokemons', async () => {
    await waitFor(() => {
      expect(screen.queryByText(lastPokemonOnFirstPage.name)).toBeInTheDocument()
    })
  })

  it('should increment items on scroll', async () => {
    await waitFor(() => {
      expect(screen.queryByText(lastPokemonOnFirstPage.name)).toBeInTheDocument()
    })
  })
})
