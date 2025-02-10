import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0.5rem;
`;

export const PaginationButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
  font-weight: 500;
  cursor: pointer;
  transition: background ${theme.transitions.default},
    transform ${theme.transitions.default};

  &:hover:not(:disabled) {
    background: ${theme.colors.primary};
    transform: translateY(-2px);
  }

  &:disabled {
    background: ${theme.colors.textLight};
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;
