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
  gap: 0;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.tabletMax}) {
    flex-direction: column;
    gap: 0.5rem;
  }

  & > div {
    display: flex;
    align-items: center;

    @media (max-width: ${theme.breakpoints.tabletMax}) {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
  }
`;

const EvolutionArrow = styled.div`
  color: ${theme.colors.textLight};
  font-size: 1.5rem;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tabletMax}) {
    transform: rotate(90deg);
    margin: 0.5rem 0;
    height: 2rem;
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
  border: 2px solid ${theme.colors.border};
  width: 140px;

  @media (max-width: ${theme.breakpoints.tabletMax}) {
    width: 160px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.cardHover};
  }

  &.selected {
    background: ${theme.colors.backgroundLight};
    border: 3px solid ${theme.colors.primary};
    transform: scale(1.05);
    box-shadow: 0 0 0 2px ${theme.colors.primary}33;
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
              className={
                String(pokemon.id) === String(currentPokemonId)
                  ? "selected"
                  : ""
              }
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
