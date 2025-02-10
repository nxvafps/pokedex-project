import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${theme.colors.white};
  border-radius: 16px;
  box-shadow: ${theme.shadows.card};
  position: relative;
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    margin: 1rem;
    padding: 1.5rem;
    text-align: center;
  }
`;

export const StyledImage = styled.img`
  width: 400px;
  height: 400px;
  image-rendering: pixelated;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  transition: transform ${theme.transitions.hover};
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 250px;
    height: 250px;
  }
`;

export const PokemonInfo = styled.div`
  flex-grow: 1;
  padding: 2rem;
  background: ${theme.colors.background};
  border-radius: 12px;
  box-shadow: ${theme.shadows.card};
  text-align: left;

  h2 {
    font-size: 3rem;
    color: ${theme.colors.text};
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    font-weight: 700;
  }

  p {
    color: ${theme.colors.textLight};
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1rem;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export const BackButton = styled.button`
  margin: 1rem auto;
  padding: 0.75rem 1.5rem;
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  font-weight: 600;
  display: block;
  width: fit-content;

  &:hover {
    background: ${theme.colors.primary};
    transform: translateX(-4px);
  }

  &:active {
    transform: translateX(-2px);
  }
`;

export const Types = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }

  span {
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all ${theme.transitions.default};
    box-shadow: ${theme.shadows.card};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.hover};
      background: ${theme.colors.primaryHover};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 0.5rem;

    span {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
  }
`;
