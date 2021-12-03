import { Image, Field } from '@components'
import { IProps } from './interfaces'
import { getPokemonImage } from '@utils/pokemon'
import {
  Card,
  Title,
  Details,
  Column,
  Description,
  DetailsRow,
  EvolutionsRow,
  PokemonEvolution,
  SubTitle,
  RelativeContainer,
  AbsoluteTitle,
  ArrowBackIcon,
} from './styles'

export default function ({
  src,
  name,
  description,
  height,
  weight,
  habitat,
  abilities,
  types,
  stats,
  evolutions,
  onClickBack,
  onClickEvolution,
}: IProps): JSX.Element {
  const { hp, attack, defense, speed, specialAttack, specialDefense } = stats

  return (
    <Card>
      <ArrowBackIcon onClick={onClickBack} />
      <Image width="220px" height="220px" src={src} alt={name} />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <DetailsRow>
        <Details>
          <Column>
            <Field label="Habitat" value={habitat} />
            <Field label="Abilities" value={abilities} />
            <Field label="Types" value={types} />
          </Column>
          <Column>
            <Field label="Height" value={height} />
            <Field label="Weight" value={weight} />
          </Column>
        </Details>
        <Details>
          <Column>
            <Field label={hp.label} value={hp.value} />
            <Field label={attack.label} value={attack.value} />
            <Field label={defense.label} value={defense.value} />
          </Column>
          <Column>
            <Field label={speed.label} value={speed.value} />
            <Field label={specialAttack.label} value={specialAttack.value} />
            <Field label={specialDefense.label} value={specialDefense.value} />
          </Column>
        </Details>
      </DetailsRow>
      {evolutions.length === 1 ? (
        <SubTitle>Não tem evoluções</SubTitle>
      ) : (
        <>
          <SubTitle>Evoluções</SubTitle>
          <EvolutionsRow>
            {evolutions.map((evolution) => (
              <RelativeContainer key={evolution.id}>
                <PokemonEvolution
                  alt={evolution.name}
                  src={getPokemonImage(evolution.id)}
                  width="220px"
                  height="250px"
                  onClick={() => onClickEvolution(evolution.id)}
                />
                <AbsoluteTitle>{evolution.name}</AbsoluteTitle>
              </RelativeContainer>
            ))}
          </EvolutionsRow>
        </>
      )}
    </Card>
  )
}
