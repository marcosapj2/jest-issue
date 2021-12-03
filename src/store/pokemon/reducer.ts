import { Reducer } from 'redux'
import { TPokemonActions, PokemonActionTypes, IPokemonState } from './interfaces'

export const initialState: IPokemonState = {
  list: [],
}

export const pokemon: Reducer<IPokemonState, TPokemonActions> = (
  state = initialState,
  { type, ...payload },
) => {
  switch (type) {
    case PokemonActionTypes.UPDATE_LIST:
      return {
        ...state,
        list: [...state.list, ...payload.list],
      }

    case PokemonActionTypes.REPLACE_LIST:
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}
