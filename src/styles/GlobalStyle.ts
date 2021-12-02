import { createGlobalStyle } from 'styled-components'
// import './fonts.css'

const GlobalStyle = createGlobalStyle`
  * , *:before, *:after{ 
    box-sizing:border-box; 
    -moz-box-sizing:border-box; 
    -webkit-box-sizing:border-box; 
    -ms-box-sizing:border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: "Montserrat Regular", "Helvetica", "Arial", sans-serif;
    background: ${({ theme }) => theme.background.primary}
  }
  html, body, #root {
    height: 100%;
    width: 100%;
  }
`

export default GlobalStyle
