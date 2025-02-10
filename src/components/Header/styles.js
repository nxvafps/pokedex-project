import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const StyledImage = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
`;
