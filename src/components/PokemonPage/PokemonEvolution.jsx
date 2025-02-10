import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { formatPokemonName } from "../../utils/pokemon";

const EvolutionChain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background: ${theme.colors.background};
  border-radius: 12px;
  box-shadow: ${theme.shadows.card};
  margin-top: 2rem;
  width: 100%;

  h3 {
    color: ${theme.colors.text};
    margin-bottom: 1rem;
  }
`;

const EvolutionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

const EvolutionArrow = styled.div`
  color: ${theme.colors.textLight};
  font-size: 1.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    transform: rotate(90deg);
  }
`;

const PokemonEvolutionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: ${theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
  transition: all ${theme.transitions.spring};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.cardHover};
  }

  img {
    width: 96px;
    height: 96px;
    image-rendering: pixelated;
  }

  p {
    margin-top: 0.5rem;
    color: ${theme.colors.text};
    font-weight: 500;
  }

  .evolution-level {
    font-size: 0.8rem;
    color: ${theme.colors.textLight};
  }
`;

function PokemonEvolution({
  evolutionChain,
  currentPokemonId,
  onPokemonSelect,
}) {
  const [evolutionData, setEvolutionData] = useState(
    processEvolutionChain(evolutionChain)
  );

  function processEvolutionChain(chain) {
    const evolutions = [];
    let current = chain.chain;

    while (current) {
      const pokemonId = current.species.url.split("/").slice(-2, -1)[0];
      evolutions.push({
        name: current.species.name,
        id: pokemonId,
        min_level: current.evolution_details[0]?.min_level,
        trigger: current.evolution_details[0]?.trigger?.name,
      });

      // Move to the first evolution in the chain
      current = current.evolves_to[0];
    }

    return evolutions;
  }

  if (!evolutionData || evolutionData.length <= 1) return null;

  return (
    <EvolutionChain>
      <h3>Evolution Chain</h3>
      <EvolutionRow>
        {evolutionData.map((pokemon, index) => (
          <div
            key={pokemon.id}
            style={{ display: "flex", alignItems: "center" }}
          >
            <PokemonEvolutionCard
              onClick={() =>
                pokemon.id !== currentPokemonId && onPokemonSelect(pokemon.id)
              }
              style={{ opacity: pokemon.id === currentPokemonId ? 0.7 : 1 }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              <p>{formatPokemonName(pokemon.name)}</p>
              {pokemon.min_level && (
                <span className="evolution-level">
                  Level {pokemon.min_level}
                </span>
              )}
            </PokemonEvolutionCard>
            {index < evolutionData.length - 1 && (
              <EvolutionArrow>→</EvolutionArrow>
            )}
          </div>
        ))}
      </EvolutionRow>
    </EvolutionChain>
  );
}

export default PokemonEvolution;
