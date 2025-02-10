import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  padding: ${theme.layout.contentPadding};
  margin: 0 auto;
  max-width: ${theme.layout.maxWidth};
  animation: ${slideIn} 0.5s ease-out;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: minmax(300px, auto) 1fr;
    align-items: start;
    gap: 3rem;
  }
`;

export const PokemonInfo = styled.div`
  text-align: center;
  background: ${theme.colors.white};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: ${theme.shadows.card};
  transition: all ${theme.transitions.default};

  &:hover {
    box-shadow: ${theme.shadows.cardHover};
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    text-align: left;
  }

  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.text};
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 4px;
      background: ${theme.colors.primary};
      border-radius: 2px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform ${theme.transitions.spring};
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  p {
    color: ${theme.colors.textLight};
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }
`;

export const BackButton = styled.button`
  position: fixed;
  top: calc(${theme.layout.headerHeight} + 1rem);
  left: 1rem;
  padding: 0.75rem 1.5rem;
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all ${theme.transitions.spring};
  z-index: 10;
  box-shadow: ${theme.shadows.card};

  &:hover {
    background: ${theme.colors.primary};
    transform: translateX(4px);
    box-shadow: ${theme.shadows.cardHover};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    top: calc(${theme.layout.headerHeight} * 0.8 + 0.5rem);
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

export const StyledImage = styled.img`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  image-rendering: pixelated;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
  transition: all ${theme.transitions.spring};
  animation: bounce 1s ${theme.transitions.spring} infinite alternate;

  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-10px);
    }
  }

  &:hover {
    filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.2));
    transform: scale(1.1);
    animation: none;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 200px;
    height: 200px;
  }
`;

export const Types = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }

  span {
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: capitalize;
    color: ${theme.colors.white};
    background: ${(props) =>
      (props.type && theme.colors.types[props.type]) || theme.colors.primary};
    box-shadow: ${theme.shadows.card};
    transition: transform ${theme.transitions.spring};

    &:hover {
      transform: scale(1.05);
      box-shadow: ${theme.shadows.cardHover};
    }
  }
`;

export const PhysicalStats = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: ${theme.colors.white};
  border-radius: 12px;
  box-shadow: ${theme.shadows.card};

  h3 {
    font-size: 1.4rem;
    color: ${theme.colors.text};
    margin-bottom: 1.5rem;
    font-weight: 600;
    position: relative;
    text-align: center;

    &:after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: ${theme.colors.primary};
      border-radius: 2px;
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      text-align: left;

      &:after {
        left: 0;
        transform: none;
      }
    }
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export const StatItem = styled.div`
  padding: 1rem;
  background: ${theme.colors.background};
  border-radius: 8px;
  text-align: center;
  transition: transform ${theme.transitions.spring};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.hover};
  }

  h4 {
    color: ${theme.colors.textLight};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  p {
    color: ${theme.colors.text};
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const StatBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${theme.colors.background};
  border-radius: 4px;
  margin-top: 0.5rem;
  overflow: hidden;
  box-shadow: ${theme.shadows.inset};

  div {
    height: 100%;
    background: ${(props) => {
      const value = props.value;
      if (value >= 150) return theme.colors.types.dragon;
      if (value >= 100) return theme.colors.types.fire;
      if (value >= 70) return theme.colors.types.grass;
      if (value >= 40) return theme.colors.types.water;
      return theme.colors.types.normal;
    }};
    width: ${(props) => Math.min((props.value / 255) * 100, 100)}%;
    transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${theme.shadows.card};
  }
`;

export const Abilities = styled(PhysicalStats)`
  div[role="tablist"] {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 1rem 0;
    justify-content: center;

    @media (min-width: ${theme.breakpoints.tablet}) {
      justify-content: flex-start;
    }
  }
`;

export const AbilityButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  background: ${(props) =>
    props.$isSelected ? theme.colors.primary : theme.colors.dark};
  color: ${theme.colors.white};
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 500;
  transition: all ${theme.transitions.spring};
  border: 2px solid
    ${(props) =>
      props.$isSelected ? theme.colors.primaryHover : "transparent"};
  position: relative;
  padding-left: ${(props) => (props.$isSelected ? "2rem" : "1.5rem")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.hover};
    background: ${theme.colors.primary};
  }

  ${(props) =>
    props.$isSelected &&
    `
    &:before {
      content: "•";
      position: absolute;
      left: 12px;
      color: ${theme.colors.white};
    }
  `}

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${(props) =>
      props.$isSelected ? "0.5rem 1.5rem 0.5rem 2rem" : "0.5rem 1rem"};
    font-size: 0.9rem;
  }
`;

export const Moves = styled(PhysicalStats)`
  grid-column: 1 / -1;
  width: 100%;

  .moves-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  button {
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    background: ${theme.colors.dark};
    color: ${theme.colors.white};
    border: none;
    font-weight: 500;
    transition: all ${theme.transitions.default};

    &:hover {
      background: ${theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`;

export const MoveItem = styled.div`
  padding: 0.75rem 1rem;
  background: ${(props) =>
    props.$isSelected ? theme.colors.primary : theme.colors.background};
  color: ${(props) =>
    props.$isSelected ? theme.colors.white : theme.colors.text};
  border-radius: 8px;
  text-align: center;
  font-size: 0.9rem;
  text-transform: capitalize;
  box-shadow: ${theme.shadows.card};
  transition: all ${theme.transitions.default};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.hover};
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

export const AbilityDescription = styled.div`
  margin-top: 1.5rem;
  padding: 1.2rem;
  background: ${theme.colors.background};
  border-radius: 12px;
  font-size: 1rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  box-shadow: inset ${theme.shadows.card};
  border-left: 4px solid ${theme.colors.primary};
  animation: ${slideIn} 0.3s ease-out;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

export const MoveDescription = styled(AbilityDescription)`
  margin: 1.5rem 0;

  .move-info {
    .effect {
      margin-bottom: 1rem;
    }

    .move-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      span {
        padding: 0.4rem 0.8rem;
        background: ${theme.colors.white};
        border-radius: 6px;
        font-size: 0.9rem;
        color: ${theme.colors.text};

        &.type {
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          text-transform: capitalize;
        }
      }
    }
  }
`;

export const LoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 auto;
  border: 3px solid ${theme.colors.background};
  border-top-color: ${theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
