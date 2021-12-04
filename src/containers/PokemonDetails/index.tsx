import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TPokemonResults } from '@services'
import { AppState } from '@store'
import { PokemonCard, SkeletonCard } from './sections'
import { getPokemonImage } from '@utils/pokemon'
import { View } from './styles'
import { GET_POKEMON } from './query'
import { useQuery } from '@apollo/client'
import { capitalize } from 'lodash'

const convertToDecimal = (value: number, unitMeasurement: string): string =>
  `${(value / 10).toFixed(1)} ${unitMeasurement}`

export default function (): JSX.Element {
  const params = useParams()
  const navigate = useNavigate()

  const list = useSelector<AppState, TPokemonResults>((state) => state.pokemon.list)
  const { loading, data } = useQuery(GET_POKEMON, { variables: { id: params.id } })

  if (loading)
    return (
      <View>
        <SkeletonCard />
      </View>
    )
  const pokemon = data?.result || list.find((item) => String(item.id) === params.id)
  const abilities = pokemon?.abilities?.nodes
    ?.map(({ ability: { name } }) => capitalize(name))
    ?.join(', ')

  const types = pokemon?.types?.nodes
    ?.map(({ type: { name } }) => capitalize(name))
    ?.join(', ')

  const description = pokemon?.details?.descriptions
    ?.map(({ flavor_text: flavorText }) => flavorText)
    ?.join(', ')

  const [hp, attack, defense, specialAttack, specialDefense, speed] =
    pokemon?.stats?.nodes

  const heightLabel = convertToDecimal(pokemon?.height, 'm')
  const weightLabel = convertToDecimal(pokemon?.weight, 'kg')
  const stats = {
    hp: { label: hp.stats.name.toUpperCase(), value: hp.value },
    attack: { label: capitalize(attack.stats.name), value: attack.value },
    defense: { label: capitalize(defense.stats.name), value: defense.value },
    specialAttack: {
      label: specialAttack.stats.name
        .split('-')
        .map((value) => capitalize(value))
        .join(' '),
      value: specialAttack.value,
    },
    specialDefense: {
      label: specialDefense.stats.name
        .split('-')
        .map((value) => capitalize(value))
        .join(' '),
      value: specialDefense.value,
    },
    speed: { label: capitalize(speed.stats.name), value: speed.value },
  }

  const evolutionsLabel = pokemon?.details?.evolutionChain?.species.map(
    ({ name, id }) => ({
      name: capitalize(name),
      id,
    }),
  )

  const handleClickEvolution = (id: number) => {
    navigate(`/pokemons/${id}`)
  }

  const handleClickBack = () => {
    navigate(`/pokemons`)
  }

  return (
    <View>
      <PokemonCard
        name={capitalize(pokemon?.name)}
        src={getPokemonImage(params.id)}
        height={heightLabel}
        weight={weightLabel}
        habitat={capitalize(pokemon?.details?.habitat?.name)}
        abilities={abilities}
        description={description}
        stats={stats}
        types={types}
        evolutions={evolutionsLabel}
        onClickEvolution={handleClickEvolution}
        onClickBack={handleClickBack}
      />
    </View>
  )
}
