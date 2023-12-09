import {
  makeVerdict,
  useNavigation,
} from "../../logic/GameSuggestionsReviewService";
import {
  MakeVerdictRequestDto,
  Verdict,
} from "../../viewModels/MakeVerdictModels";
import "./AcceptButton.css";

interface AcceptButtonProps {
  gameSuggestionId: string;
}

const AcceptButton: React.FC<AcceptButtonProps> = ({ gameSuggestionId }) => {
  const { navigateToGameSuggestions } = useNavigation();

  const handleAcceptClick = async () => {
    const requestDto: MakeVerdictRequestDto = {
      id: gameSuggestionId,
      verdict: Verdict.ACCEPTED,
      explanation: "",
    };

    try {
      const response = await makeVerdict(requestDto);
      console.log("dd: ", response);
      navigateToGameSuggestions();
    } catch (error) {
      console.error("Error making verdict:", error);
    }
  };

  return (
    <button className="accept-button" onClick={handleAcceptClick}>
      Zatwierdź
    </button>
  );
};

export default AcceptButton;
