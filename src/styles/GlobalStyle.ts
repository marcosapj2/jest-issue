import { createGlobalStyle } from 'styled-components'
// import './fonts.css'
import pokemonWoff2 from '@assets/fonts/pokemon-solid.woff2'
import pokemonWoff from '@assets/fonts/pokemon-solid.woff'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pokemon';
    font-style: normal;
    font-display: swap;
    src: url(${pokemonWoff2}) format('woff2'), url(${pokemonWoff}) format('woff');
  }

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
