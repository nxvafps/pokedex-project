import styled from "styled-components";

export const Card = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
`;

export const PokemonNumber = styled.p`
  color: #666;
  margin: 0.5rem 0;
`;

export const PokemonName = styled.h3`
  margin: 0.5rem 0;
  color: #333;
`;
