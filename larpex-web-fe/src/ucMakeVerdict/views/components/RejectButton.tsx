import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeVerdict } from "../../logic/GameSuggestionsReviewService";
import {
  MakeVerdictRequestDto,
  Verdict,
} from "../../viewModels/MakeVerdictModels";
import "./RejectButton.css";
import VerdictJustificationView from "../VerdictJustificationView";

interface RejectButtonProps {
  gameSuggestionId: string;
}

const RejectButton: React.FC<RejectButtonProps> = ({ gameSuggestionId }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRejectClick = () => {
    setShowModal(true);
  };

  const handleSendJustification = async (justification: string) => {
    try {
      const requestDto: MakeVerdictRequestDto = {
        gameId: gameSuggestionId,
        verdict: Verdict.REJECTED,
        explanation: justification,
      };

      const response = await makeVerdict(requestDto);

      console.log("Verdict sent successfully:", response);

      navigate("/game-suggestions");
    } catch (error) {
      console.error("Error sending verdict:", error);
    } finally {
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="reject-button" onClick={handleRejectClick}>
        Odrzuć
      </button>
      {showModal && (
        <VerdictJustificationView
          onClose={handleCloseModal}
          onSend={handleSendJustification}
        />
      )}
    </>
  );
};

export default RejectButton;
