import {
  StyledImage,
  PokemonInfo,
  Container,
  BackButton,
  Types,
} from "./styles";
import { PokemonPhysicalStats, PokemonBaseStats } from "./PokemonStats";
import { PokemonAbilities } from "./PokemonAbilities";
import PokemonMoves from "./PokemonMoves";
import { formatPokemonName } from "../../utils/pokemon";

function PokemonPage({ pokemon, onBack }) {
  return (
    <>
      <BackButton onClick={onBack} aria-label="Go back">
        ← Back
      </BackButton>
      <Container>
        <StyledImage src={pokemon.sprites.front_default} alt={pokemon.name} />
        <PokemonInfo>
          <h2>{formatPokemonName(pokemon.name)}</h2>
          <p>#{pokemon.id.toString().padStart(3, "0")}</p>
          <Types>
            {pokemon.types.map((type) => (
              <span key={type.type.name}>{type.type.name}</span>
            ))}
          </Types>

          <PokemonPhysicalStats
            height={pokemon.height}
            weight={pokemon.weight}
          />

          <PokemonBaseStats stats={pokemon.stats} />

          <PokemonAbilities abilities={pokemon.abilities} />
        </PokemonInfo>

        <PokemonMoves moves={pokemon.moves} />
      </Container>
    </>
  );
}

export default PokemonPage;
