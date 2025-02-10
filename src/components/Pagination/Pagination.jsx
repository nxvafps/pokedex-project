import { PaginationContainer, PaginationButton } from "./styles";

function Pagination({ prevPage, nextPage, goToPrevPage, goToNextPage }) {
  return (
    <PaginationContainer>
      <PaginationButton onClick={goToPrevPage} disabled={!prevPage}>
        Previous
      </PaginationButton>
      <PaginationButton onClick={goToNextPage} disabled={!nextPage}>
        Next
      </PaginationButton>
    </PaginationContainer>
  );
}

export default Pagination;
