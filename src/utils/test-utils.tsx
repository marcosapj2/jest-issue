import { initialState } from '@store'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import theme from '@constants/theme'
import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'
import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import reduxMockStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components'

// export const mockAxios = new MockAdapter(axios)

const mockStore = reduxMockStore()

const store = mockStore({
  ...initialState,
})

const WithThemeProvider: React.FunctionComponent = (props) => (
  <ThemeProvider theme={theme}>
    <>{props.children}</>
  </ThemeProvider>
)

const WithStore: React.FunctionComponent = (props) => (
  <Provider store={store}>
    <WithThemeProvider>{props.children}</WithThemeProvider>
  </Provider>
)

const WithRouter: React.FunctionComponent = (props) => (
  <MemoryRouter>
    <WithThemeProvider>{props.children}</WithThemeProvider>
  </MemoryRouter>
)

const WithStoreAndRouter: React.FunctionComponent = (props) => (
  <Provider store={store}>
    <MemoryRouter>
      <WithThemeProvider>{props.children}</WithThemeProvider>
    </MemoryRouter>
  </Provider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: WithThemeProvider, ...options })

export const renderWithStore = (
  ui: React.ReactElement,
  options?: RenderOptions,
): RenderResult => render(ui, { wrapper: WithStore, ...options })

export const renderWithRouter = (
  ui: React.ReactElement,
  options?: RenderOptions,
): RenderResult => render(ui, { wrapper: WithRouter, ...options })

export const renderWithStoreAndRouter = (
  ui: React.ReactElement,
  options?: RenderOptions,
): RenderResult => render(ui, { wrapper: WithStoreAndRouter, ...options })

export * from '@testing-library/react'
export { customRender as render, store }
