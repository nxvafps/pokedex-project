import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Card = styled.div`
  background: ${theme.colors.background};
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: ${theme.shadows.card};
  transition: transform ${theme.transitions.hover},
    box-shadow ${theme.transitions.hover};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.hover};
  }
`;

export const PokemonImage = styled.img`
  width: 140px;
  height: 140px;
  image-rendering: pixelated;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: transform ${theme.transitions.default};

  &:hover {
    transform: scale(1.1);
  }
`;

export const PokemonNumber = styled.p`
  color: ${theme.colors.textLight};
  margin: 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const PokemonName = styled.h3`
  margin: 0.5rem 0;
  color: ${theme.colors.text};
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
`;
