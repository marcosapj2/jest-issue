import styled from 'styled-components'
import pokemon from '@assets/images/vr-pokedex.png'
import { Input as DefaultInput } from '@components'

export const Input = styled(DefaultInput)`
  width: 400px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.background.secondary};
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
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  color: white;
`
