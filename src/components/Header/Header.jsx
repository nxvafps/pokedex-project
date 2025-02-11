import pokedexSvg from "../../assets/pokedex.svg";
import { StyledHeader, StyledImage, TransFlag } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <StyledImage src={pokedexSvg} alt="pokedex image" />
      <TransFlag />
    </StyledHeader>
  );
}

export default Header;
