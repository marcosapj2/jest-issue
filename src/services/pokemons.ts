import { PokeApi } from './api'
import { IPokemonListParams, IPokemonListData } from './interfaces'

export const listPokemons = (params: IPokemonListParams) =>
  PokeApi.defaultRequest<IPokemonListData>('/pokemon', { method: 'GET', params })

export const getPokemonDetails = (id: string) => PokeApi.defaultRequest(`/pokemon/${id}`)
