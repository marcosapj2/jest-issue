import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import theme from '@constants/theme'
import { store } from '@store'
import Routes from '@routes'
import GlobalStyle from '@styles/GlobalStyle'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Routes />
        </Provider>
      </ThemeProvider>
    </Router>
  )
}

export default App
