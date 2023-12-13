import "./AddCorrectionButton.css";

interface AddCorrectionButtonProps {
  onClick: (e: React.MouseEvent) => void;
}

const AddCorrectionButton: React.FC<AddCorrectionButtonProps> = ({
  onClick,
}) => {
  return (
    <button className="add-correction-button" onClick={(e) => onClick(e)}>
      Dodaj poprawkę
    </button>
  );
};

export default AddCorrectionButton;
