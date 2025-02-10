import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SearchContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin: 2rem auto;
  max-width: 400px;
  padding: 0 1rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1.2rem;
  border: 2px solid ${theme.colors.dark};
  border-radius: 8px;
  font-size: 1rem;
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  transition: all ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(100, 108, 255, 0.2);
  }

  &::placeholder {
    color: ${theme.colors.textLight};
  }
`;

export const SearchButton = styled.button`
  background: ${theme.colors.dark};
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${theme.transitions.default};

  img {
    width: 24px;
    height: 24px;
    transition: transform ${theme.transitions.default};
  }

  &:hover {
    background: ${theme.colors.primary};
    transform: translateY(-2px);

    img {
      transform: rotate(15deg);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;
