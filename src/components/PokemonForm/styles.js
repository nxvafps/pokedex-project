import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;

  .clear-button {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: ${theme.colors.background};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: ${theme.colors.textLight};
    padding: 8px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ${theme.transitions.spring};

    &:hover {
      color: ${theme.colors.primary};
      background: ${theme.colors.background};
      transform: translateY(-50%) scale(1.1);
    }

    &:active {
      transform: translateY(-50%) scale(0.95);
    }
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  max-width: 100%;
  padding: 0 1rem;

  ${theme.media.tablet} {
    max-width: 500px;
    padding: 0;
  }

  .search-controls {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    padding: 1rem;
    background: ${theme.colors.white};
    border-radius: 12px;
    box-shadow: ${theme.shadows.card};
    transition: transform ${theme.transitions.default};
    isolation: isolate;
    position: relative;
    z-index: 10;

    ${theme.media.tablet} {
      padding: 1.5rem;
    }
  }

  .error-message {
    color: #dc3545;
    font-size: 0.9rem;
    padding: 0.5rem;
    background: #fff5f5;
    border-radius: 4px;
    border: 1px solid #dc3545;
    margin-bottom: 0.5rem;
  }

  &:focus-within .search-controls {
    transform: scale(1.02);
    box-shadow: ${theme.shadows.cardHover};
  }
`;

export const SuggestionsList = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  border: 1px solid ${theme.colors.background};
  max-height: 200px;
  overflow-y: auto;
  z-index: 20;

  ${theme.media.tablet} {
    max-height: 240px;
  }
`;

export const SuggestionItem = styled.div`
  padding: 0.6rem 1rem;
  cursor: pointer;
  text-transform: capitalize;
  transition: all ${theme.transitions.default};
  color: ${theme.colors.text};
  background: ${theme.colors.white};

  ${theme.media.tablet} {
    padding: 0.75rem 1.2rem;
    font-size: 1rem;
  }

  &:hover,
  &.selected {
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.background};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.6rem 1rem;
  border: 2px solid ${theme.colors.background};
  border-radius: 8px;
  font-size: 0.9rem;
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  transition: all ${theme.transitions.spring};

  ${theme.media.tablet} {
    font-size: 1rem;
    padding: 0.75rem 1.2rem;
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(100, 108, 255, 0.2);
    transform: translateY(-1px);
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
  transition: all ${theme.transitions.spring};
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    transform: translate(-50%, -50%) scale(0);
    transition: transform ${theme.transitions.default};
  }

  img {
    width: 24px;
    height: 24px;
    transition: transform ${theme.transitions.spring};
  }

  &:hover {
    background: ${theme.colors.primary};
    transform: translateY(-2px);

    &::before {
      transform: translate(-50%, -50%) scale(1);
    }

    img {
      transform: rotate(15deg) scale(1.1);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;
