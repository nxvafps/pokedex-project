import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1280px;
  }
`;

export const PaginationContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;
