import { useState } from "react";
import { addCorrection } from "../../api/larpex-api-wrapper";
import "./AddCorrectionModal.css";

interface AddCorrectionModalProps {
  gameId: string;
  isOpen: boolean;
  onClose: () => void;
}

const AddCorrectionModal: React.FC<AddCorrectionModalProps> = ({
  gameId,
  isOpen,
  onClose,
}) => {
  const [message, setMessage] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();

  const handleAddCorrection = async () => {
    if (!message?.trim()) {
      setError("Poprawka nie może być pusta.");
      return;
    }

    try {
      await addCorrection(gameId, message);
      onClose();
    } catch (error) {
      setError("Wystąpił nieoczekiwany błąd.");
      console.error(error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="content">
        <div className="header">
          <h3 className="purple-text">Dodaj poprawkę</h3>
        </div>
        <div>
          <div>
            <label>
              <span>Treść poprawki</span>
              <textarea
                placeholder="..."
                name="correction"
                id="correction"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {error && <span className="error-message">{error}</span>}
            </label>
          </div>
          <div className="bottom-buttons">
            <button className="cancel-button" onClick={onClose}>
              Anuluj
            </button>
            <button
              className="add-correction-button"
              onClick={handleAddCorrection}
            >
              Dodaj poprawkę
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCorrectionModal;
