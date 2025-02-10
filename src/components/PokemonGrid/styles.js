import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  margin: 0 auto;
  max-width: ${theme.layout.maxWidth};

  @media (min-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    padding: ${theme.layout.contentPadding};
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    gap: 2.5rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    gap: 3rem;
  }
`;

export const PaginationContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  background: ${theme.colors.background};
  border-radius: 12px;
  box-shadow: ${theme.shadows.card};
`;
