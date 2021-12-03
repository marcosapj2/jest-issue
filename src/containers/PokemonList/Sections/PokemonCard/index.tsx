import { Image } from '@components'
import { IProps } from './interfaces'
import { ListItem, Typography } from './styles'

export default function ({ src, name, onClick }: IProps) {
  return (
    <ListItem onClick={onClick}>
      <Image width="180px" height="180px" src={src} alt={name} />
      <Typography>{name}</Typography>
    </ListItem>
  )
}
