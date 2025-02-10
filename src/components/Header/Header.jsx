import pokedexSvg from "../../assets/pokedex.svg";
import { StyledHeader, StyledImage } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <StyledImage src={pokedexSvg} alt="pokedex image" />
    </StyledHeader>
  );
}

export default Header;
