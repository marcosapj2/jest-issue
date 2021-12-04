import PokemonList from '../'
import { render, screen, waitFor, fireEvent } from '@test-utils'
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event'
import { resizeTo } from 'window-resizeto'
import listPokemonHandler from '@mocks/handlers/listPokemons'
import pokemonsMock from '@mocks/objects/pokemons.json'

describe('PokemonList', () => {
  const server = setupServer(listPokemonHandler)
  const lastPokemonOnFirstPage = pokemonsMock.results[5].name

  beforeAll(() => {
    resizeTo(window, 1024, 768)
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 1624,
    })
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
      configurable: true,
      value: 1024,
    })
    server.listen()
  })

  it('should render the list of pokemons', async () => {
    render(<PokemonList />)

    await waitFor(() => {
      expect(screen.queryByText(lastPokemonOnFirstPage)).toBeInTheDocument()
    })
  })

  it('should change items when search', async () => {
    render(<PokemonList />)

    const input = screen.getByRole('textbox')

    userEvent.type(input, 'per')

    await waitFor(() => {
      expect(screen.queryByText('Peraxoq')).toBeInTheDocument()
      expect(screen.queryByText('Peris')).toBeInTheDocument()
      expect(screen.queryByText('Pikalu')).not.toBeInTheDocument()
    })
  })

  it('should increment items on scroll', async () => {
    render(<PokemonList />)

    const firstPokemonOnNextPage = pokemonsMock.results[6].name
    const infiniteScrollFeed = screen.getByRole('feed')

    await waitFor(() => {
      expect(screen.queryByText(lastPokemonOnFirstPage)).toBeInTheDocument()
    })

    fireEvent.scroll(infiniteScrollFeed, { target: { scrollTop: 600 } })

    await waitFor(() => {
      expect(screen.queryByText(firstPokemonOnNextPage)).toBeInTheDocument()
    })
  })
})
