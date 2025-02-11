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
  gap: 1.5rem;
  padding: 3rem 1rem 1rem;
  margin: 0 auto;
  max-width: ${theme.layout.maxWidth};
  animation: ${slideIn} 0.5s ease-out;

  ${theme.media.tablet} {
    gap: 2rem;
    padding: 2.5rem ${theme.layout.contentPadding} 2rem;
  }

  ${theme.media.desktop} {
    gap: 3rem;
  }
`;

export const PokemonInfo = styled.div`
  text-align: center;
  background: linear-gradient(
    to bottom right,
    ${(props) =>
      `${theme.colors.types[props.$primaryType]}10` || theme.colors.white},
    ${theme.colors.white}
  );
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: ${theme.shadows.card};
  transition: all ${theme.transitions.default};
  border: 1px solid
    ${(props) =>
      `${theme.colors.types[props.$primaryType]}20` || theme.colors.background};
  grid-column: 1 / -1;

  ${theme.media.tablet} {
    padding: 2rem;
  }

  &:hover {
    box-shadow: ${theme.shadows.cardHover};
  }

  .pokemon-header {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 1.5rem;
    align-items: start;
    margin-bottom: 2rem;
    width: 100%;

    ${theme.media.tablet} {
      gap: 2.5rem;
    }
  }

  .pokemon-details {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    min-width: 0;
    padding: 0.5rem 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    .pokemon-header {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
      gap: 1.5rem;
    }

    .pokemon-details {
      text-align: center;
      align-items: center;
      width: 100%;
    }
  }

  h2 {
    font-size: 2rem;
    color: ${(props) =>
      theme.colors.types[props.$primaryType] || theme.colors.text};
    margin: 0;
    text-transform: capitalize;
    position: relative;
    display: inline-block;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2);
    line-height: 1.2;

    ${theme.media.tablet} {
      font-size: 2.5rem;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 4px;
      background: ${(props) =>
        theme.colors.types[props.$primaryType] || theme.colors.primary};
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
    font-size: 1.4rem;
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    display: inline-block;
    position: relative;
    z-index: 1;
    letter-spacing: 1px;
    padding: 0.2rem 0.8rem;
    margin: 0;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: ${theme.shadows.card};
  }
`;

export const BackButton = styled.button`
  position: fixed;
  top: calc(${theme.layout.headerHeight} * 0.8 + 1.5rem + 6px);
  left: 1rem;
  padding: 0.5rem 1rem;
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all ${theme.transitions.spring};
  z-index: 10;
  box-shadow: ${theme.shadows.card};
  font-size: 0.9rem;

  ${theme.media.tablet} {
    top: calc(${theme.layout.headerHeight} + 1.5rem + 6px);
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  &:hover {
    background: ${theme.colors.primary};
    transform: translateX(4px);
    box-shadow: ${theme.shadows.cardHover};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    top: calc(${theme.layout.headerHeight} * 0.8 + 1.5rem + 6px);
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  image-rendering: pixelated;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
  transition: all ${theme.transitions.spring};
  animation: bounce 1s ${theme.transitions.spring} infinite alternate;

  ${theme.media.tablet} {
    width: 250px;
    height: 250px;
  }

  ${theme.media.desktop} {
    width: 300px;
    height: 300px;
  }

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
  margin-bottom: 0;

  @media (min-width: ${theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;

export const TypeBadge = styled.span`
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: capitalize;
  color: ${theme.colors.white};
  background: ${({ type }) => theme.colors.types[type] || theme.colors.primary};
  box-shadow: ${theme.shadows.card};
  transition: transform ${theme.transitions.spring};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${theme.shadows.cardHover};
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
  height: 6px;
  background: ${theme.colors.background};
  border-radius: 4px;
  margin-top: 0.5rem;
  overflow: hidden;
  box-shadow: ${theme.shadows.inset};

  ${theme.media.tablet} {
    height: 8px;
  }

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
          background: ${({ $moveType }) =>
            theme.colors.types[$moveType] || theme.colors.primary};
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
