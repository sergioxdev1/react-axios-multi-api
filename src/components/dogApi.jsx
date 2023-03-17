import React from 'react';
import React, { useEffect, useState } from 'react';
import '../style.css';

export default function dogApi() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        // Get the list of breeds from the data object
        const breeds = Object.keys(data.message);
        setBreeds(breeds);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="population">
      <h1>Dog Breeds List</h1>
      <ul>
        {breeds.map((breed) => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </div>
  );
}
