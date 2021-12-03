import styled from 'styled-components'
import {
  ListItem as MaterialListItem,
  Typography as MaterialTypography,
  ListItemProps,
} from '@components'

export const ListItem = styled(MaterialListItem)`
  &.MuiListItem-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.background.secondary};
    margin: 10px;
    border-radius: 20px;
    width: 240px;
    height: 240px;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
  }
` as unknown as React.ComponentType<ListItemProps>

export const Typography = styled(MaterialTypography)`
  user-select: none;
`
