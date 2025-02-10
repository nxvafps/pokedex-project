import { useEffect, useState } from "react";
import {
  StyledImage,
  PokemonInfo,
  Container,
  BackButton,
  Types,
  Abilities,
  AbilityButton,
  AbilityDescription,
  LoadingSpinner,
} from "./styles";

function PokemonPage({ pokemon, onBack }) {
  const [selectedAbility, setSelectedAbility] = useState(null);
  const [abilityEffect, setAbilityEffect] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchAbilityEffect = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      const englishEffect = data.effect_entries.find(
        (entry) => entry.language.name === "en"
      );
      setAbilityEffect(
        englishEffect ? englishEffect.effect : "No effect description available"
      );
    } catch (error) {
      console.error("Error fetching ability effect:", error);
      setAbilityEffect("Failed to load ability effect");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAbilityClick = (ability) => {
    if (selectedAbility === ability.ability.name) {
      setSelectedAbility(null);
      setAbilityEffect("");
    } else {
      setSelectedAbility(ability.ability.name);
      fetchAbilityEffect(ability.ability.url);
    }
  };

  return (
    <>
      <BackButton onClick={onBack} aria-label="Go back">
        ← Back
      </BackButton>
      <Container>
        <StyledImage src={pokemon.sprites.front_default} alt={pokemon.name} />
        <PokemonInfo>
          <h2>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <p>#{pokemon.id.toString().padStart(3, "0")}</p>
          <Types>
            {pokemon.types.map((type) => (
              <span key={type.type.name}>{type.type.name}</span>
            ))}
          </Types>
          <Abilities>
            <h3>Abilities</h3>
            <div role="tablist">
              {pokemon.abilities.map((ability) => (
                <AbilityButton
                  key={ability.ability.name}
                  onClick={() => handleAbilityClick(ability)}
                  role="tab"
                  aria-selected={selectedAbility === ability.ability.name}
                  aria-controls={`effect-${ability.ability.name}`}
                  $isSelected={selectedAbility === ability.ability.name}
                >
                  {ability.ability.name.replace("-", " ")}
                  {ability.is_hidden && " (Hidden)"}
                </AbilityButton>
              ))}
            </div>
            {selectedAbility && (
              <AbilityDescription
                role="tabpanel"
                id={`effect-${selectedAbility}`}
                aria-live="polite"
              >
                {isLoading ? (
                  <LoadingSpinner aria-label="Loading ability description..." />
                ) : (
                  <p>{abilityEffect}</p>
                )}
              </AbilityDescription>
            )}
          </Abilities>
        </PokemonInfo>
      </Container>
    </>
  );
}

export default PokemonPage;
