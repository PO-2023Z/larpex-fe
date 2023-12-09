import { GameSuggestionDto } from "../../viewModels/ShowGameSuggestionsModels";
import "./GameSuggestionCard.css";
import GameSuggestionCard from "./GameSuggestionCard";

interface GameSuggestionsListProps {
  items: GameSuggestionDto[];
}

const GameSuggestionsList: React.FC<GameSuggestionsListProps> = ({ items }) => {
  return (
    <div className="game-suggestions-list-div">
      {items.map((suggestion) => (
        <GameSuggestionCard
          key={suggestion.id}
          id={suggestion.id}
          gameName={suggestion.gameName}
          dateOfCreation={suggestion.dateOfCreation}
        />
      ))}
    </div>
  );
};

export default GameSuggestionsList;
