import { Column, Input, Logo } from './styles'

export default function ({ onChange }) {
  return (
    <Column>
      <Logo>VR Pokedex</Logo>
      <Input onChange={onChange} />
    </Column>
  )
}
