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
        <p>{gameName}</p>
        <p>{dateOfCreation.toDateString()}</p>
      </div>
      <div>
        <button onClick={handleOpenGameSuggestionCard}>Otwórz</button>
      </div>
    </div>
  );
};

export default GameSuggestionCard;
