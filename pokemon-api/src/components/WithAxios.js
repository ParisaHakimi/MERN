import React,{useEffect} from "react";
import axios, { Axios } from "axios";

const WithAxios = ({pokemons,setPokemons}) => {
useEffect(() => {
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
  .then(res=>{setPokemons(res.data)})
}, [])

  return <div className="app2">
      <h2>Pokemon with useEffect and Axios</h2>
      {pokemons.map((pokemon, i) => (
        <li key={i}>{pokemon.name}</li>
      ))}
  </div>;
};

export default WithAxios;
