export const theme = {
  colors: {
    primary: "#646cff",
    primaryHover: "#535bf2",
    background: "#f5f5f5",
    dark: "#1a1a1a",
    text: "#213547",
    textLight: "#666",
    white: "#ffffff",
    // Pokemon type colors with improved contrast
    types: {
      normal: "#A8A878",
      fire: "#F08030",
      water: "#6890F0",
      electric: "#F8D030",
      grass: "#78C850",
      ice: "#98D8D8",
      fighting: "#C03028",
      poison: "#A040A0",
      ground: "#E0C068",
      flying: "#A890F0",
      psychic: "#F85888",
      bug: "#A8B820",
      rock: "#B8A038",
      ghost: "#705898",
      dragon: "#7038F8",
      dark: "#705848",
      steel: "#B8B8D0",
      fairy: "#EE99AC"
    }
  },
  shadows: {
    card: "0 2px 8px rgba(0, 0, 0, 0.1)",
    hover: "0 4px 12px rgba(0, 0, 0, 0.15)",
    cardHover: "0 8px 16px rgba(0, 0, 0, 0.2)",
    inset: "inset 0 2px 4px rgba(0, 0, 0, 0.1)"
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
  },
  transitions: {
    default: "0.2s ease",
    hover: "0.3s ease",
    spring: "0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  },
  layout: {
    maxWidth: "1280px",
    contentPadding: "2rem",
    headerHeight: "5rem"
  }
};
