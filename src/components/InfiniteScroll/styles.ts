import styled from 'styled-components'
import { List as MaterialList } from '@components'
import { IStyledProps } from './interfaces'

export const List = styled<React.ComponentType<IStyledProps>>(MaterialList)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${({ $width }) => $width}px;
`

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`
