import React, { useEffect, useState } from 'react';
import { Pokemon } from 'types/pokemon';
import './App.css';
import { getAll, getEach } from './api/pokemon';

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  const loadEachPokemon = async (data: Pokemon[]) => {
    const res = await Promise.all(data.map((pokemon) => getEach(pokemon.url)));
    return setPokemonData(res);
  };

  useEffect(() => {
    const fetchAllPokemon = async () => {
      const res = await getAll(
        `${process.env.REACT_APP_INITIAL_POKEMON_ENDPOINT}`
      );
      console.log(res);
      await loadEachPokemon(res.results);
      setLoading(false);
    };
    fetchAllPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <h1>ローディング中です。</h1>
      ) : (
        <div className='pokemonCardContainer'>
          {pokemonData.map((pokemon, index) => pokemon.url)}
        </div>
      )}
    </div>
  );
}

export default App;
