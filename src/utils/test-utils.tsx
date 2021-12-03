import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { initialState } from '@store'
import theme from '@constants/theme'
import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import reduxMockStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import client from '@services/api/graphql'

const mockStore = reduxMockStore()

const store = mockStore({
  ...initialState,
})

const Providers: React.FunctionComponent = (props) => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <MemoryRouter>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </MemoryRouter>
    </ApolloProvider>
  </Provider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render, store }
