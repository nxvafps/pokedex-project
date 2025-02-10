import { useState, useEffect } from "react";
import "./App.css";
import {
  Header,
  PokemonGrid,
  PokemonForm,
  PokemonPage,
  Footer,
} from "./components";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=12"
  );
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [currentPage]);

  const handleSearch = async (searchResults) => {
    if (searchResults === null) {
      setPokemons([]);
      setLoading(true);
      try {
        const defaultUrl = "https://pokeapi.co/api/v2/pokemon?limit=12";
        const response = await fetch(defaultUrl);
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(`${pokemon.url}`);
            const pokemonData = await res.json();
            const moves = pokemonData.moves.map((move) => ({
              ...move,
              move: {
                ...move.move,
                url: `https://pokeapi.co/api/v2/move/${move.move.name}`,
              },
            }));
            return { ...pokemonData, moves };
          })
        );
        setPokemons(pokemonDetails);
        setNextPage(data.next);
        setPrevPage(data.previous);
      } catch (error) {
        console.error("Error fetching default pokemon:", error);
      } finally {
        setLoading(false);
      }
      return;
    }
    setPokemons(searchResults);
    setNextPage(null);
    setPrevPage(null);
  };

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleBack = () => {
    setSelectedPokemon(null);
  };

  const fetchPokemons = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(`${pokemon.url}`);
          const pokemonData = await res.json();
          const moves = pokemonData.moves.map((move) => ({
            ...move,
            move: {
              ...move.move,
              url: `https://pokeapi.co/api/v2/move/${move.move.name}`,
            },
          }));
          return { ...pokemonData, moves };
        })
      );
      setPokemons(pokemonDetails);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (error) {
      console.error("Error fetching pokemon:", error);
    }
    setLoading(false);
  };

  const goToNextPage = () => {
    if (nextPage) setCurrentPage(nextPage);
  };

  const goToPrevPage = () => {
    if (prevPage) setCurrentPage(prevPage);
  };

  return (
    <>
      <Header />
      {selectedPokemon ? (
        <PokemonPage pokemon={selectedPokemon} onBack={handleBack} />
      ) : (
        <>
          <PokemonForm onSearch={handleSearch} />
          {loading ? (
            <p className="loading">Loading Pokémon...</p>
          ) : (
            <PokemonGrid
              pokemons={pokemons}
              prevPage={prevPage}
              nextPage={nextPage}
              goToPrevPage={goToPrevPage}
              goToNextPage={goToNextPage}
              onPokemonSelect={handlePokemonSelect}
            />
          )}
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
