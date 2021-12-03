export interface IPokemonListParams {
  limit?: number
  offset?: number
}

export interface IPokemonResult {
  name: string
  genus: string
  id: number
}

export type TPokemonResults = IPokemonResult[]

export interface IPokemonListData {
  count: number
  next: string | undefined
  previous: string | undefined
  results: TPokemonResults
}
