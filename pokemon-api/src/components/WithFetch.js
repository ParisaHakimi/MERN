import React, { useEffect } from "react";

const WithFetch = ({ pokemons, setPokemons }) => {
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemons(data.results);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="app1">
      <h2>Pokemon with useEffect and fetch</h2>
      {pokemons.map((pokemon, i) => (
        <li key={i}>{pokemon.name}</li>
      ))}
      ;
    </div>
  );
};

export default WithFetch;
