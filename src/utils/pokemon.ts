export const getPokemonImage = (pokemonId: number | string): string =>
  `${process.env.REACT_APP_POKE_IMAGES_URL}${pokemonId}.png`
