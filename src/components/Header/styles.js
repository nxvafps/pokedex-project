import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 0.25rem;
  background-color: ${theme.colors.dark};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: ${theme.shadows.card};
  transition: transform 0.3s ease;
  height: calc(${theme.layout.headerHeight} * 0.8);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.25rem;
    height: calc(${theme.layout.headerHeight} * 0.8);
  }

  ${theme.media.tablet} {
    padding: 0.5rem;
    height: ${theme.layout.headerHeight};
  }
`;

export const StyledImage = styled.img`
  height: 3.5em;
  padding: 0.75em;
  will-change: filter;
  transition: all ${theme.transitions.spring};

  &:hover {
    filter: drop-shadow(0 0 1em ${theme.colors.primary});
    transform: scale(1.05) rotate(5deg);
  }

  ${theme.media.tablet} {
    height: 4em;
    padding: 1em;
  }

  ${theme.media.desktop} {
    height: 5em;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 5em;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 3.5em;
    padding: 0.75em;
  }
`;

export const TransFlag = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  overflow: visible;
  cursor: pointer;
  z-index: 99;

  &:hover {
    height: 40px;
    &::after {
      opacity: 0.95;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 0;
    width: 100%;
    height: calc(100% - 6px);
    background: ${theme.colors.dark};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  background: linear-gradient(
    to right,
    #55cdfc 20%,
    #f7a8b8 20%,
    #f7a8b8 40%,
    #ffffff 40%,
    #ffffff 60%,
    #f7a8b8 60%,
    #f7a8b8 80%,
    #55cdfc 80%
  );

  span {
    position: absolute;
    top: 15px;
    opacity: 0;
    transition: opacity 0.3s ease;
    font-weight: bold;
    font-size: 14px;
    transform: translateX(-50%);
    z-index: 2;
  }

  &:hover span {
    opacity: 1;
  }

  .word1 {
    color: #7fddff;
    left: 10%;
  }
  .word2 {
    color: #ffc4d0;
    left: 30%;
  }
  .word3 {
    color: #ffffff;
    left: 50%;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.9);
  }
  .word4 {
    color: #ffc4d0;
    left: 70%;
  }
  .word5 {
    color: #7fddff;
    left: 90%;
  }
`;
