import { useNavigation } from "../../logic/GameSuggestionsReviewService";
import "./AddCorrectionButton.css";

interface AddCorrectionButtonProps {
  gameSuggestionId: string;
}

const AddCorrectionButton: React.FC<AddCorrectionButtonProps> = ({
  gameSuggestionId,
}) => {
  const { navigateToAddCorrection } = useNavigation();

  return (
    <button
      className="add-correction-button"
      onClick={() => navigateToAddCorrection(gameSuggestionId)}
    >
      Dodaj poprawkę
    </button>
  );
};

export default AddCorrectionButton;
