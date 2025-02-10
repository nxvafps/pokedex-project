import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background: #1a1a1a;
  color: white;
  cursor: pointer;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
