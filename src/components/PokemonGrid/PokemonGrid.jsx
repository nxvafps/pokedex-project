import { PokemonCard, Pagination } from "../";
import { Grid, PaginationContainer } from "./styles";

function PokemonGrid({
  pokemons,
  prevPage,
  nextPage,
  goToPrevPage,
  goToNextPage,
  onPokemonSelect,
}) {
  return (
    <Grid>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onSelect={onPokemonSelect}
        />
      ))}
      <PaginationContainer>
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          goToPrevPage={goToPrevPage}
          goToNextPage={goToNextPage}
        />
      </PaginationContainer>
    </Grid>
  );
}

export default PokemonGrid;
