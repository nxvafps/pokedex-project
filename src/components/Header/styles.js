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
`;

export const StyledImage = styled.img`
  height: 4em;
  padding: 1em;
  will-change: filter;
  transition: filter ${theme.transitions.default};

  &:hover {
    filter: drop-shadow(0 0 1em ${theme.colors.primary});
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 5em;
  }
`;
