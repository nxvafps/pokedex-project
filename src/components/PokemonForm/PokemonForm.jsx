import { useState, useEffect } from "react";
import { api, getPokemon } from "../../utils/api";
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchInputWrapper,
  SuggestionsList,
  SuggestionItem,
} from "./styles";
import pokeballImg from "../../assets/pokeball.png";

function PokemonForm({ onSearch, onPokemonSelect }) {
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const { results } = await api
          .get("/pokemon?limit=1000")
          .then((res) => res.data);
        setPokemonList(results.map((pokemon) => pokemon.name));
      } catch (error) {
        console.error("Error fetching pokemon list:", error);
      }
    };
    fetchPokemonList();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setError("");

    if (value.trim().length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
    } else {
      const filtered = pokemonList
        .filter((name) => name.includes(value))
        .slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filtered);
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = async (pokemonName) => {
    setSearchTerm(pokemonName);
    setShowSuggestions(false);
    try {
      const pokemonData = await getPokemon(pokemonName);
      onPokemonSelect(pokemonData); // Directly select the Pokemon instead of updating search results
      setSearchTerm("");
    } catch (error) {
      console.error("Error searching pokemon:", error);
      setError("Pokemon not found. Try a different name or ID.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const searchValue = searchTerm.trim();

    if (!searchValue) {
      onSearch(null);
      setSearchTerm("");
      return;
    }

    try {
      const pokemonData = await getPokemon(searchValue);
      onPokemonSelect(pokemonData); // Also update submit to directly select the Pokemon
      setSearchTerm("");
    } catch (error) {
      console.error("Error searching pokemon:", error);
      setError("Pokemon not found. Try a different name or ID.");
    }
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchInputWrapper>
        <SearchInput
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Pokemon..."
          aria-label="Search Pokemon"
          autoComplete="off"
        />
        {showSuggestions && suggestions.length > 0 && (
          <SuggestionsList>
            {suggestions.map((suggestion) => (
              <SuggestionItem
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </SuggestionItem>
            ))}
          </SuggestionsList>
        )}
      </SearchInputWrapper>
      <SearchButton type="submit" aria-label="Search">
        <img src={pokeballImg} alt="" />
      </SearchButton>
      {error && <p className="error-message">{error}</p>}
    </SearchContainer>
  );
}

export default PokemonForm;
