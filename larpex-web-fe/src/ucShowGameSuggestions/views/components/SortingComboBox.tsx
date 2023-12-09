import React from "react";
import { SortExpression } from "../../viewModels/ShowGameSuggestionsModels";
import "./SortingComboBox.css";

interface SortingComboBoxProps {
  selectedSortExpression: SortExpression | undefined;
  onSortChange: (selectedValue: SortExpression) => void;
}

const SortingComboBox: React.FC<SortingComboBoxProps> = ({
  selectedSortExpression,
  onSortChange,
}) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as SortExpression;
    onSortChange(selectedValue);
  };

  return (
    <div className="sorting-container">
      <label htmlFor="sortExpression" className="sorting-label">
        Sortuj według
      </label>
      <select
        id="sortExpression"
        value={selectedSortExpression || ""}
        onChange={handleSortChange}
        className="sorting-select"
      >
        <option value={SortExpression.CREATIONDATE}>Data utworzenia</option>
        <option value={SortExpression.GAMENAME}>Nazwa gry</option>
      </select>
    </div>
  );
};

export default SortingComboBox;
