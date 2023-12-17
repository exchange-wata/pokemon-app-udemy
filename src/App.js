import { useEffect } from 'react';
import './App.css';
import { getAll } from './api/pokemon'

function App() {
  const initialUrl = process.env.REACT_APP_INITIAL_POKEMON_ENDPOINT;

  useEffect(() => {
    const fetchAllPokemon = async () => await getAll(initialUrl)
    fetchAllPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App"></div>
  );
}

export default App;
