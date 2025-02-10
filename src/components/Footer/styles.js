import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledFooter = styled.footer`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  padding: 2rem 1rem;
  margin-top: 4rem;
  width: 100%;

  .footer-content {
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.primaryHover};
    }
  }

  p {
    margin: 0;
    line-height: 1.5;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    .footer-content {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }
`;
