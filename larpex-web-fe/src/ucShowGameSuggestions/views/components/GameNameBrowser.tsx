import { useState } from "react";

interface GameNameBrowserProps {
  onSearch: (gameName: string) => void;
}

const GameNameBrowser: React.FC<GameNameBrowserProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter game name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Find</button>
    </div>
  );
};

export default GameNameBrowser;
