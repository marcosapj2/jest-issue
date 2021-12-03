import styled from 'styled-components'
import { Card as MaterialCard, CardProps, Image } from '@components'
import MaterialArrowBackIcon from '@material-ui/icons/ArrowBack'

export const ArrowBackIcon = styled(MaterialArrowBackIcon).attrs({ fontSize: 'large' })`
  cursor: pointer;
  color: ${({ theme }) => theme.background.primary};
  position: absolute;
  left: 0;
  margin: 20px 0 0 20px;
`

export const PokemonEvolution = styled(Image)`
  background: ${({ theme }) => theme.background.primary};
  border-radius: 20px;
  user-select: none;
  cursor: pointer;
  padding-bottom: 30px;

  @media (max-width: 700px) {
    background: transparent;
  }
`

export const RelativeContainer = styled.div`
  position: relative;
  width: min-content;
  height: min-content;
`

export const Card = styled(MaterialCard)`
  &.MuiPaper-root {
    width: 40%;

    @media (max-width: 2200px) {
      width: 50%;
    }
    @media (max-width: 1800px) {
      width: 60%;
    }
    @media (max-width: 1400px) {
      width: 70%;
    }
    @media (max-width: 1200px) {
      width: 85%;
    }
    @media (max-width: 700px) {
      width: 100%;
      height: 100%;
      border-radius: 0;
      overflow-y: auto;
    }

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.background.secondary};
    margin: 10px;
    border-radius: 20px;
    margin: 0 auto;
    height: 90%;
    box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
  }
` as unknown as React.ComponentType<CardProps>

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const EvolutionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 20px;
  width: 80%;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`

export const DetailsRow = styled(EvolutionsRow)`
  & > div:first-child {
    margin-right: 20px;
    background: ${({ theme }) => theme.background.primary};
  }
  @media (max-width: 700px) {
    & > div:first-child {
      margin-right: 0;
    }
  }
`

export const Description = styled.p`
  width: 75%;
`

export const Details = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    margin-top: 10px;
  }
  background: ${({ theme }) => theme.background.tertiary};
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 20px;
  flex: 1;
`

export const Title = styled.h1`
  font-family: 'Flexo-Medium';
`

export const SubTitle = styled.h2`
  margin-top: 30px;
  font-family: 'Flexo-Medium';

  @media (max-width: 700px) {
    margin-top: 20px;
  }
`

export const AbsoluteTitle = styled(SubTitle)`
  position: absolute;
  margin-top: 0;
  top: calc(100% - 40px);
  left: 50%;
  transform: translateX(-50%);
`
