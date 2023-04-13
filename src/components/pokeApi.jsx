import React, { useState, useEffect } from 'react';
import axios from 'axios';

function pokeApi() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=15')
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="pokemon">
      <h1>Pokemons:</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      {window.location.hash=""}
    {window.location.hash=""}
    {window.onhashchange=function(){window.location.hash=""}}
    </div>
  );
}

export default pokeApi;
