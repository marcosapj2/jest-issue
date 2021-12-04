import { render as rtlRender } from '@testing-library/react'
import theme from '@constants/theme'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import client from '@services/api/graphql'
import { rootReducer, initialState } from '@store'
import { configureStore } from '@reduxjs/toolkit'
import { ExtendedRenderOptions } from './interfaces'

function render<S>(
  ui: React.ReactElement,
  {
    preloadedState = initialState,
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions<S> = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <ApolloProvider client={client}>
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <Provider store={store}>{children}</Provider>
          </ThemeProvider>
        </MemoryRouter>
      </ApolloProvider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
