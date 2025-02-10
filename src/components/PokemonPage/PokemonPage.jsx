import {
  StyledImage,
  PokemonInfo,
  Container,
  BackButton,
  Types,
  TypeBadge,
} from "./styles";
import { PokemonPhysicalStats, PokemonBaseStats } from "./PokemonStats";
import { PokemonAbilities } from "./PokemonAbilities";
import PokemonMoves from "./PokemonMoves";
import PokemonEvolution from "./PokemonEvolution";
import { formatPokemonName } from "../../utils/pokemon";
import { getPokemon } from "../../utils/api";

function PokemonPage({ pokemon, onBack, onPokemonSelect }) {
  const primaryType = pokemon.types[0]?.type.name;

  const handleImageClick = () => {
    const audio = new Audio(pokemon.cries.latest);
    audio.play().catch((error) => {
      console.error("Error playing Pokemon cry:", error);
    });
  };

  const handleEvolutionSelect = async (pokemonId) => {
    try {
      const evolutionPokemon = await getPokemon(pokemonId);
      onPokemonSelect(evolutionPokemon);
    } catch (error) {
      console.error("Error fetching evolution pokemon:", error);
    }
  };

  return (
    <>
      <BackButton onClick={onBack} aria-label="Go back">
        ← Back
      </BackButton>
      <Container>
        <StyledImage
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
          title="Click to hear cry"
        />
        <PokemonInfo $primaryType={primaryType}>
          <h2>{formatPokemonName(pokemon.name)}</h2>
          <p>#{pokemon.id.toString().padStart(3, "0")}</p>
          <Types>
            {pokemon.types.map((type) => (
              <TypeBadge key={type.type.name} type={type.type.name}>
                {type.type.name}
              </TypeBadge>
            ))}
          </Types>
          <PokemonPhysicalStats
            height={pokemon.height}
            weight={pokemon.weight}
          />
          <PokemonBaseStats stats={pokemon.stats} />
          <PokemonAbilities abilities={pokemon.abilities} />
          <PokemonEvolution
            evolutionChain={pokemon.evolution_chain}
            currentPokemonId={pokemon.id}
            onPokemonSelect={handleEvolutionSelect}
          />
        </PokemonInfo>
        <PokemonMoves moves={pokemon.moves} />
      </Container>
    </>
  );
}

export default PokemonPage;
