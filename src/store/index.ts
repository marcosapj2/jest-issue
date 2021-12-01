import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export const initialState = {}
const rootReducer = combineReducers({})
export const store = createStore(rootReducer, {}, composeWithDevTools())

export type AppState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector
