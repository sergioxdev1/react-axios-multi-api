import React from 'react';
import PopulationApi from './components/populationApi';
import PokeApi from './components/pokeApi';
import DogApi from './components/dogApi';

export default function App() {
  return (
    <>
      <PopulationApi />
      <PokeApi />
      <DogApi />
    </>
  );
}
