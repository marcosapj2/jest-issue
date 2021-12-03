import { Column, Input, Logo } from './styles'
import { IProps } from './interfaces'

export default function ({ onChange }: IProps): JSX.Element {
  return (
    <Column>
      <Logo>VR Pokedex</Logo>
      <Input onChange={onChange} />
    </Column>
  )
}
