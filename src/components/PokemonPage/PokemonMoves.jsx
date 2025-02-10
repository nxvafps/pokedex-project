import { useState } from "react";
import { getMoveDetails } from "../../utils/api";
import { Moves, MoveItem, LoadingSpinner, MoveDescription } from "./styles";

function PokemonMoves({ moves }) {
  const [visibleMoves, setVisibleMoves] = useState(10);
  const [selectedMove, setSelectedMove] = useState(null);
  const [moveDetails, setMoveDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowMore = () => {
    setVisibleMoves((prev) => prev + 10);
  };

  const fetchMoveDetails = async (url) => {
    try {
      setIsLoading(true);
      const data = await getMoveDetails(url);
      const englishDescription = data.effect_entries.find(
        (entry) => entry.language.name === "en"
      );
      setMoveDetails({
        effect: englishDescription
          ? englishDescription.short_effect
          : "No description available",
        type: data.type.name,
        power: data.power,
        accuracy: data.accuracy,
        pp: data.pp,
      });
    } catch (error) {
      console.error("Error fetching move details:", error);
      setMoveDetails({ effect: "Failed to load move details" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleMoveClick = (move) => {
    if (selectedMove === move.move.name) {
      setSelectedMove(null);
      setMoveDetails(null);
    } else {
      setSelectedMove(move.move.name);
      fetchMoveDetails(move.move.url);
    }
  };

  return (
    <Moves>
      <h3>Moves List</h3>
      <div className="moves-grid">
        {moves.slice(0, visibleMoves).map((move) => (
          <MoveItem
            key={move.move.name}
            onClick={() => handleMoveClick(move)}
            $isSelected={selectedMove === move.move.name}
          >
            {move.move.name.replace("-", " ")}
          </MoveItem>
        ))}
      </div>

      {selectedMove && (
        <MoveDescription moveType={moveDetails?.type}>
          {isLoading ? (
            <LoadingSpinner aria-label="Loading move details..." />
          ) : (
            moveDetails && (
              <div className="move-info">
                <p className="effect">{moveDetails.effect}</p>
                <div className="move-stats">
                  <span className="type">Type: {moveDetails.type}</span>
                  {moveDetails.power && <span>Power: {moveDetails.power}</span>}
                  {moveDetails.accuracy && (
                    <span>Accuracy: {moveDetails.accuracy}%</span>
                  )}
                  {moveDetails.pp && <span>PP: {moveDetails.pp}</span>}
                </div>
              </div>
            )
          )}
        </MoveDescription>
      )}

      {visibleMoves < moves.length && (
        <button onClick={handleShowMore}>Show More Moves</button>
      )}
    </Moves>
  );
}

export default PokemonMoves;
