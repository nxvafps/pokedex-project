import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 0.5rem;
  background-color: ${theme.colors.dark};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: ${theme.shadows.card};
  transition: transform 0.3s ease;
  height: ${theme.layout.headerHeight};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.25rem;
    height: calc(${theme.layout.headerHeight} * 0.8);
  }
`;

export const StyledImage = styled.img`
  height: 4em;
  padding: 1em;
  will-change: filter;
  transition: all ${theme.transitions.spring};

  &:hover {
    filter: drop-shadow(0 0 1em ${theme.colors.primary});
    transform: scale(1.05) rotate(5deg);
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 5em;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 3.5em;
    padding: 0.75em;
  }
`;
