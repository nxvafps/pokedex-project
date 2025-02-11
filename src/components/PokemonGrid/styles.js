import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  max-width: ${theme.layout.maxWidth};

  ${theme.media.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  ${theme.media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    padding: ${theme.layout.contentPadding};
    gap: 2rem;
  }

  ${theme.media.desktop} {
    gap: 2.5rem;
  }

  ${theme.media.largeDesktop} {
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
