import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
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
    <div className="App">
      {pokemons.map((pokemon, i) => (
        <li key={i}>{pokemon.name}</li>
      ))}
    </div>
  );
}

export default App;
