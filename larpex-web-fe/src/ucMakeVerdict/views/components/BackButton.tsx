import { useNavigation } from "../../logic/GameSuggestionsReviewService";
import "./BackButton.css";

const BackButton: React.FC = () => {
  const { navigateToGameSuggestions } = useNavigation();

  return (
    <button className="back-button" onClick={navigateToGameSuggestions}>
      Wróć
    </button>
  );
};

export default BackButton;
