import styled from 'styled-components'
import { List as MaterialList, ListProps } from '@components'

export const List = styled(MaterialList)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
` as React.ComponentType<ListProps>
