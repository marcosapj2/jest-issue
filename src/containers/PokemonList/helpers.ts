export const getPokemonId = (pokemonUrl: string) =>
  pokemonUrl.match(/(?<=pokemon\/)\d+(?=\/)/gm)

export const getPokemonImage = (pokemonUrl: string) =>
  `${process.env.REACT_APP_POKE_IMAGES_URL}${getPokemonId(pokemonUrl)}.png`
