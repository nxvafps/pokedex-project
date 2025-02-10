import { useState, useEffect } from "react";
import "./App.css";
import { Header, PokemonGrid } from "./components";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=12"
  );
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [currentPage]);

  const fetchPokemons = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PokemonGrid
          pokemons={pokemons}
          prevPage={prevPage}
          nextPage={nextPage}
          goToPrevPage={goToPrevPage}
          goToNextPage={goToNextPage}
        />
      )}
    </>
  );
}

export default App;
