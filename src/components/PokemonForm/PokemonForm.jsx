import { SearchContainer, SearchInput, SearchButton } from "./styles";
import pokeballImg from "../../assets/pokeball.png";

function PokemonForm({ onSearch }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.toLowerCase().trim();

    if (!searchTerm) return;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      const data = await response.json();
      onSearch([data]);
    } catch (error) {
      console.error("Error searching pokemon:", error);
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
      <SearchButton type="submit">
        <img src={pokeballImg} alt="Search" />
      </SearchButton>
    </SearchContainer>
  );
}

export default PokemonForm;
