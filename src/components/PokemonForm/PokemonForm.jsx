import { useState, useEffect, useRef } from "react";
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
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

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

    // Add click outside handler
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
        .slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = async (pokemonName) => {
    setSearchTerm(pokemonName);
    setShowSuggestions(false);
    setError("");

    try {
      // Find all related Pokemon with similar names
      const relatedNames = pokemonList.filter((name) =>
        name.includes(pokemonName.toLowerCase())
      );

      const pokemonData = await Promise.all(
        relatedNames.map(async (name) => getPokemon(name))
      );
      onSearch(pokemonData);
    } catch (error) {
      console.error("Error searching pokemon:", error);
      setError("Error loading Pokemon. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const searchValue = searchTerm.trim().toLowerCase();

    if (!searchValue) {
      onSearch(null);
      setSearchTerm("");
      return;
    }

    // Check if there are matching suggestions
    const matchingSuggestions = pokemonList.filter((name) =>
      name.includes(searchValue)
    );

    if (matchingSuggestions.length > 0) {
      try {
        // Fetch details for all matching Pokemon
        const pokemonDetails = await Promise.all(
          matchingSuggestions.map(async (name) => {
            return getPokemon(name);
          })
        );
        onSearch(pokemonDetails);
        // Don't clear search term so user can see what they searched for
      } catch (error) {
        console.error("Error fetching pokemon details:", error);
        setError("Error loading Pokemon. Please try again.");
      }
    } else {
      try {
        // Try exact match as fallback
        const pokemonData = await getPokemon(searchValue);
        onPokemonSelect(pokemonData);
        setSearchTerm("");
      } catch (error) {
        console.error("Error searching pokemon:", error);
        setError("Pokemon not found. Try a different name or ID.");
      }
    }
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
      <div className="search-controls">
        <SearchInputWrapper>
          <SearchInput
            ref={inputRef}
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleChange}
            onFocus={() => searchTerm.trim() && setSuggestions(true)}
            placeholder="Search Pokemon..."
            aria-label="Search Pokemon"
            autoComplete="off"
          />
          {showSuggestions && suggestions.length > 0 && (
            <SuggestionsList ref={suggestionsRef}>
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
      </div>
    </SearchContainer>
  );
}

export default PokemonForm;
