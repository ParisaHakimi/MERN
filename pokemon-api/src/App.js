import { useEffect, useState } from "react";
import "./App.css";
import WithAxios from "./components/WithAxios";
import WithFetch from "./components/WithFetch";

function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div className="App">
      <WithFetch pokemons={pokemons} setPokemons={setPokemons} />
      <WithAxios pokemons={pokemons} setPokemons={setPokemons} />
    </div>
  );
}

export default App;
