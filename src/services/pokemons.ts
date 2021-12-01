import { PokeApi } from './api'

export const listPokemons = () => PokeApi.defaultRequest('/pokemon', { method: 'GET' })
export const getPokemonDetails = (id: string) => PokeApi.defaultRequest(`/pokemon/${id}`)
