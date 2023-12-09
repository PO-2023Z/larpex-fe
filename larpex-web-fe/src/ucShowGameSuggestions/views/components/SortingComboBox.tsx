import React from "react";
import { SortExpression } from "../../viewModels/ShowGameSuggestionsModels";

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
    <div>
      <label htmlFor="sortExpression">Sort by:</label>
      <select
        id="sortExpression"
        value={selectedSortExpression || ""}
        onChange={handleSortChange}
      >
        <option value={SortExpression.CREATIONDATE}>Creation Date</option>
        <option value={SortExpression.GAMENAME}>Game Name</option>
      </select>
    </div>
  );
};

export default SortingComboBox;
