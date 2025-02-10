import { useEffect, useState } from "react";
import {
  StyledImage,
  PokemonInfo,
  Container,
  BackButton,
  Types,
} from "./styles";

function PokemonPage({ pokemon, onBack }) {
  return (
    <>
      <BackButton onClick={onBack}>← Back</BackButton>
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
        </PokemonInfo>
      </Container>
    </>
  );
}

export default PokemonPage;
