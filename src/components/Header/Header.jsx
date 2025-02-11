import pokedexSvg from "../../assets/pokedex.svg";
import { StyledHeader, StyledImage, TransFlag } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <StyledImage src={pokedexSvg} alt="pokedex image" />
      <TransFlag>
        <span className="word1">trans</span>
        <span className="word2">rights</span>
        <span className="word3">are</span>
        <span className="word4">human</span>
        <span className="word5">rights</span>
      </TransFlag>
    </StyledHeader>
  );
}

export default Header;
