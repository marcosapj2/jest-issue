export interface IProps {
  src: string
  name: string
  height: string
  weight: string
  habitat: string
  abilities: string
  description: string
  types: string
  evolutions: { name: string; id: number }[]
  stats: { [key: string]: { label: string; value: string } }
  onClickEvolution: (id: number) => void
  onClickBack: () => void
}

export interface IStyledProps {
  $isSpaceAround?: boolean
}
