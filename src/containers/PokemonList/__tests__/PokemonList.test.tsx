import PokemonList from '../'
import { render, screen, waitFor, fireEvent } from '@test-utils'
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event'
import { resizeTo } from 'window-resizeto'
import listPokemonHandler from '@mocks/handlers/listPokemons'
import pokemonsMock from '@mocks/objects/pokemons.json'
import * as MockReactRouterDom from 'react-router-dom'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<typeof MockReactRouterDom>('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

describe('PokemonList', () => {
  const server = setupServer(listPokemonHandler)
  const lastPokemonOnFirstPage = pokemonsMock.results[5]

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

  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should render the list of pokemons', async () => {
    render(<PokemonList />)

    await waitFor(() => {
      expect(screen.queryByText(lastPokemonOnFirstPage.name)).toBeInTheDocument()
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
      expect(screen.queryByText(lastPokemonOnFirstPage.name)).toBeInTheDocument()
    })

    fireEvent.scroll(infiniteScrollFeed, { target: { scrollTop: 600 } })

    await waitFor(() => {
      expect(screen.queryByText(firstPokemonOnNextPage)).toBeInTheDocument()
    })
  })

  it('should trigger navigate when click on a pokemon', async () => {
    render(<PokemonList />)

    await waitFor(() => {
      const lastPokemon = screen.queryByText(lastPokemonOnFirstPage.name)
      expect(lastPokemon).toBeInTheDocument()

      userEvent.click(lastPokemon)
    })

    expect(mockNavigate).toBeCalledWith('/pokemons/5006')
  })
})
