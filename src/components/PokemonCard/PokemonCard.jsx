import { Card, PokemonImage, PokemonNumber, PokemonName } from "./styles";

function PokemonCard({ pokemon, onSelect }) {
  return (
    <Card onClick={() => onSelect(pokemon)}>
      <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
      <PokemonNumber>#{pokemon.id.toString().padStart(3, "0")}</PokemonNumber>
      <PokemonName>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </PokemonName>
    </Card>
  );
}

export default PokemonCard;
