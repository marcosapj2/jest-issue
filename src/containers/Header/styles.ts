import styled from 'styled-components'
import pokemon from '@assets/pokemon.png'

export const PokemonLogo = styled.img.attrs({ src: pokemon, alt: 'pokemon-logo' })`
  width: 200px;
  height: auto;
`

export const Column = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
