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
  const [selectedIndex, setSelectedIndex] = useState(-1);
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

  const handleKeyDown = (e) => {
    if (!showSuggestions) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit(e);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > -1 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else {
          setShowSuggestions(false);
          handleSubmit(e);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setError("");
    setSelectedIndex(-1);

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
      const pokemonData = await getPokemon(pokemonName);
      onPokemonSelect(pokemonData);
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

    const matchingSuggestions = pokemonList.filter((name) =>
      name.includes(searchValue)
    );

    if (matchingSuggestions.length > 0) {
      try {
        const pokemonDetails = await Promise.all(
          matchingSuggestions.map(async (name) => {
            return getPokemon(name);
          })
        );
        onSearch(pokemonDetails);
      } catch (error) {
        console.error("Error fetching pokemon details:", error);
        setError("Error loading Pokemon. Please try again.");
      }
    } else {
      try {
        const pokemonData = await getPokemon(searchValue);
        onPokemonSelect(pokemonData);
        setSearchTerm("");
      } catch (error) {
        console.error("Error searching pokemon:", error);
        setError("Pokemon not found. Try a different name or ID.");
      }
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    setSuggestions([]);
    setShowSuggestions(false);
    setError("");
    onSearch(null);
    inputRef.current?.focus();
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
            onKeyDown={handleKeyDown}
            onFocus={() => searchTerm.trim() && setShowSuggestions(true)}
            placeholder="Search Pokemon..."
            aria-label="Search Pokemon"
            autoComplete="off"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="clear-button"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
          {showSuggestions && suggestions.length > 0 && (
            <SuggestionsList ref={suggestionsRef}>
              {suggestions.map((suggestion, index) => (
                <SuggestionItem
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={index === selectedIndex ? "selected" : ""}
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
