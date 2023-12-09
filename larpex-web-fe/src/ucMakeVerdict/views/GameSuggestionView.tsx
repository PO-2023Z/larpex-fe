import { useParams } from "react-router-dom";
import "./GameSuggestionView.css";

interface GameSuggestionViewProps {}

const GameSuggestionView: React.FC<GameSuggestionViewProps> = () => {
  const { gameSuggestionId } = useParams();

  return <div>game suggestion id={gameSuggestionId}</div>;
};

export default GameSuggestionView;
