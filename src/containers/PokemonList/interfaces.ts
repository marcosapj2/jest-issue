export interface IProps {}

export interface IPokemonResult {
  name: string
  url: string
}

export type TPokemonResults = IPokemonResult[]

export interface IData {
  count: number
  next: string | undefined
  previous: string | undefined
  results: TPokemonResults
}
