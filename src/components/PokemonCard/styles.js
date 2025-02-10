import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Card = styled.div`
  background: ${theme.colors.background};
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: ${theme.shadows.card};
  transition: all ${theme.transitions.spring};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: ${theme.shadows.cardHover};
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1),
      transparent 70%
    );
    transform: translateX(-100%);
    transition: transform ${theme.transitions.hover};
  }

  &:hover::after {
    transform: translateX(100%);
  }
`;

export const PokemonImage = styled.img`
  width: 140px;
  height: 140px;
  image-rendering: pixelated;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all ${theme.transitions.spring};
  transform-origin: center bottom;

  ${Card}:hover & {
    transform: scale(1.1) translateY(-5px);
    filter: drop-shadow(0 8px 8px rgba(0, 0, 0, 0.2));
  }
`;

export const PokemonNumber = styled.p`
  color: ${theme.colors.textLight};
  margin: 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color ${theme.transitions.default};

  ${Card}:hover & {
    color: ${theme.colors.primary};
  }
`;

export const PokemonName = styled.h3`
  margin: 0.5rem 0;
  color: ${theme.colors.text};
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
  transition: color ${theme.transitions.default};

  ${Card}:hover & {
    color: ${theme.colors.primaryHover};
  }
`;
