import { useRequest } from '@hooks'
import { listPokemons } from '@services'

export default () => {
  const { data } = useRequest(listPokemons)

  return <h1>PokemonList</h1>
}
