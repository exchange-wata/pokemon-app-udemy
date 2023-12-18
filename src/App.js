import { useEffect, useState } from 'react';
import './App.css';
import { getAll, getEach } from './api/pokemon';

function App() {
  const initialUrl = process.env.REACT_APP_INITIAL_POKEMON_ENDPOINT;

  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState([])

  const loadEachPokemon = async (data) => {
    const res = await Promise.all(data.map((pokemon) => getEach(pokemon.url)))
    return setPokemonData(res)
  }

  useEffect(() => {
    const fetchAllPokemon = async () => {
      const res = await getAll(initialUrl);
      await loadEachPokemon(res.results);
      setLoading(false)
    }
    fetchAllPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      {loading ? (
        <h1>ローディング中です。</h1>
      ) : (
        <div className='pokemonCardContainer'>{pokemonData.map((pokemon, index) => pokemon.url)}</div>
      )}
    </div>
  );
}

export default App;
