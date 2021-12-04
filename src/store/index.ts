import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { initialState as pokemonInitialState, pokemon } from './pokemon'

export const initialState = {
  pokemon: pokemonInitialState,
}

export const rootReducer = combineReducers({
  pokemon,
})
export const store = createStore(rootReducer, {}, composeWithDevTools())

export type AppState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector
