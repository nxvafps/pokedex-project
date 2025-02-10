import { useState, useEffect } from "react";
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchInputWrapper,
  SuggestionsList,
  SuggestionItem,
} from "./styles";
import pokeballImg from "../../assets/pokeball.png";

function PokemonForm({ onSearch }) {
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // Fetch all pokemon names when component mounts
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        const data = await response.json();
        setPokemonList(data.results.map((pokemon) => pokemon.name));
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
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!response.ok) throw new Error("Pokemon not found");
      const pokemonData = await response.json();
      const moves = pokemonData.moves.map((move) => ({
        ...move,
        move: {
          ...move.move,
          url: `https://pokeapi.co/api/v2/move/${move.move.name}`,
        },
      }));
      onSearch([{ ...pokemonData, moves }]);
      setSearchTerm(""); // Clear input after successful search
    } catch (error) {
      console.error("Error searching pokemon:", error);
      setError("Pokemon not found. Try a different name or ID.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const searchValue = searchTerm.trim();

    // If empty or whitespace only, trigger default view
    if (!searchValue) {
      onSearch(null);
      setSearchTerm("");
      return;
    }

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchValue}`
      );
      if (!response.ok) throw new Error("Pokemon not found");
      const pokemonData = await response.json();
      const moves = pokemonData.moves.map((move) => ({
        ...move,
        move: {
          ...move.move,
          url: `https://pokeapi.co/api/v2/move/${move.move.name}`,
        },
      }));
      onSearch([{ ...pokemonData, moves }]);
      setSearchTerm(""); // Clear input after successful search
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
