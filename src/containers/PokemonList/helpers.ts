export const getPokemonImage = (pokemonId: number) =>
  `${process.env.REACT_APP_POKE_IMAGES_URL}${pokemonId}.png`
