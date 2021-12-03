import styled from 'styled-components'
import pokemon from '@assets/images/vr-pokedex.png'
import { Input as DefaultInput } from '@components'

export const Input = styled(DefaultInput)`
  width: 400px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.background.secondary};

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const PokemonLogo = styled.img.attrs({ src: pokemon, alt: 'pokemon-logo' })`
  width: 250px;
  height: auto;
`

export const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: min-content;
`

export const Logo = styled.h1`
  user-select: none;
  font-family: 'Pokemon';
  color: white;
  font-size: 40px;
`
