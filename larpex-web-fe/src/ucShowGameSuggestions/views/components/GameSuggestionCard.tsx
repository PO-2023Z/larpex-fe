import { useNavigate } from "react-router-dom";
import { GameSuggestionDto } from "../../viewModels/ShowGameSuggestionsModels";
import "./GameSuggestionCard.css";

const GameSuggestionCard: React.FC<GameSuggestionDto> = ({
  id,
  gameName,
  dateOfCreation,
}) => {
  const navigate = useNavigate();

  const handleOpenGameSuggestionCard = () => {
    navigate(`/game-suggestions/${id}`);
  };

  return (
    <div className="game-suggestion-div">
      <div>
        <h3 className="game-suggestion-title">{gameName}</h3>
        {dateOfCreation instanceof Date && (
          <p>Data dodania: {dateOfCreation.toLocaleDateString("en-GB")}</p>
        )}
      </div>
      <div>
        <button className="open-button" onClick={handleOpenGameSuggestionCard}>
          Otwórz
        </button>
      </div>
    </div>
  );
};

export default GameSuggestionCard;
