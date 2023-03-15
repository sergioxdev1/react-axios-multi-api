import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
const axios = require('axios');

export default function ApppokeApi() {

const [pokeDataAPI, pokeSetData] = useState([]);
  const [pokeyear, setYear] = useState([]);

  const pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=15';
  const fetchPokeAPI = async () => {
    try {
      const resp = await axios
        .get(pokeApi)
        .then((response) => response.data.data)
        .then((data) => {
          setData(data);
        });
    } catch (error) {}
  };
}