import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import theme from '@constants/theme'
import { store } from '@store'
import client from '@services/api/graphql'
import Routes from '@routes'
import GlobalStyle from '@styles/GlobalStyle'

function App(): JSX.Element {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <GlobalStyle />
            <Routes />
          </Provider>
        </ApolloProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
