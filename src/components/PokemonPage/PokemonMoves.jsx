import { useState } from "react";
import { Moves, MoveItem } from "./styles";

function PokemonMoves({ moves }) {
  const [visibleMoves, setVisibleMoves] = useState(10);

  const handleShowMore = () => {
    setVisibleMoves((prev) => prev + 10);
  };

  return (
    <Moves>
      <h3>Moves List</h3>
      <div className="moves-grid">
        {moves.slice(0, visibleMoves).map((move) => (
          <MoveItem key={move.move.name}>
            {move.move.name.replace("-", " ")}
          </MoveItem>
        ))}
      </div>
      {visibleMoves < moves.length && (
        <button onClick={handleShowMore}>Show More Moves</button>
      )}
    </Moves>
  );
}

export default PokemonMoves;
