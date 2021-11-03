import logo from './logo.svg';
import './App.css';
import Pokemon from './components/pokemon';
import Pokedex from './components/pokedex';
import pokemons from './data';

function App() {
  return (
    <Pokedex pokemons={pokemons} />
  );
}

export default App; 
 