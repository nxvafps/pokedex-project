import { useState, useEffect } from "react";
import "./App.css";
import { getPokemonList, getPokemon } from "./utils/api";
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
        const data = await getPokemonList(defaultUrl);
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => getPokemon(pokemon.name))
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
      const data = await getPokemonList(url);
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          return getPokemon(pokemon.name);
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
    <main>
      <Header />
      {selectedPokemon ? (
        <PokemonPage
          pokemon={selectedPokemon}
          onBack={handleBack}
          onPokemonSelect={handlePokemonSelect}
        />
      ) : (
        <>
          <PokemonForm
            onSearch={handleSearch}
            onPokemonSelect={handlePokemonSelect}
          />
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
    </main>
  );
}

export default App;
