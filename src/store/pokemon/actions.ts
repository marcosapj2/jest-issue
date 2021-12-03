import { IUpdateListAction, IReplaceListAction, PokemonActionTypes } from './interfaces'
import { TPokemonResults } from '@services/interfaces'

export const updatePokemonList = (list: TPokemonResults): IUpdateListAction => ({
  list,
  type: PokemonActionTypes.UPDATE_LIST,
})

export const replacePokemonList = (list: TPokemonResults): IReplaceListAction => ({
  list,
  type: PokemonActionTypes.REPLACE_LIST,
})
