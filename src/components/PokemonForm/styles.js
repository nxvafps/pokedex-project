import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin: 2rem auto;
  max-width: 400px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border: 2px solid #1a1a1a;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #646cff;
  }
`;

export const SearchButton = styled.button`
  background: #1a1a1a;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: #646cff;
  }
`;
