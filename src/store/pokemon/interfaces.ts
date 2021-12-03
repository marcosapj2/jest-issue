import { Action } from 'redux'
import { TPokemonResults } from '@services/interfaces'

export enum PokemonActionTypes {
  UPDATE_LIST = 'pokemon/updateList',
  REPLACE_LIST = 'pokemon/replaceList',
}

export interface IUpdateListAction extends Action {
  list: TPokemonResults
  type: typeof PokemonActionTypes.UPDATE_LIST
}

export interface IReplaceListAction extends Action {
  list: TPokemonResults
  type: typeof PokemonActionTypes.REPLACE_LIST
}

export interface IPokemonState {
  list: TPokemonResults
}

export type TPokemonActions = IUpdateListAction | IReplaceListAction
