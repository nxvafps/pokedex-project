import { useState } from "react";
import { SearchContainer, SearchInput, SearchButton } from "./styles";
import pokeballImg from "../../assets/pokeball.png";

function PokemonForm({ onSearch }) {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const searchTerm = e.target.search.value.toLowerCase().trim();

    if (!searchTerm) return;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const pokemonData = await response.json();
      // Add move URLs to the response
      const moves = pokemonData.moves.map((move) => ({
        ...move,
        move: {
          ...move.move,
          url: `https://pokeapi.co/api/v2/move/${move.move.name}`,
        },
      }));
      onSearch([{ ...pokemonData, moves }]);
      e.target.search.value = ""; // Clear input after successful search
    } catch (error) {
      console.error("Error searching pokemon:", error);
      setError("Pokemon not found. Try a different name or ID.");
    }
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="search"
        placeholder="Search Pokemon..."
        aria-label="Search Pokemon"
      />
      <SearchButton type="submit" aria-label="Search">
        <img src={pokeballImg} alt="" />
      </SearchButton>
      {error && <p style={{ color: "red", gridColumn: "1 / -1" }}>{error}</p>}
    </SearchContainer>
  );
}

export default PokemonForm;
