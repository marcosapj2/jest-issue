import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PokemonDetails from '@containers/PokemonDetails'
import PokemonList from '@containers/PokemonList'

export default (): JSX.Element => (
  <Suspense fallback={<span>Loading ...</span>}>
    <Routes>
      <Route path="/" element={<Navigate to="/pokemons" replace />} />
      <Route path="/pokemons" element={<PokemonList />} />
      <Route path="/pokemons/:id" element={<PokemonDetails />} />
    </Routes>
  </Suspense>
)
